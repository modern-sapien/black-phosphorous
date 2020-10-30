import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopBanner from "../../components/TopBanner/TopBanner.jsx";

const tagline = "A question that must be answered";

class DmOrPcPage extends Component {
  render() {
    return (
      <>
        <TopBanner tagline={tagline} />
        <div className="container fluid-container">
        <div className="row my-5"></div>

          <div className="row my-5">
            <div className="col-12">
              <h2 className="text-center btn-danger border border-dark shadow py-2">Dungeon Master</h2>
            </div>
          </div>
          <div className="row my-5"></div>

          <div className="row mt-5">
            <div className="col-12">
              <h2 className="text-center btn-danger border border-dark shadow py-2">Player Character</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DmOrPcPage;
