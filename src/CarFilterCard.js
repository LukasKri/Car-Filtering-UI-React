import React, { useState } from "react";

const CarFilterCard = (props) => {
    const { imgAddress, carType, price, style, isClicked, handleClick } = props;
    const [showPriceTooltip, setShowPriceTooltip] = useState(false);

    const darkTheme = {
        background: "#2c3439",
        color: "#fff",
    };

    const lightTheme = {
        background: "#fff",
        color: "#192024",
    };

    const handleMouseEnter = () => {
        setShowPriceTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowPriceTooltip(false);
    };

    return (
        <>
            {showPriceTooltip && (
                <div className="price-tooltip" style={style}>
                    <div className="price-tag">{price}</div>
                </div>
            )}
            <div
                className="car-filter-card"
                style={isClicked ? darkTheme : lightTheme}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className="car-img"
                    src={imgAddress}
                    alt={`${carType}-car-type-img`}
                />
                <div className="car-type">{carType}</div>
            </div>
        </>
    );
};

export default CarFilterCard;
