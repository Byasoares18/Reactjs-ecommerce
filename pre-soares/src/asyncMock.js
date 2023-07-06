const products =[
    { 
        id: '1',
        name: 'Anillo conjunto',
        price: 2000,
        category: 'anillo',
        img: '',
        stock: 25,
        description: 'anillo conjunto'
    },
    { id:'2', name:'arito', price:1000,category: 'arito',img:''},

    { id:'3', name: 'Pulsera',price:2000,category: 'pulsera',img:''}

]   

export const getProduts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products)
        }, 500)
    })

}


