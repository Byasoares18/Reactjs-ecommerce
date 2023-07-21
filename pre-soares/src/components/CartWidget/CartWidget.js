import cart from "./assets/cart.png"
import { useContext } from "react";
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom";


const styles = {
    img: {
    heigth: "1rem",
    width:"1rem",
    

    },
    span:{
    margin:"1rem",
    padding: 10,
    },
}

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div>
    <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}></Link>

    <img src={cart} style={styles.img} alt="CartWidget" />
    {totalQuantity}
    <span style={styles.span}>{totalQuantity}</span>
    </div>
    );
};
    

export default CartWidget;