import React from 'react'
import './Section1.css'
import zakariyapix from '../assets/zakariyapix.png'
import down from '../assets/down.png'

function Section1() {
    return (
        <div className='container-fluid Section1 bg-primary'>
            <div className='row align-items-center'>
                <div className='col col-md-8'>
                    <h2 className='mb-3 mt-5'>Hi, i’m Zakariya Buhari a UI/UX Designer.</h2>
                    <p className='header_p'>I am a passionate UI/UX Designer who likes to solve problems and design solutions which create impact on lives of users. An iterator, design thinker and learner with experience in designing mobile apps and web designs.</p>
                </div>
                <div className='col col-md-4 text-align-right'>
                    <img src={zakariyapix} alt='profile pix' className='img'/>
                </div>
            </div>
            <p><a href='/'  className='text-secondary text-decoration-none'>Live Products <img src={down}></img></a></p>
        </div>
    )
}

export default Section1