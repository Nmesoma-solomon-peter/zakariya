import React from 'react';
import './Aboutsec.css';
import { TypeAnimation } from 'react-type-animation';
import portfolioimg from '../assets/portfolioimg.png'


function Aboutsec() {
    return (
        <div className='seccontainer-fluid'>
            <div className='row'>
                <div className='col col-md-6'>
                    <div className='about__intro' id='about'>
                        <h1 className='about__introh1'>Hello,</h1>
                        <h1 className='about__introh1'>I am  <a href='https://www.linkedin.com/in/zakariya-buhari-929076154/' className='name'><span className='text-secondary'>Zakariya Buhari</span> </a>,
                            <span className='tanimation'
>
                                <TypeAnimation
                                    sequence={['UI/UX Designer.', 1000,'Product designer.',1000]}
                                    //  Replacing previous Text
                                    // style={{ fontSize: '39px' }}
                                    wrapper="h2"
                                    repeat={Infinity}
                                    cursor={false}
                                    style={{ fontSize: '1.3em'}}

                                />
                            </span>
                        </h1> 

                    </div>
                    <p className='about__introp'>I am a passionate UI/UX Designer who likes to solve problems and design solutions which create impact on lives of users. An iterator, design thinker and learner with experience in designing mobile apps and web designs.
                    </p>
                    <div className='buttonsec mt-5'>
                        <button type="button" class="btn white__btn btn-lg">
                            <a href="myCv.pdf" download="myCv.pdf" style={{ textDecoration: "none" }}>Download CV <i class="bi bi-file-earmark-arrow-down"></i></a>
                        </button>
                        <a href='#projects'>
                            <button type="button" class="btn outline__btn  btn-lg">See my works <span><i class="bi bi-arrow-right"></i></span></button>
                        </a>
                    </div>
                </div>
                <div className='col col-md-6'>
                    <img src={portfolioimg} alt='portfolioimg' className='portfolioimg' />
                </div>
            </div>
        </div>
    )
}

export default Aboutsec