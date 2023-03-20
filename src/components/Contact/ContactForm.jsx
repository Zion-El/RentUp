import React from 'react'
import "./Contact.css"

const ContactForm = () => {
  return (
    <section className="contain mb">
        <form action="" className="shadow">
            <h4>Fillup The Form</h4>
            <div>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
            </div>
            <input type="text" placeholder='Subject' />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Submit Request</button>
        </form>
    </section>
  )
}

export default ContactForm