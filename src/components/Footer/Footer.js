import React from 'react'
import './footer.css'
import SpeakerLogo from '../../assets/speaker-logo.svg'
import Logo from '../../assets/logo.svg'
import Lock from '../../assets/lock.svg'

const Footer = () => {
  return (
    <div className='footer-main-container'>
        <div className='footer'>
            {/* Get Started Now */}
            <div className='get-started-container'>
                <div className='are-you-ready'>
                    <img src={SpeakerLogo} alt='Logo' />
                    <h6>Are You Ready?</h6>
                </div>
                <h1>Want to travel around the globe for FREE?</h1>
                <p>Join the NFsTay Traveller’s Club and enjoy multiple perks, including FREE STAYS, exclusive Airport Lounge Access, Stay Debit Ring and much more.</p>
                <button className='get-started-button'>Get Started Now</button>
            </div>

            {/* Footer */}
            <div className='footer-container'>
                <div className='footer-content' style={{width:'316px'}}>
                    <img src={Logo} alt='Logo' />
                    <p>Nunc a vestibulum tellus. Sed dapibus lacus imperdiet mattis finibus. Sed lacinia efficitur nulla, ut aliquet nisi auctor eu.</p>
                    <h4>Copyright NFsTay.com.  All Rights Reserved</h4>
                </div>

                <div className='footer-links'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href='/'>Dashboard</a></li>
                        <li><a href='/'>Farm</a></li>
                        <li><a href='/'>Boardroom</a></li>
                        <li><a href='/'>Marketplace</a></li>
                        <li><a href='/'>Mint</a></li>
                        <li><a href='/'>Portfolio</a></li>
                    </ul>
                </div>

                <div className='footer-links'>
                    <h3>Resources</h3>
                    <ul>
                        <li><a href='/'>Referral</a></li>
                        <li><a href='/'>Token Sale Agreement</a></li>
                        <li><a href='/'>Disclaimer</a></li>
                        <li><a href='/'>Docs</a></li>
                        <li><a href='/'>Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className='footer-links'>
                    <h3>We Accept</h3>
                    <ul>
                        <li><a href='/'>Explore</a></li>
                        <li><a href='/'>Contact Us</a></li>
                        <li><a href='/'>Our Blog</a></li>
                        <li><a href='/'>FAQ</a></li>
                    </ul>
                    <div className='lock-safe'>
                        <img src={Lock} alt='logo' />
                        <p>Safe and Secure SSL Encrypted</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer