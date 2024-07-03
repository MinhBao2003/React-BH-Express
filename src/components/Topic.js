// src/components/About.js
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';
import '../css/Topic.css';
import Contact from './Contact'
function Topic() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const ProductGrid = () => (
    <div class="product-grid4">
            <div class="product-item">
              {/* <div class="badge sale">SALE</div> */}
              <img src="/sn1.jpg" alt="Victo rose"/>
              <div class="product-name">Shyly</div>
              <div class="product-price">
                {/* <span class="old-price">150.000 đ</span> */}
                <span class="new-price">150.000 đ</span>
              </div>
            </div>
            <div class="product-item">
              {/* <div class="badge sale">SALE</div> */}
              <div class="badge new">NEW!</div>
              {/* <div class="badge free">Caramel Charm</div> */}
              <img src="/sn2.jpg" alt="Lux basket mini 4"/>
              <div class="product-name">Caramel Charm</div>
              <div class="product-price">
                {/* <span class="old-price">450.000 đ</span> */}
                <span class="new-price">150.000 đ</span>
              </div>
            </div>
            <div class="product-item">
              <div class="badge sale">SALE</div>
              <div class="badge free">FREESHIP</div>
              <img src="/sn3.jpg" alt="Angel Love"/>
              <div class="product-name">Cẩm tú cầu và em</div>
              <div class="product-price">
                {/* <span class="old-price">500.000 đ</span> */}
                <span class="new-price">250.000 đ</span>
              </div>
            </div>
            <div class="product-item">
              <div class="badge sale">SALE</div>
              <div class="badge free">FREESHIP</div>
              <img src="/sn4.jpg" alt="Những điều chân thành"/>
              <div class="product-name">Rạng ngời 2</div>
              <div class="product-price">
                {/* <span class="old-price">750.000 đ</span> */}
                <span class="new-price">450.000 đ</span>
              </div>
            </div>
            <div class="product-item">
              <div class="badge sale">SALE</div>
              <div class="badge free">FREESHIP</div>
              <img src="/sn5.jpg" alt="Pink Elegance"/>
              <div class="product-name">Gửi ngàn lời yêu</div>
              <div class="product-price">
                <span class="old-price">630.000 </span>
                <span class="new-price">đ550.000 đ</span>
              </div>
            </div>
            <div class="product-item">
              <div class="badge sale">SALE</div>
              <div class="badge new">NEW!</div>
              <div class="badge free">FREESHIP</div>
              <img src="/sn6.jpg" alt="Glass vase 4"/>
              <div class="product-name">Bình hồng xinh 4</div>
              <div class="product-price">
                {/* <span class="old-price">1.150.000 đ</span> */}
                <span class="new-price">700.000 đ</span>
              </div>
            </div>
            <div class="product-item">
              <div class="badge sale">SALE</div>
              <div class="badge new">NEW!</div>
              <div class="badge free">FREESHIP</div>
              <img src="/sn7.jpg" alt="Hoa sen đá 33"/>
              <div class="product-name">Warm hugs</div>
              <div class="product-price">
                <span class="old-price">350.000 đ</span>
                <span class="new-price">300.000 đ</span>
              </div>
            </div>
            <div class="product-item">
              <div class="badge sale">SALE</div>
              <div class="badge new">NEW!</div>
              <div class="badge free">FREESHIP</div>
              <img src="/sn8.jpg" alt="Vì em là nắng"/>
              <div class="product-name">Lux basket 2</div>
              <div class="product-price">
                <span class="old-price">500.000 đ</span>
                <span class="new-price">400.000 đ</span>
              </div>
            </div> 
        </div>
  );
  return (
    <div>
      <div className='page-topic'>
        <div className='v'>
            <span><NavLink exact to='/' className='aa'>Trang Chủ</NavLink></span>&nbsp;
            /&nbsp;<span><NavLink exact to='/Cart' className='aa'>Chủ Đề</NavLink></span>&nbsp;
        </div>
        <div className='head-topic'>
          <div className='d1-topic'>
          <h3 className='h-topic ' onClick={toggleMenu}>Chủ Đề</h3>
              {/* <button className="menu-toggle" onClick={toggleMenu}>
                ☰
              </button> */}
            <ul className={`ul-topic ${menuOpen ? 'open' : ''}`}>          
              <li className='li-topic'><NavLink exact to='/g' className='aa'>Hoa Sinh Nhật</NavLink></li>         
              <li className='li-topic'><NavLink exact to='/g' className='aa'>Hoa Khai Trương</NavLink></li>         
              <li className='li-topic'><NavLink exact to='/g' className='aa'>Hoa Chúc Mừng</NavLink></li>         
              <li className='li-topic'><NavLink exact to='/g' className='aa'>Hoa Chúc Sức Khỏe</NavLink></li>         
              <li className='li-topic'><NavLink exact to='/g' className='aa'>Hoa Cảm Ơn</NavLink></li>         
              <li className='li-topic'><NavLink exact to='/g' className='aa'>Hoa Mừng Tốt Nghiệp</NavLink></li>
            </ul>
          </div>
          <div className='d-topic'>
            <p className='p-topic'>Hoa Sinh Nhật</p>
            {!isMobile && <ProductGrid />}
          </div>
        </div>
        {isMobile && <ProductGrid />}
      </div>
    <Contact/>
    </div>
  );
}

export default Topic;
