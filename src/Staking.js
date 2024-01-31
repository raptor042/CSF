import React from 'react'
import xel from './IMG/xel.png'
import swd from './IMG/Sword-01.png'
import bannerr from './IMG/Frame 44.png'
import bsc from './IMG/bsc.png'
import { useEffect } from 'react'
import logo from './IMG/logo.png'
import './App.css'
import { ConnectWallet } from '@thirdweb-dev/react';
import { Link } from 'react-router-dom';
import telegram from './IMG/telegram.png'
import twitter from './IMG/twitter.png'
import eth from './IMG/ETHH.png'
import filter from "./IMG/filter-solid.png"



const Staking = () => {

    const handleClick = (e) => {
        let ax = document.getElementsByClassName('nav-link')
         for (let f = 0; f < ax.length; f++) {
            ax[f].classList.remove("active")
         }
    
         e.target.classList.add("active")
    }

    const handleWid = () => {
        alert('Emergency Withdraw fee is 50%')
    }
    
    
    useEffect(()=>{
            document.getElementById("s").classList.add("active")
            document.getElementById("h").classList.remove("active")
            document.getElementById("c").classList.remove("active")
    })
    return (
        <>
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
            <section className='staking mb-5' id='staking'>
                <div className='container'>
                <div className='row'>
                    <img src={bannerr} className='bannerr' />
                </div>
                    <div className='head'>
                        <h1>Farms & Pools</h1>
                    </div>
                    <div className='d-flex flex-column flex-md-row xz'>

                <input type='search' placeholder='Search Here' className='search' />
                <div className='d-flex mt-4 mt-md-0 ms-sm-auto'>
                <button className='btn btn-primary end ms-1 ms-md-4'>Live Pools</button>
                <button className='btn btn-primary end'>Ended Pools</button>
                {/* <button className='btn btn-primary end'><img className='img-fluid filter' src={filter} /></button> */}
                </div>
                    </div>
                    <div className='row gy-1 row-cols-1 row-cols-md-2 row-cols-lg-3'>
                        
                    <div className='col'>
                            <div className='staking-card'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='circle me-3'>
                                        <img src={xel}
                                            className='img-fluid'/>
                                    </div>
                                    <div>
                                        <h4 className='text-end'>Xetola</h4>
                                        <h5 className='text-end'>XEL / USD</h5>
                                        <div className='d-flex justify-content-end'>

                                        <img src={bsc} className='img-fluid bsc' />
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor='deposit' className='ms-1 mt-3'>Deposit</label><br />
                                <div className='par'>

                                    <input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Deposit</button> <br />
                                    <p className='text-muted max'>MAX</p>

                                    <div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
                                    
                                </div>
                                <label htmlFor='withdraw' className='ms-1 mt-3'>Withdraw</label><br />
                                <div className='par'>

<input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Withdraw</button> <br />
<p className='text-muted max'>MAX</p>
<div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
</div>
                                    <div className='butns btt'>
                                        <button type="submit" class="btn btn-primary wid" onClick={handleWid}>Emergency Withdraw</button>
                                    </div>
                                    <div className='d-flex mt-4 align-items-center justify-content-between mx-1 mt-2'>
                                    <h6 className='mb-0'>Lock Period : </h6>
                                    <h6>7 Days</h6>
                                </div>
                                <div className='mboxx mt-2 d-flex align-items-center justify-content-between mx-1'>
                                <div>
                                    <h5>APR% :</h5>
                                    <h6>Ends in: </h6>
                                </div>
                                <div>
                                   <h5 className='text-end'>10%</h5>
                                    <h6>360 Days</h6>
                                </div>
                                </div>
                                <div className='inputs mt-2'>
                                

                                   
                                <hr className='my-3' />
                                    <div className='d-flex align-items-center mt-2 justify-content-between mx-1'>
                                    <div>
                                        <h5>Pending Rewards</h5>
                                        <h6>0.00</h6>
                                    </div>
                                    <div className='butns'>
                                        <button type="submit" class="btn btn-primary">Claim</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col'>
                            <div className='staking-card'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='circle me-3'>
                                        <img src={xel}
                                            className='img-fluid'/>
                                    </div>
                                    <div>
                                        <h4 className='text-end'>Xetola</h4>
                                        <h5 className='text-end'>XEL / USD</h5>
                                        <div className='d-flex justify-content-end'>

                                        <img src={eth} className='img-fluid eth' />
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor='deposit' className='ms-1 mt-3'>Deposit</label><br />
                                <div className='par'>

                                    <input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Deposit</button> <br />
                                    <p className='text-muted max'>MAX</p>
                                    <div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
                                </div>
                                <label htmlFor='withdraw' className='ms-1 mt-3'>Withdraw</label><br />
                                <div className='par'>

<input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Withdraw</button> <br />
<p className='text-muted max'>MAX</p>
<div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
</div>
                                    <div className='butns btt'>
                                        <button type="submit" class="btn btn-primary wid" onClick={handleWid}>Emergency Withdraw</button>
                                    </div>
                                    <div className='d-flex mt-4 align-items-center justify-content-between mx-1 mt-2'>
                                    <h6 className='mb-0'>Lock Period : </h6>
                                    <h6>7 Days</h6>
                                </div>
                                <div className='mboxx mt-2 d-flex align-items-center justify-content-between mx-1'>
                                <div>
                                    <h5>APR% :</h5>
                                    <h6>Ends in: </h6>
                                </div>
                                <div>
                                   <h5 className='text-end'>10%</h5>
                                    <h6>360 Days</h6>
                                </div>
                                </div>
                                <div className='inputs mt-2'>
                                
                                <hr className='my-3' />
                                    <div className='d-flex align-items-center mt-2 justify-content-between mx-1'>
                                    <div>
                                        <h5>Pending Rewards</h5>
                                        <h6>0.00</h6>
                                    </div>
                                    <div className='butns'>
                                        <button type="submit" class="btn btn-primary">Claim</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className='col'>
                            <div className='staking-card'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='circle me-3'>
                                        <img src={xel}
                                            className='img-fluid'/>
                                    </div>
                                    <div>
                                        <h4 className='text-end'>Xetola</h4>
                                        <h5 className='text-end'>XEL / USD</h5>
                                        <div className='d-flex justify-content-end'>

                                        <img src={bsc} className='img-fluid bsc' />
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor='deposit' className='ms-1 mt-3'>Deposit</label><br />
                                <div className='par'>

                                    <input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Deposit</button> <br />
                                    <p className='text-muted max'>MAX</p>
                                    <div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
                                </div>
                                <label htmlFor='withdraw' className='ms-1 mt-3'>Withdraw</label><br />
                                <div className='par'>

<input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Withdraw</button> <br />
<p className='text-muted max'>MAX</p>
<div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
</div>
                                    <div className='butns btt'>
                                        <button type="submit" class="btn btn-primary wid" onClick={handleWid}>Emergency Withdraw</button>
                                    </div>
                                    <div className='d-flex mt-4 align-items-center justify-content-between mx-1 mt-2'>
                                    <h6 className='mb-0'>Lock Period : </h6>
                                    <h6>7 Days</h6>
                                </div>
                                <div className='mboxx mt-2 d-flex align-items-center justify-content-between mx-1'>
                                <div>
                                    <h5>APR% :</h5>
                                    <h6>Ends in: </h6>
                                </div>
                                <div>
                                   <h5 className='text-end'>10%</h5>
                                    <h6>360 Days</h6>
                                </div>
                                </div>
                                <div className='inputs mt-2'>
                                
                                <hr className='my-3' />
                                    <div className='d-flex align-items-center mt-2 justify-content-between mx-1'>
                                    <div>
                                        <h5>Pending Rewards</h5>
                                        <h6>0.00</h6>
                                    </div>
                                    <div className='butns'>
                                        <button type="submit" class="btn btn-primary">Claim</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='staking-card'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='circle me-3'>
                                        <img src={xel}
                                            className='img-fluid'/>
                                    </div>
                                    <div>
                                        <h4 className='text-end'>Xetola</h4>
                                        <h5 className='text-end'>XEL / USD</h5>
                                        <div className='d-flex justify-content-end'>

                                        <img src={eth} className='img-fluid eth' />
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor='deposit' className='ms-1 mt-3'>Deposit</label><br />
                                <div className='par'>

                                    <input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Deposit</button> <br />
                                    <p className='text-muted max'>MAX</p>
                                    <div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
                                </div>
                                <label htmlFor='withdraw' className='ms-1 mt-3'>Withdraw</label><br />
                                <div className='par'>

<input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Withdraw</button> <br />
<p className='text-muted max'>MAX</p>
<div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
</div>
                                    <div className='butns btt'>
                                        <button type="submit" class="btn btn-primary wid" onClick={handleWid}>Emergency Withdraw</button>
                                    </div>
                                    <div className='d-flex mt-4 align-items-center justify-content-between mx-1 mt-2'>
                                    <h6 className='mb-0'>Lock Period : </h6>
                                    <h6>7 Days</h6>
                                </div>
                                <div className='mboxx mt-2 d-flex align-items-center justify-content-between mx-1'>
                                <div>
                                    <h5>APR% :</h5>
                                    <h6>Ends in: </h6>
                                </div>
                                <div>
                                   <h5 className='text-end'>10%</h5>
                                    <h6>360 Days</h6>
                                </div>
                                </div>
                                <div className='inputs mt-2'>
                                
                                <hr className='my-3' />
                                    <div className='d-flex align-items-center mt-2 justify-content-between mx-1'>
                                    <div>
                                        <h5>Pending Rewards</h5>
                                        <h6>0.00</h6>
                                    </div>
                                    <div className='butns'>
                                        <button type="submit" class="btn btn-primary">Claim</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='staking-card'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='circle me-3'>
                                        <img src={xel}
                                            className='img-fluid'/>
                                    </div>
                                    <div>
                                        <h4 className='text-end'>Xetola</h4>
                                        <h5 className='text-end'>XEL / USD</h5>
                                        <div className='d-flex justify-content-end'>

                                        <img src={bsc} className='img-fluid bsc' />
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor='deposit' className='ms-1 mt-3'>Deposit</label><br />
                                <div className='par'>

                                    <input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Deposit</button> <br />
                                    <p className='text-muted max'>MAX</p>
                                    <div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
                                </div>
                                <label htmlFor='withdraw' className='ms-1 mt-3'>Withdraw</label><br />
                                <div className='par'>

<input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Withdraw</button> <br />
<p className='text-muted max'>MAX</p>
<div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
</div>
                                    <div className='butns btt'>
                                        <button type="submit" class="btn btn-primary wid" onClick={handleWid}>Emergency Withdraw</button>
                                    </div>
                                    <div className='d-flex mt-4 align-items-center justify-content-between mx-1 mt-2'>
                                    <h6 className='mb-0'>Lock Period : </h6>
                                    <h6>7 Days</h6>
                                </div>
                                <div className='mboxx mt-2 d-flex align-items-center justify-content-between mx-1'>
                                <div>
                                    <h5>APR% :</h5>
                                    <h6>Ends in: </h6>
                                </div>
                                <div>
                                   <h5 className='text-end'>10%</h5>
                                    <h6>360 Days</h6>
                                </div>
                                </div>
                                <div className='inputs mt-2'>
                                
                                <hr className='my-3' />
                                    <div className='d-flex align-items-center mt-2 justify-content-between mx-1'>
                                    <div>
                                        <h5>Pending Rewards</h5>
                                        <h6>0.00</h6>
                                    </div>
                                    <div className='butns'>
                                        <button type="submit" class="btn btn-primary">Claim</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='staking-card'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='circle me-3'>
                                        <img src={xel}
                                            className='img-fluid'/>
                                    </div>
                                    <div>
                                        <h4 className='text-end'>Xetola</h4>
                                        <h5 className='text-end'>XEL / USD</h5>
                                        <div className='d-flex justify-content-end'>

                                        <img src={eth} className='img-fluid eth' />
                                        </div>
                                    </div>
                                </div>
                                <label htmlFor='deposit' className='ms-1 mt-3'>Deposit</label><br />
                                <div className='par'>

                                    <input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Deposit</button> <br />
                                    <p className='text-muted max'>MAX</p>
                                    <div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
                                </div>
                                <label htmlFor='withdraw' className='ms-1 mt-3'>Withdraw</label><br />
                                <div className='par'>

<input className='deposit' placeholder='0.000' /><button className='btn btn-primary'>Withdraw</button> <br />
<p className='text-muted max'>MAX</p>
<div className='d-flex align-items-center mx-1 mt-2'>
                                    <h6 className='mb-0 me-1'>Balance : </h6>
                                    <h6>0.00</h6>
                                </div>
</div>
                                    <div className='butns btt'>
                                        <button type="submit" class="btn btn-primary wid" onClick={handleWid}>Emergency Withdraw</button>
                                    </div>
                                    <div className='d-flex mt-4 align-items-center justify-content-between mx-1 mt-2'>
                                    <h6 className='mb-0'>Lock Period : </h6>
                                    <h6>7 Days</h6>
                                </div>
                                <div className='mboxx mt-2 d-flex align-items-center justify-content-between mx-1'>
                                <div>
                                    <h5>APR% :</h5>
                                    <h6>Ends in: </h6>
                                </div>
                                <div>
                                   <h5 className='text-end'>10%</h5>
                                    <h6>360 Days</h6>
                                </div>
                                </div>
                                <div className='inputs mt-2'>
                                
                                <hr className='my-3' />
                                    <div className='d-flex align-items-center mt-2 justify-content-between mx-1'>
                                    <div>
                                        <h5>Pending Rewards</h5>
                                        <h6>0.00</h6>
                                    </div>
                                    <div className='butns'>
                                        <button type="submit" class="btn btn-primary">Claim</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className='row mt-4'>
                        <div className='col d-flex justify-content-center'>
                            <button className='btn mbt'>View All
                                <i class="bi bi-caret-right-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Staking
