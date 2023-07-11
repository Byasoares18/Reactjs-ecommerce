

import './ItemList.css'
import Item from '../Item/Item'
import {  } from '../../products/asyncMock'
import React from 'react'

const ItemList = ({ products }) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} /> )}

        </div>
    )
}

export default ItemList