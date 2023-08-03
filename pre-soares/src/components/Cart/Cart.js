import React, { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { productosAgregados, deleteItem, clear } = useContext(CartContext);

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items: productosAgregados,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then((response) => {
        if (response.id) {
          clear();
          alert("Su orden: " + response.id + " ha sido completada!");
        }
      })
      .catch((error) => {
        console.error("Error al enviar el pedido:", error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const total = () =>
    productosAgregados.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price,
      0
    );

  return (
    <Container className="mt-4">
      <h1>Lista de productos</h1>
      {!productosAgregados.length ? (
        <mark>No hay productos</mark>
      ) : (
        <>
          <Table striped bordered hover variant="blue">
            <thead>
              <tr>
                <th>Nombre</th>
                <th></th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productosAgregados.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>
                    <img
                      height={60}
                      src={product.img}
                      alt={product.name}
                    />
                  </td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td><td>${product.price * product.quantity}</td>
                  
        </td>
        
        <td>
          <Button onClick={() => deleteItem(product.id)}>Eliminar</Button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{total()}</td>

                <td><button onClick={clear}>Vaciar carrito</button></td>
              </tr>
            </tfoot>
          </Table>
          <h2>Ingresar datos de usuario</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={sendOrder}>
              Enviar Pedido
            </Button>
          </Form>
        </>
      )}
    </Container>
    )
  }
   export default Cart