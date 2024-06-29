import React, { useEffect, useState } from 'react';
import '../css/Order.css';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';

function Order() {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = () => {
    fetch('http://localhost:3000/cart')
      .then(response => response.json())
      .then(data => {
        const itemsWithTotalPrice = data.map(item => ({
          ...item,
          totalPrice: (item.price * item.quantity).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
        }));
        setCartItems(itemsWithTotalPrice);
      })
      .catch(error => console.error('Error fetching cart data:', error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate fields individually
    if (!name.trim()) {
      setNameError('Vui lòng nhập họ và tên.');
      return;
    } else {
      setNameError('');
    }

    if (!address.trim()) {
      setAddressError('Vui lòng nhập địa chỉ.');
      return;
    } else {
      setAddressError('');
    }

    if (!validatePhone(phone)) {
      alert('Số điện thoại phải có 10 chữ số.');
      return;
    }
    if (!validateEmail(email)) {
      alert('Email không hợp lệ.');
      return;
    }

    // Prepare order data
    const orderData = {
      name: name,
      phone: phone,
      address: address,
      email: email,
      items: cartItems,
    };

    // Submit order to the API
    fetch('http://localhost:3000/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then(response => {
        if (response.ok) {
          setSubmitSuccess(true);
          // Reset form fields
          setName('');
          setPhone('');
          setAddress('');
          setEmail('');
          // Clear cart after successful order submission
          clearCart();
        } else {
          throw new Error('Error submitting order.');
        }
      })
      .catch(error => console.error('Error submitting order:', error));
  };

  const clearCart = () => {
    const deletePromises = cartItems.map(item => {
      return fetch(`http://localhost:3000/cart/${item.id}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error clearing cart item.');
        }
      })
      .catch(error => console.error('Error clearing cart item:', error));
    });
  
    // Wait for all delete requests to complete
    Promise.all(deletePromises)
      .then(() => {
        console.log('Cart cleared successfully.');
        setCartItems([]); // Update local state to reflect cart changes
      })
      .catch(error => console.error('Error clearing cart:', error));
  };
  

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div>
      <div className='d-order'>
        <div className='v'>
          <span><NavLink exact to='/' className='aa'>Trang Chủ</NavLink></span>&nbsp;
          /&nbsp;<span><NavLink exact to='/Cart' className='aa'>Giỏ Hàng</NavLink></span>&nbsp;
          /&nbsp;<span><NavLink exact to='/Order' className='aa'>Đơn Hàng</NavLink></span>&nbsp;
          {/* /&nbsp;<span><NavLink exact to='#r' className='aa'>Đang Giao</NavLink></span>&nbsp;
          /&nbsp;<span><NavLink exact to='#r' className='aa'>Đã Nhận</NavLink></span>&nbsp;
          /&nbsp;<span><NavLink exact to='#r' className='aa'>Đã Hủy</NavLink></span> */}
        </div>
        <div className="order-page">
          <h2 className="order-header">Đơn Hàng</h2>
          {cartItems.length > 0 && (
            <div>
              {cartItems.map(item => (
                <li className="order-item" key={item.id}>
                  <img src={item.img} alt={item.nammeproduct} />
                  <div className="order-item-info">
                    <p>{item.nammeproduct}</p>
                    <p>Giá Giảm: {item.price} </p>
                    <p className='p-order'>Giá Giốc: {item.discount}</p>
                    <p>Số Lượng: {item.quantity}</p>
                    <p>Tổng Giá: {item.totalPrice ? item.totalPrice : 'N/A'} đ</p>
                  </div>
                </li>
              ))}
            </div>
          )}
          <div className="order-form-container">
            <h2 className="order-form-header">Thông tin Đơn Hàng</h2>
            {cartItems.length > 0 && (
              <form className="order-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Họ và Tên:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  {nameError && <p className="error-message">{nameError}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Số Điện Thoại:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Địa Chỉ:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  {addressError && <p className="error-message">{addressError}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="submit-button">Thanh toán</button>
              </form>
            )}
            {submitSuccess && (
              <p className="success-message">Đặt hàng thành công! Cảm ơn bạn đã mua hàng.</p>
            )}
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Order;
