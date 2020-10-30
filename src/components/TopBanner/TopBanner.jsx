import React from 'react';

const TopBanner = ({tagline}) => {
    return (
<div className="bg-warning pb-4">
    <div className="row ml-3">
        <h3 className="mt-0 bold">OnlyDungeons</h3>
    </div>
    <div className="container pt-3 pb-2 border border-dark">
        <div className="row">
            <div className="col-12 text-center mt-3">
            <h3>{tagline}</h3>
            </div>
        </div>
        
         </div>
</div>
    );
};

export default TopBanner;