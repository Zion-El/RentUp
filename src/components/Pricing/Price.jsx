import React from 'react'
import Header from '../common/header'
import './Price.css'
import SemiHero from '../About/back'
import Footer from '../common/Footer'
import Image from "../assets/pricing.jpg"
import Pricing from '../Home/Price/Pricing'

const Price = () => {
  return (
    <div className='pricetab'>
        <Header/>
        <SemiHero title="30 days money back guarantee" description="No Extra Fee. Friendly Support" cover={Image}/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default Price