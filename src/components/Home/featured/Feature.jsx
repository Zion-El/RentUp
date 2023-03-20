import React from 'react'
import Heading from '../Hero/Heading'
import "./Feature.css"
import FeatureCard from './FeatureCard'

const Feature = () => {
  return (
    <section className="features background">
        <div className="featured contain">
            <Heading heading="Featured Property Types" text="Find All Type of Property"/>
            <FeatureCard/>
        </div>
    </section>
  )
}

export default Feature