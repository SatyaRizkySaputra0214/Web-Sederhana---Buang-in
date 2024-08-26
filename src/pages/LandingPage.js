import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="header">
        <h1>Buang-In</h1>
        <p>
          Layanan pengelolaan sampah <span className="highlight">#sehat</span> dan <span className="highlight">#ramah</span> dengan teknologi terkini.
        </p>
        <div className="button-group">
          <Link to="/order" className="btn primary">Mulai Order</Link>
          <Link to="/history" className="btn secondary">Lihat Histori</Link>
        </div>
      </div> <br></br>

      <div className="steps">
        <h2>Bagaimana Tahapan Menggunakan Buang-In?</h2>
        <div className="steps-container">
          <div className="step">
            
            <h3>1. Masukkan informasi pribadi</h3>
            <p>Isi data diri seperti nama dan alamat pengambilan sampah.</p>
          </div>
          <div className="step">
            
            <h3>2. Masukkan jumlah kantong sampah</h3>
            <p>Tentukan jumlah kantong sampah yang akan dibuang dan lihat total harganya.</p>
          </div>
          <div className="step">
            
            <h3>3. Pilih metode pembayaran</h3>
            <p>Pilih metode pembayaran yang paling sesuai untuk Anda.</p>
          </div>
          <div className="step">
            
            <h3>4. Konfirmasi pesanan</h3>
            <p>Periksa kembali detail pesanan Anda sebelum konfirmasi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
