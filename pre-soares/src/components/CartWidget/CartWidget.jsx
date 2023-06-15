import cart from "./assets/cart.png"

const styles = {
    img: {
    heigth: "2rem",
    width:"auto",

    },
}

export const CartWidget = () =>(
    <>
    <img src={cart} style={styles.img} alt="CartWidget" />
    <span>0</span>
    </>
)     

export default CartWidget