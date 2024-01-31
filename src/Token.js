import React from 'react'
import btc from './IMG/btc.png'
import eth from './IMG/eth.png'
import uni from './IMG/uni.png'
import logo from './IMG/logo.png'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import './App.css'

const Token = () => {

    const id = useParams()
    console.log(id.id, "idddddd");


  return (
        <div className='Token d-flex justify-content-center align-items-center'>
        <Navbar />
        <div className='container'>
            <div className='token-app mt-5 pt-5'>
            <h1 className='text-center'>{id?.id == "btc" ? <img src={btc} className='img-fluid btc' /> : id?.id == "eth" ? <img src={eth} className='img-fluid eth' /> : id?.id == "uni" ? <img src={uni} className='img-fluid uni' /> : ""}</h1>
            <h4 className='fw-bold text-center'>{id?.id == "btc" ? 'Bitcoin - $BTC' : id?.id == "eth" ? 'Ethereum - $ETH' : id?.id == "uni" ? "Uniswap - $UNI" : ""}</h4>
            <p className='text-center'>{id?.id == "btc" ? 'Bitcoin (BTC)' : id?.id == "eth" ? 'Ethereum (ETH)' : id?.id == "uni" ? "Uniswap (UNI)" : ""} is a cryptocurrency, a virtual currency designed to act as money and a form of payment outside the control of any one person, group, or entity, thus removing the need for third-party involvment in financial transactions.</p>
            </div>
            <div className='token-box'>
            <div className='d-flex justify-content-between align-items-center'>
            <div>
                <img className='headlogo img-fluid' src={logo} />
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <h6 className='mb-0'>{id?.id == "btc" ? 'Bitcoin' : id?.id == "eth" ? 'Ethereum' : id?.id == "uni" ? "Uniswap" : ""}</h6>
                {id?.id == "btc" ? <img src={btc} className='img-fluid btc2 ms-2' /> : id?.id == "eth" ? <img src={eth} className='img-fluid eth2 ms-2' /> : id?.id == "uni" ? <img src={uni} className='img-fluid uni2 ms-2' /> : ""}
            </div>
            </div>
            <div className='text-center my-4'>
                <h6>Smart Contract : 0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h6>
            </div>
            <div className='row m-2 row-cols-1 row-cols-sm-2 justify-content-between mt-5'>
                <div className='col'>
                    <h5 className='blue'>Total Tokens Staked</h5>
                    <p>0.00</p>
                </div>
                <div className='col'>
                    <h5 className='blue'>My Token Balance</h5>
                    <p>0.00</p>
                </div>
            </div>
            <div className='row m-2 row-cols-1 row-cols-sm-2  justify-content-between'>
                <div className='col'>
                    <h5 className='blue'>My Staked Tokens</h5>
                    <p>0.00</p>
                </div>
                <div className='col'>
                    <h5 className='blue'>Pool Ends in 360 Days</h5>
                    <p>0</p>
                </div>
            </div>
            <button className='btn btn-warning'>Binance Smart Chain</button>
            </div>
            <div className='boxes row row-cols-1 row-cols-md-2'>
                <div className='col'>
                <div className='token-minibox me-md-3 d-flex flex-column me-md-3 justify-content-between'>
                    <h4>No Lock</h4>
                    <p className='blue mb-2'>Total Staked : 0.00</p>
                    <p className='blue'>Staking APR : 0%</p>
                    <button className='btn btn-sm primary mt-4'>Approve no lock</button>
                </div>
                </div>
                <div className='col'>
                <div className='token-minibox ms-md-3 d-flex flex-column justify-content-between'>
                    <h4>3 Days</h4>
                    <p className='blue mb-2'>Total Staked : 0.00</p>
                    <button className='btn btn-sm primary mt-4'>No Staking Pool Available</button>
                </div>
                </div>

                <div className='col'>
                <div className='token-minibox d-flex flex-column me-md-3 justify-content-between'>
                    <h4>7 Days</h4>
                    <p className='blue mb-2'>Total Staked : 0.00</p>
                    <p className='blue'>Staking APR : 0%</p>
                    <button className='btn btn-sm primary mt-4'>Approve 7 days</button>
                </div>
                </div>

                <div className='col'>
                <div className='token-minibox ms-md-3 d-flex flex-column justify-content-between'>
                    <h4>14 Days</h4>
                    <p className='blue mb-2'>Total Staked : 0.00</p>
                    <button className='btn btn-sm primary mt-4'>No Staking Pool Available</button>
                </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Token
