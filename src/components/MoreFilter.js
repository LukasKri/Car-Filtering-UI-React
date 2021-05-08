import React, { useState } from "react";
import DropdownSVG from "./DropdownSVG";
import MoreFilterCard from "./MoreFilterCard";
import ResetSVG from "./ResetSVG";
import SelectedOptionsCount from "./SelectedOptionsCount";

const MoreFilter = (props) => {
    const {
        isLuxuryClicked,
        setIsLuxuryClicked,
        handleLuxuryClick,
        isConvertibleClicked,
        setIsConvertibleClicked,
        handleConvertibleClick,
        isCommercialClicked,
        setIsCommercialClicked,
        handleCommercialClick,
        isPickupTruckClicked,
        setIsPickupTruckClicked,
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
                <div className="more-filter-title">
                    More
                    <SelectedOptionsCount
                        isLuxuryClicked={isLuxuryClicked}
                        isConvertibleClicked={isConvertibleClicked}
                        isCommercialClicked={isCommercialClicked}
                        isPickupTruckClicked={isPickupTruckClicked}
                    />
                </div>
                {isLuxuryClicked ||
                isConvertibleClicked ||
                isCommercialClicked ||
                isPickupTruckClicked ? (
                    <ResetSVG
                        setIsLuxuryClicked={setIsLuxuryClicked}
                        setIsConvertibleClicked={setIsConvertibleClicked}
                        setIsCommercialClicked={setIsCommercialClicked}
                        setIsPickupTruckClicked={setIsPickupTruckClicked}
                    />
                ) : (
                    <DropdownSVG isMoreFilterClicked={isMoreFilterClicked} />
                )}
            </div>
            {isMoreFilterClicked && (
                <div className="more-filter-cards-outer">
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/04_premium.png?width=108&height=72"
                        }
                        carType={"Luxury"}
                        price={"$364"}
                        isChecked={isLuxuryClicked}
                        handleCheckboxClick={handleLuxuryClick}
                    />
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/08_convertible_white.png?width=108&height=72"
                        }
                        carType={"Convertible"}
                        price={"$542"}
                        isChecked={isConvertibleClicked}
                        handleCheckboxClick={handleConvertibleClick}
                    />
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/14_commercial_white.png?width=108&height=72"
                        }
                        carType={"Commercial"}
                        price={"$1,256"}
                        isChecked={isCommercialClicked}
                        handleCheckboxClick={handleCommercialClick}
                    />
                    <MoreFilterCard
                        imgAddress={
                            "https://content.r9cdn.net/rimg/carimages/generic/12_truck_white.png?width=108&height=72"
                        }
                        carType={"Pickup Truck"}
                        price={"$1,307"}
                        isChecked={isPickupTruckClicked}
                        handleCheckboxClick={handlePickupTruckClick}
                    />
                </div>
            )}
        </>
    );
};

export default MoreFilter;
