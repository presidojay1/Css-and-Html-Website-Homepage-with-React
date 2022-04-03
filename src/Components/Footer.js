import './Footer.css';
import React from 'react'
import image from '../images/dells.png'
const Footer = () => {
  return (
    <footer>
      <div className="footer-div">
        <div className="footer-img">
          <img src={image} height="13%" alt="" />
        </div>
        <div className="footer-txt">
          <h3>Contact us</h3>
          <p>contact us at presido@gmail.com</p>
          <p>Address:off kanduna white 22, Kaduna, Kaduna</p>
          <p>Telephone : 09088765543</p>
          <p>Our social media are below</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer