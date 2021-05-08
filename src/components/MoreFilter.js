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

    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsMoreFilterClicked(false);
                }
            }

            // Bind the event listener
            document.addEventListener("click", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("click", handleClickOutside);
            };
        }, [ref]);
    };

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <div ref={wrapperRef}>
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
