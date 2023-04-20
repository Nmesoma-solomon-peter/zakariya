import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
// import {Routes,Route } from 'react-router-dom';
import Aboutsec from './Aboutsec'
import Header from './Header'
import Projects from './Projects';
import Skills from './Skills'
import Contact from './Contact';
import Footer from './Footer';
function App() {
  return (
    <div>
      {/* <Routes> */}
      {/* <Route path="/" element={<About />} /> */}
      {/* </Routes> */}
      <Header />
      <Aboutsec />
      <Projects />
      <Skills />
      <Contact />
      <Footer />


    </div>
  )
}

export default App


// 1)write a program to generate multiplication table,
// get the number to genrate and the number of terms from the user.


/**write a c program to generate and display fibonacci sequence, get number of
 * terms from the user
 */

/*write a c program to find ASCII value of a character entered by the user
  */

/*write a c program to swap two numbers
 */