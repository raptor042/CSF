import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import rocket from './IMG/2zzzAsset 4WEBSITE.png'
import monitor from './IMG/monitor.png'
import cheap from './IMG/low-price.png'
import shield from './IMG/shield.png'
import speed from './IMG/speed.png'
import {Link} from 'react-router-dom';
import tutorial from './IMG/2zzzAsset 1WEBSITE.png'
import logo from './IMG/logo.png'
import './App.css'
import { ConnectWallet } from '@thirdweb-dev/react';
import telegram from './IMG/telegram.png'
import twitter from './IMG/twitter.png'


const Home = () => {

    useEffect(()=>{
        document.getElementById("s").classList.remove("active")
        document.getElementById("h").classList.add("active")
        document.getElementById("c").classList.remove("active")
    },[])

    const handleClick = (e) => {
        let ax = document.getElementsByClassName('nav-link')
         for (let f = 0; f < ax.length; f++) {
            ax[f].classList.remove("active")
         }
    
         e.target.classList.add("active")
    }

    const navigate = useNavigate();

    const handleBtn = (e) => {
        let z = e.target.innerText.split(" ")[1]
        console.log(e.target.innerText.split(" "), "1234567890");
        console.log(z.split("$")[1].toLowerCase(), "asdfgkjhgfds");
        navigate(`/Token/${
            z.split("$")[1].toLowerCase()
        }`)
    }
    return (
        <div className='home'>
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
            <div className='hero'>
                <div className='container'>
                    <div className='hb'>
                        <div>
                            <h1>Web 3.0 Staking Service Decentralized Application</h1>
                            <p>Get staking service for your project in less than 1 minute with no coding required</p>
                            <Link to="/staking">
                                <button className='btn btn-primary me-3'>Staking Pools</button>
                            </Link>
                            <Link to="/create-pool">
                                <button className='btn btn-primary'>Create a Pool</button>
                            </Link>
                        </div>
                        <div className='img-main'>
                            <img src={rocket}
                                className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='service mt-5 pt-5'>
                <div className='container'>
                    <h1 className='text-center headt mb-5 pb-3'>What is Coin Staking Factory?</h1>
                    <p>Coin Staking Factory is a provider of decentralized finance staking service. While we innovate and improve staking service for DeFi space, our High-Tech coding provides secure and fastest staking service solution with no coding required. We are here to progress, innovate and fulfill needed improvements for staking service market. What are you waiting for? Let's try our fully automated staking platform and get your staking service in less than a minute!</p>
                    <div className='service-box'>
                        <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4'>
                            <div className='col px-4'>
                                <img src={monitor}
                                    className='img-fluid'/>
                                <h1>High-Tech</h1>
                                <p>Fully automated, no coding required DeFi staking service solutions</p>
                            </div>
                            <div className='col px-4'>
                                <img src={speed}
                                    className='img-fluid big'/>

                                <h1>Fast</h1>
                                <p>Get your staking pool created in less than 1 minute with only filling blanks</p>
                            </div>
                            <div className='col px-4'>
                                <img src={shield}
                                    className='img-fluid'/>

                                <h1>Secure</h1>
                                <p>Developed by real world DeFi company and group of developers to provide secure solutions</p>
                            </div>
                            <div className='col px-4'>
                                <img src={cheap}
                                    className='img-fluid'/>

                                <h1>Economical</h1>
                                <p>Get your staking pool created with lower price than 99% of DeFi staking services market</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='how-create mt-5 pt-5'>
                <div className='container'>
                    <div className='how-create-box'>
                    <h1 className='text-center'>How To Create a Pool?</h1>

                        <div className='d-flex flex-column flex-lg-row align-items-center mt-5'>
                            <div className='col bx'>
                                <img className='img-fluid' src={tutorial}/>
                            </div>
                            <div className='col bg-white box-h'>
                                <p>1. <span>Create a Pool</span>  button at right top of your screen</p>
                                <p>2. Select your preferred staking service with clicking on <span>Basic</span> or <span>Advanced</span> options.</p>
                                <p>3. Fill needed information about your token and staking pool.</p>
                                <p>4. Click <span> Create a Pool </span> button at bottom of screen.</p>
                                <p>5. Confirm Metamask transaction.</p>
                                <p>6. Done!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container'>
                <div className='top-section text-center'>
                    <h1>CSF Automatic Staking Pool</h1>
                    <p>A tool where anyone can create staking pool for their token within few clicks and no coding required!</p>
                    <div className='d-flex flex-column flex-md-row justify-content-center'>
                        <input type="search" placeholder='Search' className='search-inp me-4'/>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button class="btn bto">Live</button>
                            <button class="btn bto">Ended</button>
                        </div>
                    </div>
                </div>
                <div className='main-sec text-center mt-5'>
                    <div className='main-head'>
                        <h3>Total Pools</h3>
                        <p>CSF does not endorse or promote any farms/pools as they can be created by anyone. Anyone can create a farm/pool or token including bad actors.</p>
                    </div>
                    <div className='main-body'>
                        <div className='tab'>
                            <div className='btc-box d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                                <div className='d-flex a align-items-center'>
                                    <img src={
                                            require('./IMG/btc.png')
                                        }
                                        alt=''
                                        width='55px'
                                        className="ii"/>
                                    <h4 className='ms-3'>Bitcoin</h4>

                                </div>
                                <div className='d-flex align-items-sm-center justify-content-between n'>
                                    <div>
                                        <h5>Total Staked</h5>
                                        <h5 className='fw-bold mb-0'>$138,481.63 USD</h5>
                                    </div>
                                    <div>
                                        <h5>APR</h5>
                                        <h5 className='fw-bold mb-0'>20.2%</h5>
                                    </div>
                                    <div>
                                        <h5>Ends In</h5>
                                        <h5 className='fw-bold mb-0'>360 Days</h5>
                                    </div>
                                </div>

                                <div>
                                    <button className='btn btn-primary'
                                        onClick={handleBtn}>Stake $BTC</button>
                                </div>
                            </div>
                            <hr className='mx-2'/>
                            <div className='eth-box d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                                <div className='d-flex a align-items-center'>
                                    <img src={
                                            require('./IMG/eth.png')
                                        }
                                        alt=''
                                        width='55px'
                                        className="ii"/>
                                    <h4 className='ms-3'>Ethereum</h4>
                                </div>

                                <div className='d-flex align-items-sm-center justify-content-between n'>
                                    <div>
                                        <h5>Total Staked</h5>
                                        <h5 className='fw-bold mb-0'>$100,481.63 USD</h5>
                                    </div>
                                    <div>
                                        <h5>APR</h5>
                                        <h5 className='fw-bold mb-0'>4.8%</h5>
                                    </div>
                                    <div>
                                        <h5>Ends In</h5>
                                        <h5 className='fw-bold mb-0'>281 Days</h5>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-primary'
                                        onClick={handleBtn}>Stake $ETH</button>
                                </div>
                            </div>
                            <hr className='mx-2'/>
                            <div className='eth-box d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                                <div className='d-flex a align-items-center'>
                                    <img src={
                                            require('./IMG/eth.png')
                                        }
                                        alt=''
                                        width='55px'
                                        className="ii"/>
                                    <h4 className='ms-3'>Ethereum</h4>
                                </div>
                                <div className='d-flex align-items-sm-center justify-content-between n'>
                                    <div>
                                        <h5>Total Staked</h5>
                                        <h5 className='fw-bold mb-0'>$100,481.63 USD</h5>
                                    </div>
                                    <div>
                                        <h5>APR</h5>
                                        <h5 className='fw-bold mb-0'>4.8%</h5>
                                    </div>
                                    <div>
                                        <h5>Ends In</h5>
                                        <h5 className='fw-bold mb-0'>281 Days</h5>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-primary'
                                        onClick={handleBtn}>Stake $ETH</button>
                                </div>
                            </div>
                            <hr className='mx-2'/>
                            <div className='eth-box d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                                <div className='d-flex a align-items-center'>
                                    <img src={
                                            require('./IMG/eth.png')
                                        }
                                        alt=''
                                        width='55px'
                                        className="ii"/>
                                    <h4 className='ms-3'>Ethereum</h4>
                                </div>
                                <div className='d-flex align-items-sm-center justify-content-between n'>
                                    <div>
                                        <h5>Total Staked</h5>
                                        <h5 className='fw-bold mb-0'>$100,481.63 USD</h5>
                                    </div>
                                    <div>
                                        <h5>APR</h5>
                                        <h5 className='fw-bold mb-0'>4.8%</h5>
                                    </div>
                                    <div>
                                        <h5>Ends In</h5>
                                        <h5 className='fw-bold mb-0'>281 Days</h5>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-primary'
                                        onClick={handleBtn}>Stake $ETH</button>
                                </div>
                            </div>
                            <hr className='mx-2'/>
                            <div className='uni-box d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                                <div className='d-flex a align-items-center'>
                                    <img src={
                                            require('./IMG/uni.png')
                                        }
                                        alt=''
                                        width='55px'
                                        className="ii"/>
                                    <h4 className='ms-3'>Uniswap</h4>
                                </div>
                                <div className='d-flex align-items-sm-center justify-content-between n'>
                                    <div>
                                        <h5>Total Staked</h5>
                                        <h5 className='fw-bold mb-0'>$123,421.63 USD</h5>
                                    </div>
                                    <div>
                                        <h5>APR</h5>
                                        <h5 className='fw-bold mb-0'>25.7%</h5>
                                    </div>
                                    <div>
                                        <h5>Ends In</h5>
                                        <h5 className='fw-bold mb-0'>255 Days</h5>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-primary'
                                        onClick={handleBtn}>Stake $UNI</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */} </div>
    )
}

export default Home
