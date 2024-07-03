import React from 'react';
import Contact from './Contact'
import '../css/Hot.css';
import '../css/Speed.css';
function Speed() {
  return (
    <div>
        <div className='w2'>
        <div class="container1">
    <h1 className="h-hot">HOA GIAO NHANH</h1>
    <div class="product-grid">
      <div class="product-item">
        {/* <div class="badge sale">SALE</div> */}
        <img src="/gn1.jpg" alt="Victo rose"/>
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
        <img src="/gn2.jpg" alt="Lux basket mini 4"/>
        <div class="product-name">Caramel Charm</div>
        <div class="product-price">
          {/* <span class="old-price">450.000 đ</span> */}
          <span class="new-price">150.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge free">FREESHIP</div>
        <img src="/gn3.jpg" alt="Angel Love"/>
        <div class="product-name">Cẩm tú cầu và em</div>
        <div class="product-price">
          {/* <span class="old-price">500.000 đ</span> */}
          <span class="new-price">250.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge free">FREESHIP</div>
        <img src="/gn4.jpg" alt="Những điều chân thành"/>
        <div class="product-name">Rạng ngời 2</div>
        <div class="product-price">
          {/* <span class="old-price">750.000 đ</span> */}
          <span class="new-price">450.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge free">FREESHIP</div>
        <img src="/gn5.jpg" alt="Pink Elegance"/>
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
        <img src="/gn6.jpg" alt="Glass vase 4"/>
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
        <img src="/gn7.jpg" alt="Hoa sen đá 33"/>
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
        <img src="/gn8.jpg" alt="Vì em là nắng"/>
        <div class="product-name">Lux basket 2</div>
        <div class="product-price">
          <span class="old-price">500.000 đ</span>
          <span class="new-price">400.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge new">NEW!</div>
        <div class="badge free">FREESHIP</div>
        <img src="/gn9.jpg" alt="Đồng xanh 2"/>
        <div class="product-name">Bó cẩm chướng hồng</div>
        <div class="product-price">
          {/* <span class="old-price">1.750.000 đ</span> */}
          <span class="new-price">500.000 đ</span>
        </div>
      </div>
      <div class="product-item">
        <div class="badge sale">SALE</div>
        <div class="badge new">NEW!</div>
        <div class="badge free">FREESHIP</div>
        <img src="/gn10.jpg" alt="Tia sáng"/>
        <div class="product-name">Everyday i love you</div>
        <div class="product-price">
          {/* <span class="old-price">3.800.000 đ</span> */}
          <span class="new-price">500.000 đ</span>
        </div>
      </div>
    </div>
  </div>
        </div>
        <Contact/>
    </div>
    );
}

export default Speed;