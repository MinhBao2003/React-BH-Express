// src/components/App.js
import React, { useState } from 'react';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Maps from './Maps';
import Cart from './Cart';
import Register from './Register';
import Produc2 from './Produc2';
import Rose from './Rose';
import Topic from './Topic';
import Order from './Order';
function App() {
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <Router>
      <div>
        <Menu username={loggedInUser} onLogout={() => setLoggedInUser('')} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Topic" element={<Topic />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/projeck" element={<Maps />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/romantic" element={<Produc2 />} />
          <Route path="/Rose" element={<Rose />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
