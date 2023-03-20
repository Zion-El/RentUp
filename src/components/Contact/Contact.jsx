import React from 'react'
import Header from '../common/header'
import Footer from '../common/Footer'
import './Contact.css'
import ContactForm from './ContactForm'
import Image from "../assets/pricing.jpg"
import SemiHero from '../About/back'

const Contact = () => {
  return (
    <div className='contact'>
      <Header/>
      <SemiHero title="Contact Us" description="Get Helps & Friendly Support" cover={Image}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact