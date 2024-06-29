import React from 'react';
import '../css/Maps.css';
import Contact from './Contact'
const Maps = () => {
  return (
    <div>
      <div className='map'>
      <hr />
      <iframe
        title="Google Maps"
        width="100%"
        height="450"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.645388899018!2d106.64072107768986!3d10.761789012018825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e919ed25b45%3A0xbef1345cc1b8c42f!2zcGjGsOG7nW5nIDksIFF14bqtbiAxMSwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719314875195!5m2!1svi!2s"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
      <p>Vị Trí Của Hàng</p>
      
    </div>
    <Contact/>
    </div>
  );
}

export default Maps;
