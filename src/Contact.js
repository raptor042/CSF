import React from 'react'
import './App.css';
import telegram from './IMG/telegram.png'
import twitter from './IMG/twitter.png'
import instagram from './IMG/instagram.png'
import facebook from './IMG/facebook.png'
import web from './IMG/web.png'


const Contact = () => {
  return (
    <div className='contact'>
      <div className='container'>
      <div className='d-flex align-items-center justify-content-between head-con mt-5'>
        <h1>Get In Touch</h1>
        <div className='d-flex justify-content-bewteen'>
            <a href="/contact"><img src={telegram} className='img-fluid' /></a>
            <a href="/contact"><img src={twitter} className='img-fluid' /></a>
            <a href="/contact"><img src={instagram} className='img-fluid' /></a>
            <a href="/contact"><img src={facebook} className='img-fluid' /></a>
            <a href="/contact"><img src={web} className='img-fluid' /></a>
        </div>
      </div>
        <div className='contact-box'>
        <form>
            <input className='inps' type='text' placeholder='Your Name' />
            <input className='inps' type='number' placeholder='Phone Number' />
            <input className='inps' type='text' placeholder='Your Email' />
            <textarea rows="10" className='inps' type='text' placeholder='Your Query' />
            <button className='btn btn-primary'>Submit</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
