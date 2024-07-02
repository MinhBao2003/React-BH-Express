import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Menu.css';

function Menu({ onLogout }) {
  const [username, setUsername] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); 

  useEffect(() => {
    fetch('http://localhost:3000/cart')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  const handleLogout = () => {
    setUsername('');
    localStorage.removeItem('username');
    onLogout();
  };

  const countIds = () => {
    return cartItems.length; // Đây là số lượng id của các sản phẩm trong giỏ hàng
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
        <li>  
          <NavLink exact to="/" activeClassName="" className="link">
            Trang Chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/Topic" activeClassName="active" className="link">
            Chủ Đề
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Cart" activeClassName="active" className="link">
            Giỏ Hàng ({countIds()})
          </NavLink>
        </li>
        <li>
          <NavLink to="/projeck" activeClassName="active" className="link">
            Vị Trí
          </NavLink>
        </li>
        {!username ? (
          <li>
            <NavLink exact to="/login" activeClassName="active" className="link">
              Login
            </NavLink>
          </li>
        ) : (
          <li className="logged-in">
            <span className='tb'>{username}</span>&nbsp;
            <button className='mb' onClick={handleLogout}>Thoát</button>&nbsp;
          </li>
        )}
      </ul>
      <input className='s' type='text' placeholder="Tìm kiếm..."/>
      <span className='sm'>
        <a href='https://www.youtube.com/?app=desktop&hl=vi'><img src='/ytb.webp' alt='' className='im'/></a>&nbsp;
        <a href='https://www.facebook.com/?locale=vi_VN'><img src='/fb.webp' alt='' className='im'/></a>&nbsp;
        <a href='https://chat.zalo.me/'><img src='/zalo.webp' alt=''className='im'/></a>
      </span>
    </nav>
  );
}

export default Menu;
