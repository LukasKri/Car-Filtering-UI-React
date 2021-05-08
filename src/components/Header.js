import React from "react";

const Header = (props) => {
    const {
        isSmallClicked,
        setIsSmallClicked,
        isMediumClicked,
        setIsMediumClicked,
        isLargeClicked,
        setIsLargeClicked,
        isSUVClicked,
        setIsSUVClicked,
        isVanClicked,
        setIsVanClicked,
        isLuxuryClicked,
        setIsLuxuryClicked,
        isConvertibleClicked,
        setIsConvertibleClicked,
        isCommercialClicked,
        setIsCommercialClicked,
        isPickupTruckClicked,
        setIsPickupTruckClicked,
        setIsMoreFilterClicked,
    } = props;

    const handleResetClick = () => {
        setIsSmallClicked(false);
        setIsMediumClicked(false);
        setIsLargeClicked(false);
        setIsSUVClicked(false);
        setIsVanClicked(false);
        setIsLuxuryClicked(false);
        setIsConvertibleClicked(false);
        setIsCommercialClicked(false);
        setIsPickupTruckClicked(false);
        setIsMoreFilterClicked(false);
    };

    return (
        <div className="header">
            <div className="header-name">Car type</div>
            {(isSmallClicked ||
                isMediumClicked ||
                isLargeClicked ||
                isSUVClicked ||
                isVanClicked ||
                isLuxuryClicked ||
                isConvertibleClicked ||
                isCommercialClicked ||
                isPickupTruckClicked) && (
                <div
                    role="button"
                    className="header-reset"
                    onClick={handleResetClick}
                >
                    Reset
                </div>
            )}
        </div>
    );
};

export default Header;
