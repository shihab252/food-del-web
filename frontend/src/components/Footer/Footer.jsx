import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
            <p>This is a demo website. All content, including food descriptions and images, are for illustrative purposes only and do not represent real products or services</p>
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
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+8801782389787</li>
                    <li>khanshihab252@gmail.com</li>
                </ul>

            </div>
            
        </div>
        <hr />
        <p className='footer-copyright'>© 2024 Shihab--All Rights Reserved.</p>
      
    </div>
  )
}

export default Footer
