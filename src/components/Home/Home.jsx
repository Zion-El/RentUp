import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/header'
import Award from './award/Award'
import Feature from './featured/Feature'
import Hero from "./Hero/Hero"
import './Home.css'
import Location from './Location/Location'
import Pricing from './Price/Pricing'
import Recent from './recent/Recent'
import Team from './Team/Team'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero heading="Search Your Next Home" text="Find new & featured property located in your local city"/>
        <Feature/>
        <Recent/>
        <Award/>
        <Location/>
        <Team/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default Home