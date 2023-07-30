// import React, { useState } from "react";
// import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
// import { db } from '../../service/firebase/firebaseConfig';

// const CheckoutForm = ({ onConfirm }) => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [productName, setProductName] = useState('');
//   const [productPrice, setProductPrice] = useState(0);
//   const [productCategory, setProductCategory] = useState('');
//   const [productImg, setProductImg] = useState('');
//   const [productStock, setProductStock] = useState(0);

//   const handleConfirm = (event) => {
//     event.preventDefault();

//     const userData = {
//       name,
//       phone,
//       email,
//     };

//     onConfirm(userData);
//   };

//   const handleAddProduct = async (event) => {
//     event.preventDefault();

//     const newProduct = {
//       name: productName,
//       price: productPrice,
//       category: productCategory,
//       img: productImg,
//       stock: productStock,
//     };

//     try {
//       const docRef = await addDoc(collection(db, 'items'), newProduct);
//       const productId = docRef.id;
//       await updateDoc(doc(db, 'items', productId), { id: productId });
//       console.log(`Produto com ID ${productId} adicionado.`);
//     } catch (error) {
//       console.error('Erro ao adicionar produto: ', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Checkout Form</h2>
//       <form onSubmit={handleConfirm}>
//         {/* Campos do formulário de checkout */}
//         <label>
//           Nome:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <label>
//           Telefone:
//           <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
//         </label>
//         <label>
//           E-mail:
//           <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <button type="submit">Confirmar Checkout</button>
//       </form>

//       <h2>Adicionar Produto</h2>
//       <form onSubmit={handleAddProduct}>
//         {/* Campos do formulário de adicionar produto */}
//         <label>
//           Nome do Produto:
//           <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
//         </label>
//         <label>
//           Preço:
//           <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
//         </label>
//         <label>
//           Categoria:
//           <input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
//         </label>
//         <label>
//           URL da Imagem:
//           <input type="text" value={productImg} onChange={(e) => setProductImg(e.target.value)} />
//         </label>
//         <label>
//           Estoque:
//           <input type="number" value={productStock} onChange={(e) => setProductStock(e.target.value)} />
//         </label>
//         <button type="submit">Adicionar Produto</button>
//       </form>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { db, storage } from '../../service/firebase/firebaseConfig';

const AddProducts = () => {
  const [Name, setProductName] = useState('');
  const [Price, setProductPrice] = useState(0);
  const [Img, setProductImg] = useState(null);
  const [error, setError] = useState('');

  const types = ['image/jpeg']; // image types

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError('');
    } else {
      setProductImg(null);
      setError('Please select a valid image type (jpg or png)');
    }
  };

  // add product
  const addProduct = (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`product-images/${Img.name}`).put(Img);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (err) => setError(err.message),
      () => {
        storage
          .ref('product-images')
          .child(Img.name)
          .getDownloadURL()
          .then((url) => {
            db.collection('items')
              .add({
                Name: Name,
                Price: Number(Price),
                Img: url,
              })
              .then(() => {
                setProductName('');
                setProductPrice(0);
                setProductImg(null);
                setError('');
                document.getElementById('file').value = '';
              })
              .catch((err) => setError(err.message));
          });
      }
    );
  };

  return (
    <div className='container'>
      <br />
      <h2>ADD PRODUCTS</h2>
      <hr />
      <form autoComplete='off' className='form-group' onSubmit={addProduct}>
        <label htmlFor='product-name'>Product Name</label>
        <input
          type='text'
          className='form-control'
          required
          onChange={(e) => setProductName(e.target.value)}
          value={Name}
        />
        <br />
        <label htmlFor='product-price'>Product Price</label>
        <input
          type='number'
          className='form-control'
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={Price}
        />
        <br />
        <label htmlFor='product-img'>Product Image</label>
        <input type='file' className='form-control' id='file' required onChange={productImgHandler} />
        <br />
        <button type='submit' className='btn btn-success btn-md mybtn'>
          ADD
        </button>
      </form>
      {error && <span className='error-msg'>{error}</span>}
    </div>
  );
};

export default AddProducts;
