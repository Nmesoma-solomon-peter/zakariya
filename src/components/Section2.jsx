import React from 'react'
import { useEffect } from "react";
import { motion} from "framer-motion"
// import { useInView } from 'react-intersection-observer';
import './Section2.css'
// import transitions from '@material-ui/core/styles/transitions';
// import { Visibility } from '@material-ui/icons'
// import sec2img from '../assets/sec2img.png'
// import sec3img from '../assets/sec3img.png'
// import sec4img from '../assets/sec4img.png'
// const scrollRef = useRef(null)
// const row1leftv = {
//     hidden: {
//         x: -800,
//     },
//     visible: {
//         x: 2,
//         transition: { delay: 1, duration: 2 }
//     }
// }
// const row2leftv = {
//     hidden: {
//         x: 800,
//     },
//     visible: {
//         x: -2,
//         transition: { delay: 1, duration: 2 }
//     }

// }
// const rowtwov = {
//     hidden: {
//         x: 800,
//     },
//     visible: {
//         x: -2,
//         transition: { delay: 0, duration: 1 }
//     }
// }
// const rowtworv = {
//     hidden: {
//         y: -800,
//     },
//     visible: {
//         y: 2,
//         transition: { delay: 0, duration: 1 }
//     }
// }
const row1left={
    hidden:{
        x:100,
    },
    visible:{
        x:2,
        transition:{delay:1,duration:2}
    }
}

const row1right={
    hidden:{
        x:600,
    },
    visible:{
        x:-2,
        transition:{delay:1,duration:2}
    }
}
const row2left={
    hidden:{
        x:800,
    },
    visible:{
        x:-2,
        transition:{delay:1,duration:1}
    }
}
const row2right={
    hidden:{
        x:200,
    },
    visible:{
        x:2,
        transition:{delay:1,duration:1}
    }
}
const row3left={
    hidden:{
        width:300
    },
    visible:{
      width:600,
        transition:{delay:1,duration:1}
    }
}

function Section2() {
    // const { ref, inView } = useInView({
    //     // threshold: 0.2
    // });
    // const animation = useAnimation();
    // useEffect(() => {
    //     console.log("useeffect hook renders = ", inView);
    //     if(inView) {
    //         animation.start({
    //             x: 5,
    //             transition: { type: 'spring', duration: 1 }
    //         });
    //         if(!inView) {
    //             animation.start({
    //                 x: -800,
    //             })
    //         }
    //     }
    // }, [inView]);

    return (
        <div className='container-fluid section2'>
            <div className='row secwithborder'>
                <motion.div className='col col-md-6 '
                    variants={row1left}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true }}
                >
                    <h3 className='fw-bold sech3 mb-3'>DesignBlocs </h3>
                    <p className='mb-5'>Design Blocs is a design language created to see to the needs of Product designers looking to design user centric products. </p>

                    <p>As a UI/UX Designer, i contributed in designing the Chips and took part in the Design system.</p>

                    <div className='d-flex secflex secflex1 pt-3'>
                        <p>Role</p>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className='d-flex secflex'>
                        <p>Visit Website</p>
                        <p><a href='https://t.co/fFTTbPWOcZ'>https://designblocs.com/</a></p>
                    </div>
                    <div className='d-flex secflex'>
                        <p>Deliverables</p>
                        <p>UI Design, UX Design</p>
                    </div>
                </motion.div>
                <motion.div className='col col-md-6'
                    variants={row1right}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true }}
                >
                    <img src='/sec2img.png' alt='sec2img' className='sec2img' />
                </motion.div>
            </div>

            {/* second row */}
            <div className='row secwithborder secrow '>
                <motion.div className='col col-md-6 '
                    variants={row2left}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true }}
                    // animate={animation}
                >
                    <h3 className='fw-bold sech3 mb-3'>Kwikinvoice</h3>
                    <p className='mb-5'>KwikInvoice is a platform where online business persons, small, medium and large enterprise can generate Dynamic Invoices in less than 2 minutes, For Free. </p>

                    <p>As a UI/UX Designer, i took part in the UX Audit, making up the Design system (iconography), designed the footer section.</p>

                    <div className='d-flex secflex secflex1 pt-3'>
                        <p>Role</p>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className='d-flex secflex'>
                        <p>Visit Website</p>
                        <p><a href='https://t.co/ZCEylPIlCS'>https://kwikinvoice.com/</a></p>
                    </div>
                    <div className='d-flex secflex'>
                        <p>Deliverables</p>
                        <p>UI Design, UX Design</p>
                    </div>
                </motion.div>
                <motion.div className='col col-md-6'
                    variants={row2right}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true }}
                    // animate={animation}
                >
                    <img src='/sec3img.png' alt='sec3img' className='sec2img' />
                </motion.div>
            </div>
            {/* section3 */}
            <div className='row secrow'>
                <motion.div className='col col-md-6 '
                    variants={row3left}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true }}
                >
                    <h3 className='fw-bold sech3 mb-3'>ClientDorm</h3>
                    <p className='mb-5'>A free CRM app built around your business just how you want it. It is totally free to use CRM app built to accommodate your business needs and tailored down to how you would want it to be. </p>

                    <p>As a UI/UX Designer, i took part in the UI design, design system, and UX Research.</p>

                    <div className='d-flex secflex secflex1 pt-3'>
                        <p>Role</p>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className='d-flex secflex '>
                        <p>Visit Website</p>
                        <p><a href='https://t.co/s7BKuVWFGQ'>https://clientdorm.com/</a></p>
                    </div>
                    <div className='d-flex secflex'>
                        <p>Deliverables</p>
                        <p>UI Design, UX Design</p>
                    </div>
                </motion.div>
                <motion.div className='col col-md-6'
                    // variants={ rowtwov }
                    // initial="hidden"
                    // whileInView="visible"
                >
                    <img src='/sec4img.png' alt='sec4img' className='sec2img' />
                </motion.div>
            </div>
        </div>
    )
}

export default Section2