import { useState, useEffect } from "react"
import { getProduts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    const { categoryId } = useParams ()

    useEffect (() => {
        const asyncFun = categoryId ? getProductsByCategory : getProduts

        asyncFun(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
        console.error(error)
    })
}, [categoryId])
    
    return (
        <>
        <h1>{greeting}</h1>
        <ItemList products ={products}/>
        </>
    )
}



export default ItemListContainer