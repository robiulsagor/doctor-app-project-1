import React from 'react'
import './Doctors.css'
import CheckIcon from '../../assets/imgs/check.png'
import Doctor from '../../assets/imgs/doc.png';
import DocCard from '../../assets/imgs/doc-card.png'
import Img1 from '../../assets/imgs/img1.png'

function Doctors() {
    return (
        <section className='doctors container'>
            <div className="doctors-left half">
                <h2 className="section-header">Quality Services with Our Best
                    Experienced Doctors  </h2>
                <p className='section-subhead'>Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs.</p>

                <ul className="doctors-features">
                    <li><img src={CheckIcon} alt="" className='checkIcon' /> Lipsum as it is sometimes known</li>
                    <li><img src={CheckIcon} alt="" className='checkIcon' />  Lipsum as it is sometimes known</li>
                    <li><img src={CheckIcon} alt="" className='checkIcon' /> Lipsum as it is sometimes known</li>
                    <li><img src={CheckIcon} alt="" className='checkIcon' /> Lipsum as it is sometimes known</li>
                   
                </ul>
            </div>

            <div className="doctors-right half">
                <div className="doctor-img">
                    <img src={Doctor} alt="" />
                    <img src={DocCard} alt="" className='doc-card'/>
                    <img src={Img1} alt="" className='doc-top'/>
                </div>
            </div>
        </section>
    )
}

export default Doctors