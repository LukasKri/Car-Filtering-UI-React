import React, { useState } from "react";
import MoreFilterCard from "./MoreFilterCard";
import SelectedOptionsCount from "./SelectedOptionsCount";

const MoreFilter = (props) => {
    const {
        isLuxuryChecked,
        handleLuxuryClick,
        isConvertibleChecked,
        handleConvertibleClick,
        isCommercialChecked,
        handleCommercialClick,
        isPickupTruckChecked,
        handlePickupTruckClick,
    } = props;
    const [isMoreFilterClicked, setIsMoreFilterClicked] = useState(false);

    const darkTheme = {
        background: "#2c3439",
        color: "#fff",
    };

    const lightTheme = {
        background: "#fff",
        color: "#192024",
    };

    const rotate = {
        transform: "rotate(180deg)",
    };

    const notRotate = {
        transform: "rotate(0deg)",
    };

    const handleMoreFilterClick = (e) => {
        console.log("More filter was clicked.");
        setIsMoreFilterClicked((prevClicked) => !prevClicked);
    };

    return (
        <>
            <div
                className="more-filter-button-card"
                onClick={handleMoreFilterClick}
                style={isMoreFilterClicked ? darkTheme : lightTheme}
            >
                <div>
                    More
                    <SelectedOptionsCount
                        isLuxuryChecked={isLuxuryChecked}
                        isConvertibleChecked={isConvertibleChecked}
                        isCommercialChecked={isCommercialChecked}
                        isPickupTruckChecked={isPickupTruckChecked}
                    />
                </div>
                <svg
                    className="svg-image"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    style={isMoreFilterClicked ? rotate : notRotate}
                >
                    <path
                        d="M100 132.5c-3.873 0 .136 2.376-64.801-51.738l9.603-11.523L100 115.237l55.199-45.999l9.603 11.523C99.806 134.924 103.855 132.5 100 132.5z"
                        fill={isMoreFilterClicked ? "#fff" : "#192024"}
                    ></path>
                </svg>
            </div>
            {isMoreFilterClicked && (
                <div className="more-filter-cards-outer">
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/04_premium.png?width=108&height=72"
                        }
                        carType={"Luxury"}
                        price={"$364"}
                        isChecked={isLuxuryChecked}
                        handleCheckboxClick={handleLuxuryClick}
                    />
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/08_convertible_white.png?width=108&height=72"
                        }
                        carType={"Convertible"}
                        price={"$542"}
                        isChecked={isConvertibleChecked}
                        handleCheckboxClick={handleConvertibleClick}
                    />
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/14_commercial_white.png?width=108&height=72"
                        }
                        carType={"Commercial"}
                        price={"$1,256"}
                        isChecked={isCommercialChecked}
                        handleCheckboxClick={handleCommercialClick}
                    />
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/12_truck_white.png?width=108&height=72"
                        }
                        carType={"Pickup Truck"}
                        price={"$1,307"}
                        isChecked={isPickupTruckChecked}
                        handleCheckboxClick={handlePickupTruckClick}
                    />
                </div>
            )}
        </>
    );
};

export default MoreFilter;
