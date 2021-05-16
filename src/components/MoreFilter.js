import React, { useRef, useEffect } from "react";
import "./MoreFilter.scss";

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
        isMoreFilterClicked,
        setIsMoreFilterClicked,
        handleMoreFilterClick,
        darkTheme,
        lightTheme,
    } = props;

    const node = useRef();

    // useEffect hook closes the dropdown on outside click.
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (node.current && node.current.contains(e.target)) {
                // Inside click.
                return;
            }
            // Outside click.
            setIsMoreFilterClicked(false);
        };

        // Bind the event listener.
        if (isMoreFilterClicked) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
        return () => {
            // Unbind the event listener on clean up.
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isMoreFilterClicked, setIsMoreFilterClicked]);

    return (
        <div ref={node}>
            <div
                role="button"
                className="more-filter-button-card"
                onClick={handleMoreFilterClick}
                style={
                    isMoreFilterClicked ||
                    isLuxuryClicked ||
                    isConvertibleClicked ||
                    isCommercialClicked ||
                    isPickupTruckClicked
                        ? darkTheme
                        : lightTheme
                }
            >
                <div className="more-filter-title">
                    More
                    {(isLuxuryClicked ||
                        isConvertibleClicked ||
                        isCommercialClicked ||
                        isPickupTruckClicked) && (
                        <SelectedOptionsCount
                            isLuxuryClicked={isLuxuryClicked}
                            isConvertibleClicked={isConvertibleClicked}
                            isCommercialClicked={isCommercialClicked}
                            isPickupTruckClicked={isPickupTruckClicked}
                        />
                    )}
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
                        setIsMoreFilterClicked={setIsMoreFilterClicked}
                    />
                ) : (
                    <DropdownSVG isMoreFilterClicked={isMoreFilterClicked} />
                )}
            </div>
            {isMoreFilterClicked && (
                <div className="more-filter-cards-outer">
                    <div className="more-filter-cards-inner">
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
                </div>
            )}
        </div>
    );
};

export default MoreFilter;
