import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/header'
import image from "../assets/about.jpg"
import "./About.css"
import SemiHero from './back'
import Heading from '../Home/Hero/Heading'


const About = () => {
  return (
    <div className='about'>
        <Header/>
        <SemiHero  title="About Us" description="About Us - Who We Are?" cover={image}/>
        <div className="contain flex mtop mb">
          <div className="left row">
            <Heading heading="Our Agency Story" text="Check out our company story and work process"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About