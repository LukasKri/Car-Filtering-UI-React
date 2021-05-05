import React from "react";

const CarButton = ({ imgAddress, carType }) => {
    return (
        <div className="car-button">
            <img src={imgAddress} alt="small-car" />
            <div className="car-type">{carType}</div>
        </div>
    );
};

export default CarButton;
