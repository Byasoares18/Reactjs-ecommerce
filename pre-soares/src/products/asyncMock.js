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
    {id: 'o3Eig0Fd9MOvCctpYAuK',name: 'kit cobra anillos',price: 1000,category: 'category2',img: img1,stock: 10},
    {id: '4nRyIdbisJNflIoGjvFo',name: 'Arito hoja',price: 2000,category: 'category1',img: img2,stock: 5},
    {id: 'u2OsdidLSCtM1TG32qmk',name: 'Collar Proteccion',price: 1500,category: 'category3',img: img3,stock: 8},
    {id: 'tpPDHi5jt6asA4u53zZA',name: 'Pulsera pedritas',price: 1500,category: 'category4',img: img4,stock: 8},
    {id: 'l4niuDzN8d3OdX1v9PjI',name: 'anillos piedra clara',price: 1500,category: 'category2',img: img5,stock: 8},
    {id: 'rAwF3usggY0TP3he8Nu8',name: 'Collar 3 en 1',price: 1500,category: 'category3',img: img6,stock: 8},
    {id: 'U4qqkhotUHSGRKLHtnsi',name: 'Aritos Argollitas',price: 1500,category: 'category1',img: img7,stock: 8},
    {id: 'lYezXtE31SGDc81I3gEq',name: 'Pulsera piedra rosa',price: 1500,category: 'category4',img: img8,stock: 8},
    {id: 'VmkfGiRi4rWya1NzcSmm',name: 'Arito cristal',price: 1500,category: 'category1',img: img9,stock: 8},
    {id: 'NpXTiIjkJCoBEWm6cryW',name: 'Kit ojo anillos',price: 1500, category: 'category2',img: img10, stock: 8},
    {id: 'tgMGizPkIFkYPAvemh8l',name: 'Collar piedrita verde ',price: 1500,category: 'category3',img: img11,stock: 8},
    {id: 'RVdQ6Zx3GywHvS2txlhy',name: 'Pulsera piedra verde',price: 1500,category: 'category4',img: img12,stock: 8},




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