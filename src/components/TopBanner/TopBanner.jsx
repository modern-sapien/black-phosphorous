import React from "react";

const TopBanner = ({ tagline }) => {
  return (
    <div className="bg-danger pb-4">
      <div className="row ml-3">
        <h4 className="mt-0 bold">OnlyDungeons</h4>
      </div>
      <div className="container pt-2 mt-4 pb-2 border border-dark">
        <div className="row">
          <div className="col-12 text-center mt-2">
            <h4>{tagline}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
