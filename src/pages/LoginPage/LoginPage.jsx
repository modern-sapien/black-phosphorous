import React from "react";
import { Link } from "react-router-dom";
import TopBanner from "../../components/TopBanner/TopBanner.jsx";
import InfoComponent from "../../components/InfoComponent/InfoComponent.jsx";

const tagline = "Welcome Home"

const LoginPage = () => {
  return (
    <>
    <TopBanner tagline={tagline} />
    <div className="row mt-3">
      <div className="col-12">

    <div className="row">
      <div className="col-1"></div>

      <div className="col-5 ml-2">
        <form className="container">
          <div className="row mt-2">
            <h4>Username</h4>
          </div>
          <div className="row">
            <input
              className="border border-dark"
              type="text"
              placeholder="username"
            ></input>
          </div>

          <div className="row mt-2">
            <h4>Password</h4>
          </div>
          <div className="row">
            <input
              className="border border-dark"
              type="password"
              placeholder="password"
            ></input>
          </div>
          <div className="row mt-3">
            <Link to="newuser">
              <div className="btn text-light px-4 shadow bg-dark">
                New Account
              </div>
            </Link>
          </div>
          <div className="row mt-3">
            <div className="btn text-light px-5 shadow bg-dark">Login</div>
          </div>
        </form>
      </div>

      <div className="col-5">
        <InfoComponent />
      </div>
    </div>
    
    
      </div>
    </div>
    </>

  );
};

export default LoginPage;
