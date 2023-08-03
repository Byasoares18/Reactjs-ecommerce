

import React, { useState } from 'react';
import { db, storage } from '../../service/firebase/firebaseConfig';

const AddProducts = () => {
  const [Name, setProductName] = useState('');
  const [Price, setProductPrice] = useState(0);
  const [Img, setProductImg] = useState(null);
  const [error, setError] = useState('');

  const types = ['image/jpeg']; 

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
