import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Cart.css';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';

function CartComponent() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true); // State để kiểm tra giỏ hàng có rỗng hay không
  const navigate = useNavigate();

  // Fetch cart data from API on component mount
  useEffect(() => {
    fetch('http://localhost:3000/cart')
      .then(response => response.json())
      .then(data => {
        // Calculate total price for each item
        const itemsWithTotalPrice = data.map(item => ({
          ...item,
          totalPrice: (item.price * item.quantity).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
        }));
        setCartItems(itemsWithTotalPrice);
        setIsCartEmpty(itemsWithTotalPrice.length === 0); // Kiểm tra giỏ hàng có rỗng hay không
      })
      .catch(error => console.error('Error fetching cart data:', error));
  }, []);

  // Function to handle decreasing quantity or removing item if quantity <= 1
  const handleDecrease = (itemId) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice = (item.price * item.quantity).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // Update total price
          updateQuantityInAPI(item.id, item.quantity, item.totalPrice);
        } else {
          removeItemFromAPI(item.id);
          return null; // or filter it out
        }
      }
      return item;
    }).filter(Boolean); // filter out null items

    setCartItems(updatedCart);
    setIsCartEmpty(updatedCart.length === 0); // Cập nhật trạng thái giỏ hàng rỗng sau khi xóa
  };

  // Function to handle increasing quantity
  const handleIncrease = (itemId) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        item.quantity += 1;
        item.totalPrice = (item.price * item.quantity).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // Update total price
        updateQuantityInAPI(item.id, item.quantity, item.totalPrice);
      }
      return item;
    });

    setCartItems(updatedCart);
    setIsCartEmpty(updatedCart.length === 0); // Cập nhật trạng thái giỏ hàng rỗng sau khi thay đổi
  };

  // Function to update quantity and total price in API
  const updateQuantityInAPI = (itemId, newQuantity, newTotalPrice) => {
    fetch(`http://localhost:3000/cart/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: newQuantity, totalPrice: newTotalPrice }),
    })
    .then(response => response.json())
    .then(data => console.log('Successfully updated quantity and total price:', data))
    .catch(error => console.error('Error updating quantity and total price:', error));
  };

  // Function to remove item from API
  const removeItemFromAPI = (itemId) => {
    fetch(`http://localhost:3000/cart/${itemId}`, {
      method: 'DELETE',
    })
    .then(() => console.log('Successfully removed item'))
    .catch(error => console.error('Error removing item:', error));
  };

  // Function to handle order button click
  const handleOrder = () => {
    navigate('/Order');
  };

  return (
    <div>
        <div className='home-cart'>
          <div className='v'> 
            <span><NavLink exact to='/' className='aa'>Trang Chủ</NavLink></span>&nbsp; 
            /&nbsp;<span><NavLink exact to='/Cart' className='aa'>Giỏ Hàng</NavLink></span>&nbsp;
            {/* /&nbsp;<span><NavLink exact to='#r' className='aa'>Đang Giao</NavLink></span>&nbsp;
            /&nbsp;<span><NavLink exact to='#r' className='aa'>Đã Nhận</NavLink></span>&nbsp;
            /&nbsp;<span><NavLink exact to='#r' className='aa'>Đã Hủy</NavLink></span> */}
          </div>
            <div className="cart-container">
              <h2 className="cart-header">Giỏ Hàng</h2>
                <ul>
                  {cartItems.map(item => (
                    <li className="cart-item" key={item.id}>
                      <img src={item.img} alt={item.nammeproduct} />
                      <div className="cart-item-info">
                        <p>{item.nammeproduct}</p>
                        <p>Giá Giảm: {item.price} </p>
                        <p className='p-cart'>Giá Giốc: {item.discount}</p>
                        <p>Số Lượng: {item.quantity}</p>
                        <p>Tổng Giá: {item.totalPrice ? item.totalPrice : 'N/A'} đ</p>
                      </div>
                      <div className="cart-item-actions">
                        <button onClick={() => handleDecrease(item.id)}>-</button>
                        <button onClick={() => handleIncrease(item.id)}>+</button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className='d-cart'>
                {isCartEmpty ? (
                  <p className='dp-cart'>Giỏ hàng của bạn trống. Hãy thêm hàng vào giỏ!</p>
                ) : (
                  <button className='btn-cart' onClick={handleOrder}>Đặt Hàng</button>
                )}
                </div>
            </div>
        </div>
        <Contact/>
    </div>
  );
}

export default CartComponent;
