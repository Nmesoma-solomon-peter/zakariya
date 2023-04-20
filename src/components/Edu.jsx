import React from 'react'
import './Edu.css'

function Edu() {
    return (
        <div>
            <div className='row mb-5 edu'>
                <div className='col col-md-6 skilrow'>
                    <h3 className='skilh3'>UX Fundamentals</h3>
                    <h6>CalArts</h6>
                    <h6 className='skildate'>2021-2022 </h6>
                    <p className='skilp'>Completed a 3months UX Fundamentals at CalArts</p>
                </div>
                <div className='col col-md-6 skilrow'>
                    <h3 className='skilh3'>Product Design</h3>
                    <h6>Dev & Designs</h6>
                    <h6 className='skildate'>2021-2022</h6>
                    <p className='skilp'>Completed a 3months Product design course at Dev & Designs</p>
                </div>
            </div>


            <div className='row edu'>
                <div className='col col-md-6 skilrow'>
                    <h3 className='skilh3'>Bsc. Biochemistry</h3>
                    <h6>Usmanu Danfodiyo Univeristy Sokoto.</h6>
                    <h6 className='skildate'>2011-2018 </h6>
                    <p className='skilp'>Completed a Bachelor’s Degree in Biochemistry at Udus.</p>
                </div>
                <div className='col col-md-6 skilrow'>
                    <h3 className='skilh3'>PGD. Information Technology</h3>
                    <h6>National open university of Nigeria</h6>
                    <h6 className='skildate'>2019-2021  </h6>
                    <p className='skilp'>Completed a Post graduate diploma at Noun.</p>
                </div>

            </div>
        </div>
    )
}

export default Edu