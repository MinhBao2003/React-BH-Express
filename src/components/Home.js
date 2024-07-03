// src/components/Home.js
import React from 'react';
import '../css/Home.css';
import Produc1 from './Produc1';
import { NavLink } from 'react-router-dom';
// import Produc2 from './produc2';
function Home() {
  return (
    <div>
      <div className='d'>
        <div className="d1"><img src="/baner.png" className='img' alt=""/></div>
        <div className='dh1'><h3 className='blinking-span'>Các Mẫu Hoa Mới</h3></div>
        <div>
          <hr className='hr1'/>
        </div>
        <div> 
          <hr className='hr2'/>
        </div>
        <br/>
        <div className='d2'>
          <div className='dn1'>
            {/* <div className='n1'></div>
            
            <button>Buy</button> */}
            <NavLink exact to="/romantic" activeClassName="active" className='nl'>
            <img src="/langmang.jpg" className='img1 i1' alt=""/>
            <p className='hover-text p1'>Hoa Lãng Mạng</p>
            </NavLink>
          </div>
          <div className='dn2'>
            {/* <div className='n1'></div>
            <p>coments or review</p>
            <button>Buy</button> */}
            <img src="/sn.jpg" className='img1 i1' alt=""/>
            <p className='hover-text p1'>Hoa Sinh Nhật</p>
          </div>
          <div className='dn3'> 
            {/* <div className='n1'></div>
            <p>coments or review</p>
            <button>Buy</button> */}
            <img src="/bohoa.jpg" className='img1 i1' alt=""/>
            <p className='hover-text p1'>Bó Hoa</p>
          </div>
          <div className='dn4'>
            {/* <div className='n1'></div>
            <p>coments or review</p>
            <button>Buy</button> */}
            <img src="/khaitruong.jpg" className='img1 i1' alt=""/>
            <p className='hover-text p1'>Hoa Khai Trương</p>
          </div>
        </div>
      </div>
      <div className='dvh'>
        <img src='/qc1.png' alt='' className='di1'/> <img src='/qc2.png' alt='' className='di2'/>
      </div>
      <Produc1/>
      {/* <div className='pd2'>
        <Produc2/>
      </div> */}
      
    </div>
  );
}

export default Home;
