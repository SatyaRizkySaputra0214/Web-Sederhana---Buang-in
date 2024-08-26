import React from 'react';

function HistoryPage({ history }) {
  return (
    <div className="history-page">
      <h2>Riwayat Order</h2>
      {history.length === 0 ? (
        <p>Belum ada riwayat order.</p>
      ) : (
        <ul>
          {history.map((order, index) => (
            <li key={index}>
              <p>Nama: {order.name}</p>
              <p>Alamat: {order.address}</p>
              <p>Jumlah Kantong Sampah: {order.bags}</p>
              <p>Metode Pembayaran: {order.method}</p>
              <p>Total: Rp {order.totalAmount ? order.totalAmount.toLocaleString() : '0'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HistoryPage;
