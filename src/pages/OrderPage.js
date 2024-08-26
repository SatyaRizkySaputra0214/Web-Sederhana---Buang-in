import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPage({ setOrderDetails }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [bags, setBags] = useState(1);
  const [method, setMethod] = useState('Cash');
  const navigate = useNavigate();

  const totalAmount = bags * 10000;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set order details and navigate to confirmation page
    setOrderDetails({ name, address, bags, method, totalAmount });
    navigate('/order/confirm');
  };

  return (
    <div className="order-page">
      <h2>Order Pengambilan Sampah</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nama:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /> <br></br><br></br>
        </label>
        <label>
          Alamat:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          /> <br></br><br></br>
        </label>
        <label>
          Jumlah Kantong Sampah:
          <input
            type="number"
            value={bags}
            onChange={(e) => setBags(Number(e.target.value))}
            min="1"
            required
          />
        </label>
        <h3>Pembayaran</h3>
        <label>
          Metode Pembayaran:
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="Cash">Cash</option>
            <option value="Non-Cash">Non-Cash</option>
          </select>
        </label>
        <p>Total: Rp {totalAmount.toLocaleString()}</p>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default OrderPage;
