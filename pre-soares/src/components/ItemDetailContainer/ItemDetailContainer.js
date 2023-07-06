import { useState, useEffect } from "react";
import { getProdutsById } from "../../asyncMock";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState (null)
    const { itemId} = useParams ()

    useEffect (() => {
        getProdutsById (itemId)
        .then (Response)
    })
    .catch (error => {
        console.error(error)
    },[itemId])  
    
    returnc(
        <div className="ItemDetailContainer" >
            <itemDetail {...product}/>

        </div>
    )
}

export default ItemDetailContainer
    


