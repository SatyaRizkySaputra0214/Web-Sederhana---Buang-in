import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import OrderPage from './pages/OrderPage';
import ConfirmPage from './pages/ConfirmPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  const [history, setHistory] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);

  const addToHistory = (record) => {
    setHistory([...history, record]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/order" element={<OrderPage setOrderDetails={setOrderDetails} />} />
        <Route
          path="/order/confirm"
          element={<ConfirmPage orderDetails={orderDetails} addToHistory={addToHistory} />}
        />
        <Route path="/history" element={<HistoryPage history={history} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
