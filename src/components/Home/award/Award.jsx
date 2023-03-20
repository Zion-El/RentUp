import React from 'react'
import Heading from '../Hero/Heading'
import "./Award.css"
import { awards } from '../../data/Data'

const Award = () => {
  return (
    <section className="awards padding">
        <div className="contain">
            <Heading heading="Over 1,240,00+ Happy User Being With Us Still They Love Our Services" text="Our Awards"/>
        </div>
        <div className="content grid4 mtop">
            {awards.map((val, index)=> {
                return(
                   <div className="box" key={index}>
                        <div className="icon">
                            <span>{val.icon}</span>
                        </div>
                        <h1>{val.num}</h1>
                        <p>{val.name}</p>
                    </div> 
                )
                
            })}
        </div>
    </section>
  )
}

export default Award