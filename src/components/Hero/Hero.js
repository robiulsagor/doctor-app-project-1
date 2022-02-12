import React from 'react'
import './Hero.css'
import ScrollDown from '../../assets/imgs/down.png'
import PlayIcon from '../../assets/imgs/play-icon.png'
import AppleIcon from '../../assets/imgs/apple-icon.png'

function Hero() {
    return (
        <div className='hero'>
            <div className="container hero-text-wrapper">
                <h1>Your Health Our <br /> Happiness</h1>
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                

                <div className="dload-btns">
                    <div className="play-btn btn-dload">
                        <img src={PlayIcon} alt="" />
                        <div>
                            <span className='btn-text-normal'>Get it From</span>
                            <span className="btn-text-bold">Google Play</span>
                        </div>
                    </div>

                    <div className="apple-btn btn-dload">
                        <img src={AppleIcon} alt="" />
                        <div>
                            <span className='btn-text-normal'>Get it From</span>
                            <span className="btn-text-  bold">Apple Store</span>
                        </div>
                    </div>

                </div>
            </div>

            <img src={ScrollDown} alt="" className='scroll-down' />
        </div>
    )
}

export default Hero