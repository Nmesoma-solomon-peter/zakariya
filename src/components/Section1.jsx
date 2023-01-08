import React from 'react'
import { motion, spring } from "framer-motion"
import './Section1.css'
// import zakariyapix from '../assets/zakariyapix.png'
// import down from '../assets/down.png'

const contv = {
    hidden:{
        y: -400,
    },
    visible:{
        y: -2,
        transition:{delay: 3, type: 'spring', stiffness: 1000}
    }
}
function Section1() {
    return (
        <div className='container-fluid Section1 bg-primary'>
            <div className='row align-items-center'>
                <motion.div className='col col-md-8'
                    variants={contv}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className='mb-3 mt-5'>Hi, i’m Zakariya Buhari a UI/UX Designer.</h2>
                    <p className='header_p'>I am a passionate UI/UX Designer who likes to solve problems and design solutions which create impact on lives of users. An iterator, design thinker and learner with experience in designing mobile apps and web designs.</p>
                </motion.div>
                <motion.div className='col col-md-4 text-align-right imgclass'
                    initial={{ x: 400 }}
                    animate={{ x: -2, zIndex: 0 }}
                    transition={{ delay: 1, duration: 2 }}
                >
                    <img src='/zakariyapix.png' alt='profile pix' className='img' />
                </motion.div>
            </div>
            <motion.p
                initial={{ x: -400 }}
                animate={{ x: -2, zIndex: 0 }}
                transition={{ delay: 1, duration: 2 }}
            ><a href='/' className='text-secondary text-decoration-none'>Live Products <img src='/down.png'></img></a></motion.p>
        </div>
    )
}

export default Section1