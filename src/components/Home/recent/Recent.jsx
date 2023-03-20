import React from 'react'
import Heading from '../Hero/Heading'
import RecentCard from './RecentCard'
import "./Recent.css"

const Recent = () => {
  return (
    <section className="recent padding">
        <div className="contain">
            <Heading heading="Recent Property Listed" text="Making a good choice is a good choice to make"/>
            <RecentCard/>
        </div>
    </section>
  )
}

export default Recent