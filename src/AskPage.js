import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./App.css";

import logo from "./IMG/logo.png";
import "./App.css";
import telegram from "./IMG/telegram.png";
import { useEffect } from "react";
import twitter from "./IMG/twitter.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import App from "./App";

function AskPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("c").classList.add("active");
    document.getElementById("s").classList.remove("active");
    document.getElementById("h").classList.remove("active");
  });

  const handleClick = () => {};

  const handleSubmit = () => {
    if (document.getElementById("radio-one").checked) {
      navigate("/create-basic-pool");
    }
    if (document.getElementById("radio-two").checked) {
      navigate("/create-advance-pool");
    }
  };

  return (
    <>
      <ThirdwebProvider>
        <div className="select-opt d-flex align-items-center justify-content-center">
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
          <div className="opt">
            <div className="form">
              <div class="switch-field">
                <input
                  type="radio"
                  id="radio-one"
                  name="switch-one"
                  value="yes"
                />
                <label for="radio-one">
                  <h1>Basic</h1> <br />
                  <p className="he">Get single staking pool with single lock <br /> period.</p> <br/>
                   <p>Creation Cost: 1 BNB - 0.15 ETH</p>
                </label>
                <input
                  type="radio"
                  className="ms-5"
                  id="radio-two"
                  name="switch-one"
                  value="no"
                />
                <label for="radio-two" className="ms-md-5 mt-5 mt-md-0">
                <h1>Advanced</h1> <br />
                  <p className="he">Get multiple staking pools with several lock periods. </p> <br/>
                   <p>Creation Cost: 2 BNB - 0.3 ETH</p>
                </label>
              </div>
            </div>
            <div className="button d-flex justify-content-center">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </ThirdwebProvider>
    </>
  );
}

export default AskPage;
