import cart from "./assets/cart.png"

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

export const CartWidget = () =>(
    <>
    <img src={cart} style={styles.img} alt="CartWidget" />
    <span style={styles.span}>0</span> 
    </>
)     

export default CartWidget