import React, { useState } from "react";
import "./CarFilterCard.scss";

const CarFilterCard = (props) => {
    const {
        imgAddress,
        carType,
        price,
        style,
        isClicked,
        handleClick,
        darkTheme,
        lightTheme,
    } = props;

    const [showPriceTooltip, setShowPriceTooltip] = useState(false);

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
                <div className="car-type">{carType}</div>
                <img
                    className="car-img"
                    src={imgAddress}
                    alt={`${carType}-car-type-img`}
                />
            </div>
        </>
    );
};

export default CarFilterCard;
