import { useState } from "react";

export const useCart = () => {
  const [productosAgregados, setProductosAgregados] = useState([]);

  const addItem = (product, quantity) => {
    const { stock, ...rest } = product;
    const alreadyExists = productosAgregados.some(
      (product) => product.id === rest.id
    );

    if (!alreadyExists) {
      setProductosAgregados((prev) => [...prev, { ...rest, quantity }]);
    } else {
      const actualizarProductos = productosAgregados.map((product) => {
        if (product.id === rest.id) {
          return {
            ...product,
            quantity: product.quantity + quantity,
          };
        } else {
          return product;
        }
      });
      setProductosAgregados(actualizarProductos);
    }
  };

  const deleteItem = (id) => {
    const otrosProductos = productosAgregados.filter(
      (product) => product.id !== id
    );
    setProductosAgregados(otrosProductos);
  };

  const clear = () => setProductosAgregados([]);

  const totalQuantity = () => {
    return productosAgregados.reduce(
      (acumulador, valorActual) => acumulador + valorActual.quantity,
      0
    );
  };

  return {
    productosAgregados,
    addItem,
    clear,
    deleteItem,
    totalQuantity,
  };
};
 
