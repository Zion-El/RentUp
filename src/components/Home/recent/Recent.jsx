import React from 'react'
import Heading from '../Hero/Heading'
import RecentCard from './RecentCard'
import "./Recent.css"

const Recent = () => {
  return (
    <section className="recent padding">
        <div className="contain">
            <Heading Heading="Recent Property Listed" text=""/>
            <RecentCard/>
        </div>
    </section>
  )
}

export default Recent