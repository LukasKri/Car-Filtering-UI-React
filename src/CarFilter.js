import React, { useState } from "react";

const CarFilter = ({ imgAddress, carType }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        console.log("Car filter was clicked.");
        setIsClicked((prevClicked) => !prevClicked);
    };

    return (
        <>
            <div
                className="car-filter"
                onClick={handleClick}
                style={
                    isClicked
                        ? { background: "#2c3439", color: "#fff" }
                        : { background: "#fff", color: "#192024" }
                }
            >
                <img className="car-img" src={imgAddress} alt={carType} />
                <div className="car-type">{carType}</div>
            </div>
        </>
    );
};

export default CarFilter;
