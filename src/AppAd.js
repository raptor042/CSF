import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./App.css";
import bsc from './IMG/bsc.png'
import eth from './IMG/eth.png'
import logo from "./IMG/logo.png";
import "./App.css";
import telegram from "./IMG/telegram.png";
import { useEffect } from "react";
import twitter from "./IMG/twitter.png";
import { Link } from "react-router-dom";

function AppAd() {
  useEffect(() => {
    document.getElementById("c").classList.add("active");
    document.getElementById("s").classList.remove("active");
    document.getElementById("h").classList.remove("active");
  });

  const handleClick = (e) => {
    let ax = document.getElementsByClassName("nav-link");
    for (let f = 0; f < ax.length; f++) {
      ax[f].classList.remove("active");
    }

    e.target.classList.add("active");
  };

  const handleCheck = (e) => {
    abc(e)
    
    let ac2 = document.getElementsByClassName("ac2");
    let parent = document.getElementById("stake-here");
    const label = document.createElement("label");
    const label2 = document.createElement("label");
    label.innerText = `Stake Supply as Tokens ( ${e?.target?.value} )`;
    label2.innerText = `How Long Pool Will Last in Days ( ${e?.target?.value} )`;
    const input = document.createElement("input");
    const input2 = document.createElement("input");
    input.classList.add(`inps`);
    input.setAttribute("type", "number");
    input2.setAttribute("type", "number");
    input.classList.add(`${e.target.value.split(" ")[0]}`);
    input2.classList.add(`${e.target.value.split(" ")[0]}`);
    input2.classList.add(`inps`);
    if (e.target.checked) {
      document.getElementById("create-pool").removeAttribute("disabled");
      parent.appendChild(label);
      parent.appendChild(input);
      parent.appendChild(label2);
      parent.appendChild(input2);
    } else {
      let nodes = parent.childNodes;
      for (let i = 0; i < nodes.length; i++) {
        const element = nodes[i];
        if (nodes[i].innerText.includes(e.target.value)) {
          console.log("enterred2");
          console.log(nodes[i]);
          parent.removeChild(nodes[i]);
        }
        if (nodes[i].classList.value.includes(e.target.value.split(" ")[0])) {
          parent.removeChild(nodes[i]);
          console.log("enterred");
        }
        if (nodes[i].innerText.includes(e.target.value)) {
          console.log("enterred2");
          console.log(nodes[i]);
          parent.removeChild(nodes[i]);
        }
        if (nodes[i].classList.value.includes(e.target.value.split(" ")[0])) {
          parent.removeChild(nodes[i]);
          console.log("enterred");
        }
      }

      if (parent.hasChildNodes()) {
        console.log(true, "tru1");
      } else {
        document.getElementById("create-pool").setAttribute("disabled", "true");
        console.log(true, "tru2");
      }
    }
};

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  const handleCheck2 = (e) => {
    abc(e);
    // let no = document?.getElementsByClassName("no")[0]
    let parent = document.getElementById("stake-here");

    // const label3 = document.createElement("label");
    // const label4 = document.createElement("label");
    // label3.innerText = `Stake Supply as Tokens ( ${
    //     no ?. value
    // } )`
    // label4.innerText = `How Long Pool Will Last in Days ( ${
    //     no ?. value
    // } )`
    // const input3 = document.createElement("input");
    // const input4 = document.createElement("input");
    // input3.classList.add(`inps`)
    // input3.setAttribute('type', "number")
    // input4.setAttribute('type', "number")
    // input3.classList.add(`${
    //     no.value.split(' ')[0]
    // }`)
    // input4.classList.add(`${
    //     no.value.split(' ')[0]
    // }`)
    // input4.classList.add(`inps`)

    // if (no.checked) {
    //     document.getElementById("create-pool").removeAttribute("disabled")
    //     parent.appendChild(label3)
    //     parent.appendChild(input3);
    //     parent.appendChild(label4);
    //     parent.appendChild(input4);
    // }

    const label = document.createElement("label");
    const label2 = document.createElement("label");
    label.innerText = `Stake Supply as Tokens ( ${e?.target?.value} )`;
    label2.innerText = `How Long Pool Will Last in Days ( ${e?.target?.value} )`;
    const input = document.createElement("input");
    const input2 = document.createElement("input");
    input.classList.add(`inps`);
    input.setAttribute("type", "number");
    input2.setAttribute("type", "number");
    input.classList.add(`${e.target.value.split(" ")[0]}`);
    input2.classList.add(`${e.target.value.split(" ")[0]}`);
    input2.classList.add(`inps`);

    if (e.target.checked) {
      // cbChange(e)
      document.getElementById("create-pool").removeAttribute("disabled");
      parent.appendChild(label);
      parent.appendChild(input);
      parent.appendChild(label2);
      parent.appendChild(input2);
    } else {
      let nodes = parent.childNodes;
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].innerText.includes(e.target.value)) {
          parent.removeChild(nodes[i]);
        }
        if (nodes[i].classList.value.includes(e.target.value.split(" ")[0])) {
          parent.removeChild(nodes[i]);
        }
        if (nodes[i].innerText.includes(e.target.value)) {
          parent.removeChild(nodes[i]);
        }
        if (nodes[i].classList.value.includes(e.target.value.split(" ")[0])) {
          parent.removeChild(nodes[i]);
        }
      }
    }

    //     if (parent.hasChildNodes()) {
    //     }else{
    //       document.getElementById("create-pool").setAttribute("disabled", "true")
    //     }
    // }
  };

  function cbChange(e) {
    var cbs = document.getElementsByClassName("ac2");
    for (var i = 0; i < cbs.length; i++) {
      cbs[i].checked = false;
    }
    e.target.checked = true;
  }

  const abc = (e) => {
    let a = document.getElementsByClassName("a");
    let b = [];
    for (let y = 0; y < a.length; y++) {
      const element = a[y];
      if (element.checked) {
        b.push(element);

        if (b.length > 4) {
            alert("You can't select 5 different lock options")
        //   const popup = document.getElementById("popup");
        //   const closeBtn = document.getElementById("closeBtn");

        
        //     popup.style.display = "block";

        //   closeBtn.addEventListener("click", () => {
        //     popup.style.display = "none";
        //   });
        //   popup.addEventListener("click", () => {
        //     popup.style.display = "none";
        //   });
          e.target.checked = false;
        }
      }
    }
  };

  return (
    <>
      <ThirdwebProvider>
        <div className="Staking d-flex align-items-center justify-content-center">
          <nav
            className="navbar bg-dark navbar-expand-xl fixed-top shadow"
            data-bs-theme="dark"
          >
            <div className="container-fluid mx-lg-5">
              <a href="/">
                <h1 className="fw-bold">
                  <img src={logo} className="img-fluid headlogo" />
                </h1>
              </a>
              <a href=" https://t.me/CoinStakingFactory">
                <img src={telegram} className="img-fluid imgg" />
              </a>
              <a href="https://twitter.com/">
                <img src={twitter} className="img-fluid imgg" />
              </a>
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto d-xl-flex align-items-xl-center">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      id="h"
                      to="/"
                      onSelect={(e) => {
                        handleClick(e);
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      id="s"
                      to="/staking"
                      onSelect={(e) => {
                        handleClick(e);
                      }}
                    >
                      Staking Pools
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      id="c"
                      to="/create-pool"
                      onSelect={(e) => {
                        handleClick(e);
                      }}
                    >
                      Create a Pool
                    </Link>
                  </li>
                  <li className="nav-item ms-xl-5 ps-xl-5">
                    <ConnectWallet
                      className="btn btn-primary"
                      theme="dark"
                      btnTitle="CONNECT WALLET"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="stake-app">
           <div className='d-flex justify-content-between align-items-center mb-4'>
            <div class="">
            <h2 className='mb-0 fw-bold'>Create a Pool</h2>
</div>

<div class="popup-link">
                <a href="#popup1" className="btn btn-primary">
                  Select Network
                </a>
              </div>
              <div id="popup1" class="popup-container">
                <div class="popup-content">
                  <a href="#" class="close">
                    &times;
                  </a>
                  <h3>Select Network</h3>
                  <a href="#" className="close c"><button className="btn btn-primary ch">
                    <img src={eth} className="eth" /> Ethereum
                  </button></a>
                  <a href="#" className="close c ms-5"><button className="btn btn-primary ch">
                    <img src={bsc} className="bsc" /> Ethereum
                  </button></a>
                </div>
              </div>
            </div>
            <label>Smart Contract Address</label>
            <input
              className="inps"
              type="text"
              placeholder="ex. 0x000000000000000000000000000000000000dead"
            />
            <label>Token Name</label>
            <input className="inps" type="text" placeholder="ex. Bitcoin" />
            <label>Token Symbol</label>
            <input className="inps" type="text" placeholder="ex. BTC" />
            <label>Token Logo Link</label>
            <input
              className="inps"
              type="text"
              placeholder="Must be in 512px * 512px"
            />
                <label>Emergency Withdraw Fee (%)</label>
                    <input type='number' className='inps' />

            <label className="mt-4">Lock Options</label>
            <div className="mx-2 row row-cols-2 row-cols-sm-5 justify-content-sm-between mt-2">
              <div className="cat action col" onChange={handleCheck}>
                <label>
                  <input
                    type="checkbox"
                    value="No lock"
                    className="checkbox no a"
                    id="ac3"
                  />
                  <span>No lock</span>
                </label>
              </div>
              <div className="cat action col" onChange={handleCheck2}>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox ac2 a"
                    value="3 Days"
                  />
                  <span>3 Days</span>
                </label>
              </div>
              <div className="cat action col" onChange={handleCheck2}>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox ac2 a"
                    value="7 Days"
                  />
                  <span>7 Days</span>
                </label>
              </div>
              <div className="cat action col" onChange={handleCheck2}>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox ac2 a"
                    value="10 Days"
                  />
                  <span>10 Days</span>
                </label>
              </div>
            </div>
            <div className="mx-2 row row-cols-2 row-cols-sm-5 justify-content-sm-between mt-2">
              <div className="cat action col" onChange={handleCheck2}>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox ac2 a"
                    value="14 Days"
                  />
                  <span>14 Days</span>
                </label>
              </div>
              <div className="cat action col" onChange={handleCheck2}>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox ac2 a"
                    value="21 Days"
                  />
                  <span>21 Days</span>
                </label>
              </div>
              <div className="cat action col" onChange={handleCheck2}>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox ac2 a"
                    value="30 Days"
                  />
                  <span>30 Days</span>
                </label>
              </div>
              <div className="cat action col" onChange={handleCheck2}>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox ac2 a"
                    value="60 Days"
                  />
                  <span>60 Days</span>
                </label>
              </div>
            </div>
            <div className="mx-2 row row-cols-2 row-cols-sm-5 justify-content-center mt-2">
              <div className="cat action col me-sm-4" onChange={handleCheck2}>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox ac2 a"
                    value="90 Days"
                  />
                  <span>90 Days</span>
                </label>
              </div>
              <div className="cat action col" onChange={handleCheck2}>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox ac2 a"
                    value="180 Days"
                  />
                  <span>180 Days</span>
                </label>
              </div>
            </div>
          
            <div className="stake-here mt-5" id="stake-here"></div>

            <div className="d-flex mt-5 justify-content-center">
              <p className="small">
                Staking Pool Creation Cost: <span>2</span> BNB
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary"
                id="create-pool"
                disabled="true"
              >
                Create a Pool
              </button>
            </div>
          </div>
          {/* <div id="popup">
            <div class="popup-container">
              <div class="popup">
                <div class="close-popup" id="closeBtn">
                  <a href="#">X</a>
                </div>
                <h2>Custom Popup</h2>
                <p>
                  This is a custom popup. You can just put any content behind
                  it. Also you can apply any custom style in this popup.
                </p>
                <a href="#" class="popup-btn">
                  View Details
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </ThirdwebProvider>
    </>
  );
}

export default AppAd;
