import React, { useEffect } from 'react'
import logo from './IMG/logo.png'
import './App.css'
import { ConnectWallet } from '@thirdweb-dev/react';
import { Link } from 'react-router-dom';
import telegram from './IMG/telegram.png'
import twitter from './IMG/twitter.png'


const handleClick = (e) => {
    let ax = document.getElementsByClassName('nav-link')
     for (let f = 0; f < ax.length; f++) {
        ax[f].classList.remove("active")
     }

     e.target.classList.add("active")
}


const Navbar = () => {
  return (
                  <nav className="navbar bg-dark navbar-expand-xl fixed-top shadow" data-bs-theme="dark">
                <div className="container-fluid mx-lg-5">
                    <a href="/"><h1 className='fw-bold'><img src={logo} className='img-fluid headlogo' /></h1></a>
                    <a href=" https://t.me/CoinStakingFactory"><img src={telegram} className='img-fluid imgg' /></a>
                    <a href="https://twitter.com/"><img src={twitter} className='img-fluid imgg' /></a>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto d-xl-flex align-items-xl-center">
                            <li className="nav-item">
                                <Link className="nav-link" id='h' to="/" onSelect={(e)=>{handleClick(e);}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='s' to="/staking" onSelect={(e)=>{handleClick(e);}}>Staking Pools</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id='c' to="/create-pool"  onSelect={(e)=>{handleClick(e);}}>Create a Pool</Link>
                            </li>
                            <li className='nav-item ms-xl-5 ps-xl-5'>
                                <ConnectWallet className='btn btn-primary' theme="dark" btnTitle='CONNECT WALLET' />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
  )
}

export default Navbar
