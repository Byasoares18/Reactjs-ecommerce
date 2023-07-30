
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { collection, doc,addDoc, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total(),
        date: new Date().toISOString(),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const productIds = cart.map((product) => product.id);

      const productsRef = collection(db, 'items');

      const productsSnapshot = await getDocs(query(productsRef, where(doc('id'), 'in', productIds)));

      productsSnapshot.forEach((doc) => {
        const productData = doc.data();
        const stockDb = productData.stock;

        const productInCart = cart.find((product) => product.id === doc.id);
        const cartQuantity = productInCart?.quantity;
        if (stockDb >= cartQuantity) {
          batch.update(doc.ref, { stock: stockDb - cartQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...productData });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');
        const newOrderRef = await addDoc(orderRef, objOrder);

        setOrderId(newOrderRef.id);
        clearCart();
      } else {
        console.error('Hay productos que están fuera de stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Se está generando su orden...</h2>;
  }

  if (orderId) {
    return <h2>El id de su orden es: {orderId}</h2>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <h3> Total: ${total()}</h3>
      <button onClick={() => clearCart()} className="Button">
        Limpiar carrito
      </button>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;


