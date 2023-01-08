import React from 'react'
import { motion } from "framer-motion"
import './Header.css'
import dribble from '../assets/dribble.png'
import behance from '../assets/behance.png'
import linkedin from '../assets/linkedin.png'

function Header() {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <motion.a className="navbar-brand" href="#"
                        initial={{ x: -200 }}
                        animate={{ x: 2 }}
                        transition={{ delay: 1 }}
                    >My Portfolio</motion.a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <motion.ul className="navbar-nav ms-auto mb-2 mb-lg-0"
                            initial={{ y: -70 }}
                            animate={{ y: -2 }}
                            transition={{ delay: 1 }}
                        >
                            <li className="nav-item text-decoration-underline">
                                <a className="nav-link " aria-current="page" href="https://www.behance.net/c5da0bce">Read Case Studies:</a>
                            </li>
                            <li className="nav-item text-decoration-underline linkborder me-2">
                                <a className="nav-link active" href="https://behance.net/c5da0bce"><img src={behance} alt="bahance" className='headericon behance' /></a>
                            </li>

                            <li className="nav-item text-decoration-underline  linkborder me-2">
                                <a className="nav-link active" href="https://linkedin.com/in/zakariya-buhari-929076154/"><img src={linkedin} className='headericon ' /></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active linkborder" href="https://dribbble.com/saka04"><img src={dribble} className='headericon ' /></a>
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header