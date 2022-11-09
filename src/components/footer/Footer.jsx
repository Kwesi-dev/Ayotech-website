import Facebook from '@mui/icons-material/Facebook'
import LinkedIn from '@mui/icons-material/LinkedIn'
import React from 'react'
import "./footer.css"
import PhonelinkRingRoundedIcon from '@mui/icons-material/PhonelinkRingRounded';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-wrapper">
            <div className="footer-top">
                <img src="" alt="" className="logo" />
                <div className="f-top-item">
                    <TextsmsOutlinedIcon className="footer-top-icon"/>
                    <span>Send Email</span>
                </div>
                <div className="f-top-item">
                    <PhonelinkRingRoundedIcon className="footer-top-icon"/>
                    <span>+{"("}374{")"}55{" "}206{" "}606</span>
                </div>
                <div className="f-top-item">
                    <RoomOutlinedIcon className="footer-top-icon"/>
                    <span>24/15 Azatutyan Ave, Yerevan Armenia</span>
                </div>
            </div>
            <div className="footer-body">
                <div>
                    <div className="footer-header">
                        <h2>About Company</h2>
                        <div className="footer-text-underline-container">
                            <div className="footer-text-underline"></div>
                            <div className="footer-text-underline-2"></div>
                        </div>
                    </div>
                    <p className="about-text">We follow the best approach, achitecture and latest technologies.</p>
                    <div>
                        <Facebook className="footer-social-icon"/>
                        <LinkedIn className="footer-social-icon"/>
                    </div>
                </div>
                <div>
                    <div className="footer-header">
                        <h2>Our links</h2>
                        <div className="footer-text-underline-container">
                            <div className="footer-text-underline"></div>
                            <div className="footer-text-underline-2"></div>
                        </div>
                    </div>
                    <ul className="footer-links-container">
                        <li>Home</li>
                        <li>Career</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <div className="footer-header">
                        <h2>Our Services</h2>
                        <div className="footer-text-underline-container">
                            <div className="footer-text-underline"></div>
                            <div className="footer-text-underline-2"></div>
                        </div>
                    </div>
                    <ul className="footer-links-container">
                        <li>PWA Headless eCommerce</li>
                        <li>Magento eCommerce</li>
                        <li>eCommerce Development</li>
                        <li>Blockchain</li>
                        <li>Business Automation</li>
                        <li>Web Development</li>
                    </ul>
                </div>
                <div>
                    <div className="footer-header">
                        <h2>Other links</h2>
                        <div className="footer-text-underline-container">
                            <div className="footer-text-underline"></div>
                            <div className="footer-text-underline-2"></div>
                        </div>
                    </div>
                    <ul className="footer-links-container">
                        <li>FAQ</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                        <li>Team</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright-footer">
            <p>Copyright &copy; 2022 Ayotech.am | All rights are reserved</p>
        </div>
    </div>
  )
}

export default Footer