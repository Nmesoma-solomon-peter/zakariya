import React from 'react'
import './Projects.css'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import behance from '../assets/behance.png'
import dribble from '../assets/dribble.png'
import 'animate.css';
import { useInView } from 'react-intersection-observer';


const Projects = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });


    return (
        <div className='procontainer-fluid'>
            {/* <p className='projectintro'>Visit my recent projects and let me know what you think</p> */}
            <h3 className='projecth3 ' id='projects' >My Projects</h3>
            <h5 className='text-white mt-5'>Live products:</h5>
            <div className={inView ? 'animate__animated animate__slideInLeft' : ' '} ref={ref}>
                <div className='row kardrow mt-5' >
                    <h2 className='text-white'>{console.log(inView)} </h2>
                    <div className='col col-md-4 '>
                        <div className={inView ? ' kardinner animate__animated animate__zoomIn animate__delay-1s' : ''}>
                            <a href='https://designblocs.com/' style={{ textDecoration: 'none' }}>
                                <img src={image1} alt='image1' className='kardimg' />
                                <h6 className='text-white mt-5 proh4'>Design Blocs - is a design language created to see to the needs of Product designers looking to design user centric products.
                                    <span className='role'>ROLE: UI/UX Designer </span></h6>
                            </a>
                        </div>
                    </div>
                    <div className='col col-md-4'>
                        <div className='kardinner'>
                            <a href='https://kwikinvoice.com/' style={{ textDecoration: 'none' }}>
                                <img src={image2} alt='image2' className='kardimg' />
                                <h6 className='text-white mt-4 proh4'>KwikInvoice - is a platform where online business persons, small, medium and large enterprise can generate Dynamic Invoices in less than 2 minutes, For Free.
                                    <span className='role'>ROLE: UI/UX Designer</span>
                                </h6>
                            </a>
                        </div>
                    </div>
                    <div className='col col-md-4'>
                        <div className={inView ? ' kardinner animate__animated animate__zoomIn animate__delay-1s' : ''}>
                            <a href='https://kwikinvoice.com/' style={{ textDecoration: 'none' }}>
                                <img src={image3} alt='image3' className='kardimg' />
                                <h6 className='text-white mt-4 proh4'>A free CRM app built around your business just how you want it. It is totally free to use CRM app built to accommodate your business needs and tailored down to how you would want it to be.
                                    <span className='role'> ROLE: UI/UX Designer</span>
                                </h6>
                            </a>
                        </div>
                    </div>
                    {/* <div className='col col-md-4'>
                        <div className={inView?' kardinner animate__animated animate__slideInRight animate__delay-1s': ''}>
                            <a href='https://nmesoma-solomon-peter.github.io/hubredesign/' style={{ textDecoration: 'none' }}>
                                <img src={hubspot} alt='phantom-clone' className='kardimg' />
                                <h4 className='text-white mt-4 proh4'>Hubspot Homepage Clone</h4>
                            </a>
                        </div>
                    </div> */}
                </div>

            </div>

            <div className='case'>
                <div>
                    <div className='text-white inline'>Case studies: <a href='https://www.behance.net/c5da0bce'>  <img src={behance} className='csimage' /> </a>
                    </div>
                    <span className='cs'></span>
                    <div className='text-white inline'>  UI Designs: <a href='  https://dribbble.com/saka04'> <img src={dribble} className='csimage' />  </a>
                    </div>
                </div>
            </div>

            <a href='#contact'>
                <button type="button" class="btn outline__btn btn-lg mt-5 project__btn">Contact me</button>
            </a>




        </div>
    )
}

export default Projects