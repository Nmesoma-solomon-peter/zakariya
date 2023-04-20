import React, { useState, useEffect } from 'react'
import './Skills.css'
import Bio from './Bio'
import Skil from './Skil'
import Edu from './Edu'


function Skills() {
    const [content, setContent] = useState("skill")
    console.log(content)


    return (
        <div className='procontainer-fluid' id='skill'>
            <div className='eduskillbox'>
                {/* <p className='projectintro'>Visit my recent projects and let me know what you think</p> */}
                {/* <h3 className='projecth3'>Education & Skills</h3> */}

                <div className='eduskill'>
                
                    <div className='btn  bioedu' onClick={() => setContent("skill")} style={{
                        backgroundColor: content === 'skill' ? 'white' : '#D07C4C',
                        color:  content === 'skill' ? '#25292D' : '#fff',
                    }}>
                        Skills - 01
                    </div>

                    <div className='btn  bioedu' onClick={() => setContent("edu")} style={{
                        backgroundColor: content === 'edu' ? 'white' : '#D07C4C',
                        color:  content === 'edu' ? '#25292D' : '#fff',
                    }}>
                        Education - 02
                    </div>

                    <div className='btn bioedu' style={{
                        backgroundColor: content === 'bio' ? 'white' : '#D07C4C',
                        color:  content === 'bio' ? '#25292D' : '#fff',
                    }} onClick={() => {
                        setContent("bio");
                    }}>
                        Biography - 03
                    </div>
                </div>
            </div>

            <div className='eduskill__content'>

                {content === 'bio' ? <Bio />
                    : content === 'skill' ? <Skil />
                        : <Edu />}

                {/* if(setContent === 'bio'){
                    <Bio />
                }else if(setContent === 'skill'){
                    <Skil />
                }else{
                    <Edu />
                }
             */}
            </div>
        </div>
    )
}

export default Skills