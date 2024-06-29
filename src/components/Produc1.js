import React from "react";
import '../css/Produc1.css';
import Hot from "./Hot";
// import Produc2 from "./Produc2";
function Produc1(){
    return(
        <div>
            <div className="dp1">
                <div className="p1"><h1>Bio </h1></div>
                <div className="dp2">
                    <div className="pn1">
                        <img src='/map.png' alt='' className="img2"/>
                        <p>Địa Chỉ Của Hàng</p>
                        <h7>Địa chỉ của hàng gốc không phải trung gian</h7>
                    </div>
                    <div className="pn2">
                        <img src='/img.png' alt='' className="img2"/>
                        <p>Hình Thật</p>
                        <h7>Khách hàng có thể kiếm tra hoa khi mới giao</h7>
                    </div>
                    <div className="pn3">
                        <img src='/xe.png' alt='' className="img2"/>
                        <p>Hỗ Trợ Ship</p>
                        <h7>Hỗ trợ ship hoa trung khu vực cửa hàng</h7>
                    </div>
                    <div className="pn4">
                        <img src='/bank.png' alt='' className="img2"/>
                        <p>Thanh Toán Tiện Lợi</p>
                        <h7>Nhiều phương thức thanh toán từ các ngân hàng</h7>
                    </div>
                </div>
            </div>
            {/* <Produc2/> */}
            <Hot/>
        </div>
            
    );
}
export default Produc1;