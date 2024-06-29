import '../css/Contact.css';
function Contact(){
    return(
        <div >
            <hr/>
            <div className="dh">
                <div className="dh-item">
                    <h3 className='lhl'>Cơ Sở Chính</h3>
                    <h3><span className='spn1'>Trụ Sở Chính:</span> 57 Phạm Hồng Thái-Phường 7-TP.Vũng Tàu </h3>
                    <h3><span className='spn1'>Chi Nhánh 1:</span> 716 Đường 30/4-Phường 11-TP.Vũng Tàu</h3>
                </div>
                <div className="dh-item">
                    <h3 className='lhl'>Liên Hệ</h3>
                    <h3><span className='spn1'>Hotline 1:</span><a className='a' href="tel:+05678.04444">05678.04444</a>-Thanh Tiền </h3>
                    <h3><span className='spn1'>Hotline 2:</span><a className='a' href="tel:+0944.344.349">0944.344.349</a>-Thanh Tâm</h3>
                </div>
                <div className="dh-item">
                    <h3 className='lhl'>Thông Tin Kinh Doanh</h3>
                    <h3><span className='spn1'>Hộ Kinh Doanh:</span> Hoa Tươi Vũng Tàu</h3>
                    <h3><span className='spn1'>Trụ Sở:</span> 57 Phạm Hồng Thái-P7-TP.Vũng Tàu</h3>
                </div>
                <div className="dh-item">
                    <h3 className='lhl'>Hướng Dẫn</h3>
                    <h3>Hướng dẫn đặt hoa</h3>
                    <h3>Hướng dẫn thanh toán</h3>
                </div>
            </div>
        </div>
    );
}
export default Contact;