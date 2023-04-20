import React from 'react'
import './Contact.css'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
function Contact() {
    return (
        <div className='seccontainer-fluid' id='contact'>
            <div className='row'>
                <div className='col col-md-6'>
                    {/* <form>
                        <input></input>
                    </form> */}
                    {/* <form action="https://getform.io/f/86c3a3a0-d5ca-4c9c-9af4-7dfdcc15dabd" method="POST"> */}
                    <form action="https://getform.io/f/97727db2-4925-458a-a1ca-374243e9de9c" method="POST">
                        <div className="mb-3">
                            <label for="name" className="form-label text-white">Name:</label>
                            <input type="text" className="form-control" id="name" required name='name' />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label text-white">Email address:</label>
                            <input type="email" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" name='email'/>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label text-white">Message:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message'></textarea>
                        </div>

                        <button type="submit" class="btn btn-lg btn-outline-secondary mt-4 submitbtn">Let's get in Touch</button>
                    </form>
                </div>
                <div className='col col-md-6 '>
                    <div className='contact2col'>
                        <h3 className='text-white contactme'>Contact <span className='text-secondary'>Me!</span></h3>
                        <div className='ms-4 mt-4 clog'>
                            <a href='https://www.linkedin.com/in/zakariya-buhari-929076154/'>
                                <img src={linkedin} alt='linkedin' className='me-3' />
                            </a>
                            {/* <a href='https://github.com/Nmesoma-Solomon-Peter'>
                                <img src={github} alt='github' className='me-3' />
                            </a> */}
                            <a href='https://twitter.com/saka4_X'>
                                <img src={twitter} alt='twitter' className='me-3' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact