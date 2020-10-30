import React from "react";
import { Link } from "react-router-dom";
import InfoComponent from "../../components/InfoComponent/InfoComponent.jsx";
import TopBanner from "../../components/TopBanner/TopBanner.jsx";

const tagline = "Your Journey Begins Here"

const NewUserForm = () => {
  return (
    <>
    <TopBanner tagline={tagline} />
    <div className="row mt-3">
      <div className="col-12">


    <div className="row">
      <div className="col-1"> </div>

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
              <h4>Email</h4>
            </div>
            <div className="row">
              <input
                className="border border-dark"
                type="email"
                placeholder="email"
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
            <div className="row mt-2">
              <h4>Confirm Password</h4>
            </div>
            <div className="row">
              <input
                className="border border-dark"
                type="password"
                placeholder="password"
              ></input>
            </div>
            <div className="row mt-3">
              <div className="btn text-light px-4 shadow bg-dark">Submit</div>
            </div>
            <div className="row mt-3">
              <Link to="/welcome">
                <div className="btn text-light px-5 shadow bg-dark">Cancel</div>{" "}
              </Link>
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

export default NewUserForm;
