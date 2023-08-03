

import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import car from "./assets/car.png";

const styles = {
  img: {
    height: "1rem",
    width: "1rem",
  },
  span: {
    margin: "1rem",
    padding: 10,
  },
};

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget">
      <img src={car} style={styles.img} alt="CartWidget" />
      <span style={styles.span}> {totalQuantity()} </span>
    </Link>
  );
};

export default CartWidget;
