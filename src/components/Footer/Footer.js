import React from 'react'
import { Link} from "react-router-dom";
import './Footer.css'
import FooterLogo from '../../assets/imgs/logo.png'
import FbIcon from '../../assets/imgs/fb.png'
import TwitterIcon from '../../assets/imgs/twitter.png'
import InstaIcon from '../../assets/imgs/insta.png'
import SendIcon from '../../assets/imgs/sendIcon.png'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src={FooterLogo} alt="" />
                        </div>

                        <div className="footer-text">
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy
                                text used in laying out print, graphic or web designs.</p>
                        </div>

                        <div className="social-icons-container">
                            <div className='social-icon-wrapper'>
                                <img src={FbIcon} alt="" className='social-icon fb' />
                            </div>
                            <div className='social-icon-wrapper'>
                                <img src={TwitterIcon} alt="" className='social-icon' />
                            </div>
                            <div className='social-icon-wrapper'>
                                <img src={InstaIcon} alt="" className='social-icon' />
                            </div>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-links">
                            <div className="useful-links links">
                                <h4>Useful Links</h4>
                                <ul>
                                   <li>
                                       <Link to='/'>Menu 1</Link>
                                   </li>
                                   <li>
                                       <Link to='/'>Menu 2</Link>
                                   </li>
                                   <li>
                                       <Link to='/'>Menu 3</Link>
                                   </li>
                                </ul>
                            </div>

                            <div className="contact links">
                                <h4>Contact</h4>
                                <ul>
                                <li>
                                    <Link to='/'>Menu 1</Link>
                                </li>
                                <li>
                                    <Link to='/'>Menu 2</Link>
                                </li>
                                <li>
                                    <Link to='/'>Menu 3</Link>
                                </li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-email">
                            <input type="text" name="" id="" placeholder='Email Address' />
                            <img src={SendIcon} alt="" className='send-icon' onClick={() => console.log("submit btn clicked")} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-btm">
                <p>© Copyright 2022. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer