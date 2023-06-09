import React from 'react'
import Heading from './Heading'
import "./Hero.css"

const Hero = ({heading, text}) => {
  return (
    <section className='hero'>
        <div className="hero-box">
            
            <Heading heading={heading} text={text}/>
           
            <form className='hero-form'>
                <div className='box'>
                    <span>City/Street</span>
                    <input type="text" placeholder='Location' />
                </div>
                <div className='box'>
                    <span>Property Type</span>
                    <input type="text" placeholder='Property Type' />
                </div>
                <div className='box'>
                    <span>Price Range</span>
                    <input type="text" placeholder='Price Range' />
                </div>
                <div className="box last-box">
                    <h4>Advance Filter</h4>
                    <button className='btn'>
                        <i className='fa fa-search'></i>
                    </button>
                </div>
                
            </form>
        </div>
    </section>
  )
}

export default Hero