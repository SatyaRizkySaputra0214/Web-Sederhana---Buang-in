import React from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmPage({ orderDetails, addToHistory }) {
  const navigate = useNavigate();

  const handleConfirm = () => {
    addToHistory(orderDetails);
    alert('Order berhasil dibuat!');
    navigate('/');
  };

  return (
    <div className="confirm-page">
      <h2>Konfirmasi Order</h2>
      <p>Nama: {orderDetails.name}</p>
      <p>Alamat: {orderDetails.address}</p>
      <p>Jumlah Kantong Sampah: {orderDetails.bags}</p>
      <p>Metode Pembayaran: {orderDetails.method}</p>
      <p>Total: Rp {orderDetails.totalAmount.toLocaleString()}</p>
      <button onClick={handleConfirm}>Konfirmasi</button>
    </div>
  );
}

export default ConfirmPage;
