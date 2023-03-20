import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { nav } from '../data/Data'
import "./header.css"

const Header = () => {
    const [clicked, setClicked] = useState(false)
    const [active, setActive] = useState(false)

    const HandleActive = ({isActive}) =>{
        return({
            borderBottom: isActive ? "5px solid #27ae60" : "none",
            borderRadius: "4px",
            color: isActive ? "#27ae60" : "#000",
            transition: ".2s ease-in"
        }
        )
    }

  return (
    <header className="container flex">
        <div className="logo">
            <img src="./images/logo.png" alt="Logo" />
        </div>
        <div className='nav'>
            <ul className={clicked ? 'small' : 'flex'}>
                {nav.map((item, index)=> (
                    <li key={index}>
                        <NavLink style={HandleActive} onClick={()=> setActive(!active)} to={item.path}>{item.text}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
        <div className='button flex'>
            <h4><span>2</span> My List</h4>
            <button className='btn1'>
                <i className='fa fa-sign-out'></i><span>Sign In</span> 
            </button>
        </div>
        <div className="toggle">
            <button onClick={() => setClicked(!clicked)}>
                <i className={!clicked ? 'fa fa-bars' : 'fa fa-times'}></i>
            </button>
        </div>
    </header>
  )
}

export default Header