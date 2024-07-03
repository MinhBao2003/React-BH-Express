import React from 'react';
import '../css/Hot.css';
import Speed from './Speed';
import { NavLink } from 'react-router-dom';
function Hot() {
  return (
    <div>
        <div className='w1'>
        <div class="container1">
    <h1 className="h-hot">HOA KHUYẾN MÃI</h1>
    <div class="product-grid">
    <NavLink exact to="/Rose" className="a">
        <div class="product-item">
          <div class="badge sale">SALE</div>
          <img src="/km1.jpg" alt="Victo rose"/>
          <div class="product-name">Victo rose</div>
          <div class="product-price">
            <span class="old-price">300.000 đ</span>
            <span class="new-price">250.000 đ</span>
          </div>
        </div>
      </NavLink>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge free">FREESHIP</div>
        <img src="/km2.jpg" alt="Lux basket mini 4"/>
        <div class="product-name">Lux basket mini 4</div>
        <div class="product-price">
          <span class="old-price">450.000 đ</span>
          <span class="new-price">400.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge free">FREESHIP</div>
        <img src="/km3.jpg" alt="Angel Love"/>
        <div class="product-name">Angel Love</div>
        <div class="product-price">
          <span class="old-price">500.000 đ</span>
          <span class="new-price">450.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge free">FREESHIP</div>
        <img src="/km4.jpg" alt="Những điều chân thành"/>
        <div class="product-name">Những điều chân thành</div>
        <div class="product-price">
          <span class="old-price">750.000 đ</span>
          <span class="new-price">700.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge free">FREESHIP</div>
        <img src="/km5.jpg" alt="Pink Elegance"/>
        <div class="product-name">Pink Elegance</div>
        <div class="product-price">
          <span class="old-price">2.000.000 đ</span>
          <span class="new-price">1.800.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge new">NEW!</div>
        <div class="badge free">FREESHIP</div>
        <img src="/km6.jpg" alt="Glass vase 4"/>
        <div class="product-name">Glass vase 4</div>
        <div class="product-price">
          <span class="old-price">1.150.000 đ</span>
          <span class="new-price">1.100.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge new">NEW!</div>
        <div class="badge free">FREESHIP</div>
        <img src="/km7.jpg" alt="Hoa sen đá 33"/>
        <div class="product-name">Hoa sen đá 33</div>
        <div class="product-price">
          <span class="old-price">800.000 đ</span>
          <span class="new-price">700.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge new">NEW!</div>
        <div class="badge free">FREESHIP</div>
        <img src="/km8.jpg" alt="Vì em là nắng"/>
        <div class="product-name">Vì em là nắng</div>
        <div class="product-price">
          <span class="old-price">1.300.000 đ</span>
          <span class="new-price">1.250.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge new">NEW!</div>
        <div class="badge free">FREESHIP</div>
        <img src="/km9.jpg" alt="Đồng xanh 2"/>
        <div class="product-name">Đồng xanh 2</div>
        <div class="product-price">
          <span class="old-price">1.750.000 đ</span>
          <span class="new-price">1.600.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge new">NEW!</div>
        <div class="badge free">FREESHIP</div>
        <img src="/km10.jpg" alt="Tia sáng"/>
        <div class="product-name">Tia sáng</div>
        <div class="product-price">
          <span class="old-price">3.800.000 đ</span>
          <span class="new-price">3.500.000 đ</span>
        </div>
      </div>
    </div>
  </div>
        </div>
        <Speed/>
    </div>
    );
}

export default Hot;