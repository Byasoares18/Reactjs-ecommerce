import { createContext, useState } from "react";

export const CartContext = createContext({
  productosAgregados: [],
  addItem: () => {},
  deleteItem: () => {},
  totalQuantity: () => {},
});

export const CartProvider = ({ children }) => {
  const [productosAgregados, setProductosAgregados] = useState([]);

  const addItem = (item, quantity) => {
    const { stock, ...rest } = item;
    const alreadyExists = productosAgregados.some((item) => item.id === rest.id);

    if (!alreadyExists) {
      setProductosAgregados((prev) => [...prev, { ...rest, quantity }]);
    } else {
      const actualizarProductos = productosAgregados.map((item) => {
        if (item.id === rest.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else {
          return item;
        }
      });
      setProductosAgregados(actualizarProductos);
    }
  };

  const deleteItem = (id) => {
    const otrosProductos = productosAgregados.filter((item) => item.id !== id);
    setProductosAgregados(otrosProductos);
  };

  const totalQuantity = () => {
    return productosAgregados.reduce(
      (acumulador, valorActual) => acumulador + valorActual.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        productosAgregados,
        addItem,
        deleteItem,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
