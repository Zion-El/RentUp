import React from 'react'

const Heading = (props) => {
  return (
    <div className='heading'>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
    </div>
  )
}

export default Heading