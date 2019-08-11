import React from 'react';
import Footer from '../components/Footer';
import qr from '../assets/cis-wechat.jpg';

function Wechat() {
  return (
    <div className="wechat">
      <div className="details">
        <h1>Scan the QR code</h1>
        <h2>wechatid: asucis</h2>
        <img src={qr} alt="cis-wechat" />
        <br />
        <a href="/"> Go back to the homepage</a>
      </div>
      <Footer />
    </div>
  );
}

export default Wechat;
