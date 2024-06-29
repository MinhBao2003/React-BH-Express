import React from "react";
import '../css/Produc2.css';
import Contact from './Contact'
function Produc2(){
    return(
        <div>
            <div>
            <div className="dp12">
                <div className="p12"><h1>Hoa Lảng Mạng</h1></div>
                <div className="dp22">  
                    <div className="pn12">
                        <img src='/lm1.jpg' alt='' className="lm"/>
                        <span className="sp">Hoa 01</span><br/>
                        <span className="sp1">400.000vnđ</span>
                    </div>
                    <div className="pn22">
                        <img src='/lm2.jpg' alt='' className="lm"/>
                        <span className="sp">Hoa 02</span><br/>
                        <span className="sp1">550.000vnđ</span>
                    </div>
                    <div className="pn32">
                        <img src='/lm3.jpg' alt='' className="lm"/>
                        <span className="sp">Hoa 03</span><br/>
                        <span className="sp1">500.000vnđ</span>
                    </div>
                    <div className="pn42">
                        <img src='/lm4.jpg' alt='' className="lm"/>
                        <span className="sp">Hoa 04</span><br/>
                        <span className="sp1">300.000vnđ</span>
                    </div>
                </div>
                {/* <button className="xtc">Xem Tất Cả </button> */}
            </div>
            
        </div>
        <div className="ct">
        <Contact/>
        </div>
        </div>
            
    );
}
export default Produc2;