import React from 'react'
import './MobileApp.css'
import AppIcon from '../../assets/imgs/app.png'
import PlayIcon from '../../assets/imgs/play-icon.png'
import AppleIcon from '../../assets/imgs/apple-icon.png'

function MobileApp() {
    return (
        <section className='app container'>
            <div className='app-left'>
                <img src={AppIcon} alt="" className='app-icon' />
            </div>
            <div className='app-right'>
                <h2 className="section-header">Mobile application is available now</h2>
                <p className='app-subhead'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
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
                            <span className="btn-text-bold">Apple Store</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MobileApp