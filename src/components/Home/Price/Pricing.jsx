import React from 'react'
import Heading from '../Hero/Heading'
import "./Pricing.css"
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <section className="price padding">
        <div className="contain">
            <Heading heading="Select your Package" text=""/>
            <PriceCard/>
        </div>
    </section>
  )
}

export default Price