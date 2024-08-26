import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Assuming the CSS file is named LandingPage.css

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Buang-In</h1>
        <p>
          Layanan pengelolaan sampah <span className="highlight">#sehat</span> dan <span className="highlight">#ramah</span> dengan teknologi terkini.
        </p>
        <div className="button-group">
          <Link to="/order" className="btn primary">Mulai Order</Link>
          <Link to="/history" className="btn secondary">Lihat Histori</Link>
        </div>
      </div> <br></br>

      <h2>Bagaimana Tahapan Menggunakan Buang-in?</h2>
      <div className="content2">
        <div>
          Masukkan informasi pribadi
        </div> 

        <div>
          Masukkan jumlah kantong sampah yang akan dibung
        </div>

        <div>
          Masukkan metode pemmbayaran
        </div>

        <div>
          Konfirmasi
        </div>
        
      </div>
    </div>
  );
}

export default LandingPage;
