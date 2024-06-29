import React, { useEffect, useState } from 'react';
import '../css/Rose.css';
import { NavLink } from 'react-router-dom';
// import Contact from './Contact';
import Speed from './Speed';
// import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Rose() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const fetchCartItems = async () => {
      try {
          const response = await axios.get('http://localhost:3000/cart');
          setCartItems(response.data);
      } catch (error) {
          console.error('Error fetching cart items: ', error);
      }
  };
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product');
        setProducts(response.data); // Cập nhật state products với dữ liệu từ API
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchProducts();
    fetchCartItems(); // Call fetchCartItems after component mounts
  }, []); // Empty dependency array ensures useEffect runs only once
  
  const addToCart = async (product) => {
    try {
        const existingCartItem = cartItems.find(item => item.nammeproduct === product.nammeproduct);

        if (existingCartItem) {
            const updatedCartItem = { ...existingCartItem, quantity: existingCartItem.quantity + 1 };
            await axios.put(`http://localhost:3000/cart/${existingCartItem.id}`, updatedCartItem);
            alert('Đã cập nhật số lượng trong Giỏ hàng');
        } else {
            const newCartItem = { ...product, quantity: 1 };
            await axios.post('http://localhost:3000/cart', newCartItem);
            alert('Đã thêm vào Giỏ hàng');
        }
        fetchCartItems(); // Refresh cart items after adding new item
    } catch (error) {
        console.error('Error adding to cart: ', error);
    }
};

    return(
        <div>
            {products.map((product, index) => (
            <div className='dr' key={index}>
               <div className='v'> <span><NavLink exact to='/' className='aa'>Trang Chủ</NavLink></span> /&nbsp;<span><NavLink exact to='/Rose' className='aa'>Rose</NavLink></span> /&nbsp;<span><NavLink exact to='#k' className='aa'>Bộ Sưu Tập</NavLink></span> /&nbsp;<span><NavLink exact to='#r' className='aa'>Khuyến Mãi</NavLink></span></div>
                <div className='dc'>
                    <div className='dx'><img src={product.img} alt={product.nammeproduct} className='ir'/></div>
                    <div className='d1p'>
                        <h2 className='hi'>{product.nammeproduct}</h2>
                        <span className='z2'>{product.discount}</span> <span className='z1'>{product.price}</span>
                        <p>Giá đã bao gồm 8% VAT - Sản phẩm chưa bao gồm phí giao tân nơi <NavLink exact to="/phiship" className="a">(Chi tiết)</NavLink></p>
                        <hr/>
                        <p>Sự kết hợp màu sắc nhã nhặn giữa hoa và lá cùng cách gói đơn giản đã tạo nên một món quà phù hợp với những ai có gu thẩm mỹ tinh tế, yêu thích sự đơn giản nhưng vẫn đầy tính sang trọng.</p>
                        <p>Sản phẩm bao gồm:</p>
                         <p>Cẩm chướng chùm trắng: 5</p>
                         <p>Hồng Victo: 7</p>
                         <p>Sản phẩm thực nhận có thể khác với hình đại diện trên website (đặc điểm thủ công và tính chất tự nhiên của hàng nông nghiệp)</p>
                         <p><b>Hoa giao nhanh 60 phút Hồ Chí Minh</b></p>
                         <div className='sh'>
                            <h5>LƯU Ý</h5>
                            <p> Sản phẩm bạn đang chọn là sản phẩm được thiết kế đặc biệt!</p>
                            <p>Hiện nay, Hoayeuthuong.com chỉ thử nghiệm cung cấp cho thị trường Tp. Hồ Chí Minh và Hà Nội</p>
                         </div>
                         <div className='d1e'>
                         
                                <div>
                                {cartItems.some(item => item.nammeproduct === product.nammeproduct) ? (
                                <button className='bc'>Sản phẩm đã có trong Giỏ hàng - Số lượng: {cartItems.find(item => item.nammeproduct === product.nammeproduct).quantity}</button>
                                    ) : (
                                    <button className='bc' onClick={() => addToCart(product)}>Thêm Giỏ Hàng</button>
                                )}
                                <button className='bb'>Mua Ngay</button>
                                </div>
                            
                            
                         </div>
                         <div className='dz'>
                         <button className='df'><a className='da' href="tel:+1800101">Giọi Ngay : 1800101</a></button>
                         </div>
                         
                    </div>
                </div>
                <p className='t1'>TẠI SAO BẠN NÊN DÙNG DỊCH VỤ CỦA CHÚNG TÔI?</p>
                <hr className='r1'/>
                <div className='dn'>
                    <div className='d12'>
                        <img src="/ship.png" className='img12' alt=""/>
                        <p className='p12'>Miễn phí giao hàng 63 tỉnh</p>
                        <p className='p12'>Free shipping (nội thành)</p>
                    </div>
                    <div className='d22'>
                        <img src="/support.png" className='img12' alt=""/>
                        <p className='p12'>Phục vụ 24/24</p>
                        <p className='p12'>24-7 service</p>
                    </div>
                    <div className='d32'>
                        <img src="/vat.png" className='img12' alt=""/>
                        <p className='p12'>Giá đã gồm 10% VAT</p>
                        <p className='p12'>Price include VAT</p>
                    </div>
                    <div className='d42'>
                        <img src="/quick.png" className='img12' alt=""/>
                        <p className='p12'>Giao nhanh trong 60 phút</p>
                        <p className='p12'>60 minutes quick delivery</p>
                    </div>
                </div>
            </div>
             ))}
            <Speed/>
            
        </div>
    );
}

export default Rose;
