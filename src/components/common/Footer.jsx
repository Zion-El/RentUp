import React from 'react'
import { footer } from '../data/Data'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <section className="footerContact">
            <div className="contain">
                <div className="send flex">
                    <div className="text">
                        <h1>Do You Have Questions?</h1>
                        <p>We'll help you to grow your career and growth</p>
                    </div>
                    <button className="btn5">Contact Us Today</button>
                </div>
            </div>
        </section>
        <section className="footer">
            <div className="contain">
                <div className="box">
                    <div className="logo">
                        <img src="../images/logo-light.png" alt="" />
                        <h2>Do You Need Help With Anything?</h2>
                        <p>Receive updates, hot deals, tutorials, discounts sent straight in your inbox every month</p>

                        <div className="input flex">
                            <input type="email" placeholder='Email Address' name='' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='highlights'>
                    {footer.map((val, index)=>{
                        return(
                            <div key={index} className="box">
                                <h3>{val.title}</h3>
                                <ul>
                                    {val.text.map((items) => <li>{items.list}</li> )}
                                </ul>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </section>
        <div className="legal">
            <span>© 2023 RentUp. Designed by DevMic</span>
        </div>
    </footer>

  )
}

export default Footer