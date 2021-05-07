import React, { useState } from "react";
import MoreFilterCard from "./MoreFilterCard";

const MoreFilter = () => {
    const [isClicked, setIsClicked] = useState(false);

    const darkTheme = {
        background: "#2c3439",
        color: "#fff",
    };

    const lightTheme = {
        background: "#fff",
        color: "#192024",
    };

    const handleClick = (e) => {
        console.log("More filter was clicked.");
        setIsClicked((prevClicked) => !prevClicked);
    };

    return (
        <>
            <div
                className="more-filter-button-card"
                onClick={handleClick}
                style={isClicked ? darkTheme : lightTheme}
            >
                <div>More</div>
                <svg
                    className="svg-image"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                >
                    <path
                        d="M100 132.5c-3.873 0 .136 2.376-64.801-51.738l9.603-11.523L100 115.237l55.199-45.999l9.603 11.523C99.806 134.924 103.855 132.5 100 132.5z"
                        fill={isClicked ? "#fff" : "#192024"}
                    ></path>
                </svg>
            </div>
            {isClicked && (
                <div className="more-filter-cards">
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/04_premium.png?width=108&height=72"
                        }
                        carType={"Luxury"}
                        price={"$364"}
                    />
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/08_convertible_white.png?width=108&height=72"
                        }
                        carType={"Convertible"}
                        price={"$542"}
                    />
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/14_commercial_white.png?width=108&height=72"
                        }
                        carType={"Commercial"}
                        price={"$1,256"}
                    />
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/12_truck_white.png?width=108&height=72"
                        }
                        carType={"Pickup Truck"}
                        price={"$1,307"}
                    />
                </div>
            )}
        </>
    );
};

export default MoreFilter;
