import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {
  return <div className="footer" id="footer">
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eaque molestiae voluptatem voluptate nulla similique. Delectus iusto mollitia fuga, eum rerum ab in vero sapiente architecto ipsam sint animi modi!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privecy & Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+44 7861728003</li>
                <li>info@metaphore.co.uk</li>
            </ul>
        </div>
    </div>
    <hr />
    <div className="footer-copyrights">
        <p>Copyright 2024 &copy; Metaphore.co.uk - All Rights Reserved</p>
    </div>
  </div>;
}

export default Footer;
