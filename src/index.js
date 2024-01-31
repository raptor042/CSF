import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {ThirdwebProvider } from '@thirdweb-dev/react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Token from './Token';
import Home from './Home';
import Footer from './Footer'
import Staking from './Staking';
import Contact from './Contact';
import AskPage from './AskPage';
import AppAd from './AppAd';
const cursor = document.getElementById("cursor");
const cursorBorder = document.getElementById("cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

const handleMouse = (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;
  document.getElementById("cursor").style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
};


requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
  let a = document.getElementById("cursor-border")

  if (a?.style) {
    a.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  }else{

  }
  requestAnimationFrame(loop);
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ThirdwebProvider>
    <div className='x' onMouseMove={handleMouse}>
    <div id="cursor"></div>
    <div id="cursor-border"></div>

    <Routes>
    <Route path='/Token/:id' element={<Token />} />
    <Route path='/' element={<Home />} />
    <Route path='/staking' element={<Staking />} />
    <Route path='/create-pool' element={<AskPage />} />
    <Route path='/create-basic-pool' element={<App />} />
    <Route path='/create-advance-pool' element={<AppAd />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </div>
    </ThirdwebProvider>
  </BrowserRouter>
);