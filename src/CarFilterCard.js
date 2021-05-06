import React, { useState } from "react";

const CarFilterCard = ({ imgAddress, carType, price, style }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [showPriceTooltip, setShowPriceTooltip] = useState("notdisplayed");

    const darkTheme = {
        background: "#2c3439",
        color: "#fff",
    };

    const lightTheme = {
        background: "#fff",
        color: "#192024",
    };

    const handleClick = (e) => {
        setIsClicked((prevClicked) => !prevClicked);
    };

    const handleMouseEnter = () => {
        setShowPriceTooltip("displayed");
    };

    const handleMouseLeave = () => {
        setShowPriceTooltip("notdisplayed");
    };

    return (
        <>
            <div className={showPriceTooltip} style={style}>
                <div className="price-tooltip-text">{price}</div>
            </div>
            <div
                className="car-filter"
                onClick={handleClick}
                style={isClicked ? darkTheme : lightTheme}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img className="car-img" src={imgAddress} alt={carType} />
                <div className="car-type">{carType}</div>
            </div>
        </>
    );
};

export default CarFilterCard;
