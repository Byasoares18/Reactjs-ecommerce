


import React, { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div className="container">
      <form onSubmit={handleConfirm} className="form">
        <label className="label">
          Nombre
          <input
            className="input"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label className="label">
          Telefono
          <input
            className="input"
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>

        <label className="label">
          E-mail
          <input
            className="input"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <button type="submit" className="button">
          Confirmar
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
