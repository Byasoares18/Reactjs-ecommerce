import img1 from '../products/img1.jpg'
import img2 from '../products/img2.jpg'
import img3 from '../products/img3.jpg'
import img4 from '../products/img4.jpg'
import img5 from '../products/img5.jpg'
import img6 from '../products/img6.jpg'
import img7 from '../products/img7.jpg'
import img8 from '../products/img8.jpg'
import img9 from '../products/img9.jpg'
import img10 from '../products/img10.jpg'
import img11 from '../products/img11.jpg'
import img12 from '../products/img12.jpg'



export const getProductsByCategory = async(category) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        const filteredProducts = products.filter((product) => product.category === category);
        resolve(filteredProducts);
    }, 500);
    });
};

export const products = [
    {id: '1',name: 'Product 1',price: 1000,category: 'category2',img: img1,stock: 10,},
    {id: '2',name: 'Product 2',price: 2000,category: 'category1',img: img2,stock: 5,},
    {id: '3',name: 'Product 3',price: 1500,category: 'category3',img: img3,stock: 8,},
    {id: '4',name: 'Product 4',price: 1500,category: 'category4',img: img4,stock: 8,},
    {id: '5',name: 'Product 5',price: 1500,category: 'category2',img: img5,stock: 8,},
    {id: '6',name: 'Product 6',price: 1500,category: 'category3',img: img6,stock: 8,},
    {id: '7',name: 'Product 7',price: 1500,category: 'category1',img: img7,stock: 8,},
    {id: '8',name: 'Product 8',price: 1500,category: 'category4',img: img8,stock: 8,},
    {id: '9',name: 'Product 9',price: 1500,category: 'category1',img: img9,stock: 8,},
    {id: '10',name: 'Product 10',price: 1500,category: 'category2',img: img10,stock: 8,},
    {id: '11',name: 'Product 11',price: 1500,category: 'category3',img: img11,stock: 8,},
    {id: '12',name: 'Product 12',price: 1500,category: 'category4',img: img12,stock: 8,},




];

    export const getProductById = async(id) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const product = products.find((product) => product.id === id);
        if (product) {
            resolve(product);
        } else {
        reject(new Error(`Product with id ${id} not found`));
        }
    }, 500);
    });
};


export const getAllProducts = async () => {
    try {
    
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    return data;
    } catch (error) {
    throw new Error("Erro al buscar todos los productos: " + error.message);
    }
};


export default getAllProducts;