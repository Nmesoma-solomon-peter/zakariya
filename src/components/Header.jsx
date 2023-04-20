import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary header">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo" className='logo' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">


                        <div className="offcanvas-header bg-primary">
                            {/* <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5> */}
                            <div className='offcanvas-title' id="offcanvasScrollingLabel">
                            </div>
                            <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body bg-primary">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link  me-5" aria-current="page" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  me-5" aria-current="page" href="#projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  me-5" aria-current="page" href="#skill">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  me-5" aria-current="page" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header