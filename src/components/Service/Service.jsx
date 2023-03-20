import React from 'react'
import SemiHero from '../About/back'
import Footer from '../common/Footer'
import Header from '../common/header'
import Feature from '../Home/featured/Feature'
import './Service.css'
import Image from "../assets/services.jpg"

const Service = () => {
  return (
    <div className='service'>
        <Header/>
        <SemiHero title="Services" description="Service - All Services" cover={Image}/>
        <Feature/>
        <Footer/>
    </div>
  )
}

export default Service