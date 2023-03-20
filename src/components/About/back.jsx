import React from 'react'


const SemiHero = (props) => {
  return (
    <div className='back'>
        <div className="contain">
            <span>{props.title}</span>
            <h1>{props.description}</h1>
        </div>
        <img src={props.cover} alt="" />
    </div>
  )
}

export default SemiHero