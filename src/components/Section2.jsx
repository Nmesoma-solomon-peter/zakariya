import React from 'react'
import './Section2.css'
import sec2img from '../assets/sec2img.png'
import sec3img from '../assets/sec3img.png'
import sec4img from '../assets/sec4img.png'

function Section2() {
    return (
        <div className='container-fluid section2'>
            <div className='row secwithborder'>
                <div className='col col-md-6 '>
                    <h3 className='fw-bold sech3 mb-3'>DesignBlocs </h3>
                    <p className='mb-5'>Design Blocs is a design language created to see to the needs of Product designers looking to design user centric products. </p>

                    <p>As a UI/UX Designer, i contributed in designing the Chips and took part in the Design system.</p>

                    <div className='d-flex secflex secflex1 pt-3'>
                        <p>Role</p>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className='d-flex secflex'>
                        <p>Visit Website</p>
                        <p><a href='https://t.co/fFTTbPWOcZ'>https://t.co/fFTTbPWOcZ</a></p>
                    </div>
                    <div className='d-flex secflex'>
                        <p>Deliverables</p>
                        <p>UI Design</p>
                    </div>
                </div>
                <div className='col col-md-6'>
                    <img src={sec2img} alt='sec2img' className='sec2img' />
                </div>
            </div>

            {/* second row */}
            <div className='row secwithborder secrow'>
                <div className='col col-md-6 '>
                    <h3 className='fw-bold sech3 mb-3'>Kwikinvoice</h3>
                    <p className='mb-5'>KwikInvoice is a platform where online business persons, small, medium and large enterprise can generate Dynamic Invoices in less than 2 minutes, For Free. </p>

                    <p>As a UI/UX Designer, i took part in the UX Audit, making up the Design system (iconography), designed the footer section.</p>

                    <div className='d-flex secflex secflex1 pt-3'>
                        <p>Role</p>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className='d-flex secflex'>
                        <p>Visit Website</p>
                        <p><a href='https://t.co/ZCEylPIlCS'>https://t.co/ZCEylPIlCS</a></p>
                    </div>
                    <div className='d-flex secflex'>
                        <p>Deliverables</p>
                        <p>UI Design, UX Design</p>
                    </div>
                </div>
                <div className='col col-md-6'>
                    <img src={sec3img} alt='sec3img' className='sec2img' />
                </div>
            </div>
            {/* section3 */}
            <div className='row secrow'>
                <div className='col col-md-6 '>
                    <h3 className='fw-bold sech3 mb-3'>ClientDorm</h3>
                    <p className='mb-5'>A free CRM app built around your business just how you want it. It is totally free to use CRM app built to accommodate your business needs and tailored down to how you would want it to be. </p>

                    <p>As a UI/UX Designer, i took part in the UI design, design system, and UX Research.</p>

                    <div className='d-flex secflex secflex1 pt-3'>
                        <p>Role</p>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className='d-flex secflex'>
                        <p>Visit Website</p>
                        <p><a href='https://t.co/s7BKuVWFGQ'>https://t.co/s7BKuVWFGQ</a></p>
                    </div>
                    <div className='d-flex secflex'>
                        <p>Deliverables</p>
                        <p>UI Design, UX Design</p>
                    </div>
                </div>
                <div className='col col-md-6'>
                    <img src={sec4img} alt='sec4img' className='sec2img' />
                </div>
            </div>
        </div>
    )
}

export default Section2