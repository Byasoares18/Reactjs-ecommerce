import img1 from '../products/img1.jpg'
import img2 from '../products/img2.jpg'
import img3 from '../products/img3.jpg'
import img4 from '../products/img4.jpg'


export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        const filteredProducts = products.filter((product) => product.category === category);
        resolve(filteredProducts);
    }, 500);
    });
};

const products = [
    {
    id: '1',
    name: 'Product 1',
    price: 1000,
    category: 'category1',
    img: img1,
    stock: 10,
    },
    {
    id: '2',
    name: 'Product 2',
    price: 2000,
    category: 'category2',
    img: img2,
    stock: 5,
      
    },
    {
    id: '3',
    name: 'Product 3',
    price: 1500,
    category: 'category3',
    img: img3,
    stock: 8,
    },
    {
        id: '4',
        name: 'Product 4',
        price: 1500,
        category: 'category4',
        img: img4,
        stock: 8,
    },
  ];
  
    export const getProductById = (id) => {
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

