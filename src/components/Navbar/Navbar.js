import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/imgs/logo.png'
import Hamburger from '../../assets/imgs/hamburger.png'

function Navabar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='navbar'>

            <div className="container navbar-container">
                <div className="nav-left">
                    <img src={logo} alt="logo" className='logo' />
                    <ul className='list'>
                        <li>
                            <Link to='/'>Link 1</Link>
                        </li>
                        <li>
                            <Link to='/'>Link 2</Link>
                        </li>
                        <li>
                            <Link to='/'>Link 3</Link>
                        </li>
                        <li>
                            <Link to='/'>Link 4</Link>
                        </li>
                        <li>
                            <Link to='/'>Link 5</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-right">
                    <a className='login-top' href="/">LOG IN</a>

                    <div className="nav-btn" onClick={handleNavMenu} >
                        <img src={Hamburger} alt="" />
                    </div>

                    <div className={isMenuOpen ? "nav-container" : "nav-container hide"}>
                        <ul className="nav">
                            <li>
                                <Link to='/'>Link 1</Link>
                            </li>
                            <li>
                                <Link to='/'>Link 2</Link>
                            </li>
                            <li>
                                <Link to='/'>Link 3</Link>
                            </li>
                            <li>
                                <Link to='/'>Link 4</Link>
                            </li>
                            <li>
                                <Link to='/'>Link 5</Link>
                            </li>
                            <li>
                                <Link to='/'>Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navabar