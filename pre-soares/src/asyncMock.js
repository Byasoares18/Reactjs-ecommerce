

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
    img: require('./products/img2.jpg').default,
    stock: 10,
    },
    {
    id: '2',
    name: 'Product 2',
    price: 2000,
    category: 'category2',
    img: require('../src/products/img1.jpg').default,
    stock: 5,
      
    },
    {
    id: '3',
    name: 'Product 3',
    price: 1500,
    category: 'category3',
    img: require('./products/img3.jpg').default,
    stock: 8,
    },
    {
        id: '4',
        name: 'Product 4',
        price: 1500,
        category: 'category4',
        img: require('./products/img4.jpg').default,
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

