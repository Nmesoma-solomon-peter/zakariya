import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item text-decoration-underline">
                                <a className="nav-link " aria-current="page" href="https://www.behance.net/c5da0bce">Read Case Studies:</a>
                            </li>
                            <li className="nav-item text-decoration-underline linkborder me-2">
                                <a className="nav-link active" href="https://www.behance.net/c5da0bce">Behance</a>
                            </li>
                            
                            <li className="nav-item text-decoration-underline  linkborder me-2">
                                <a className="nav-link active" href="https://www.linkedin.com/in/zakariya-buhari-929076154/">Zakariya Buhari | LinkedIn</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link active linkborder" href="https://www.linkedin.com/in/zakariya-buhari-929076154/">Dribble</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header