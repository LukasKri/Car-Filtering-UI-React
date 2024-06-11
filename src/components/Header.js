import React from "react";

import "./Header.scss";

const Header = (props) => {
    const {
        isSmallClicked,
        isMediumClicked,
        isLargeClicked,
        isSUVClicked,
        isVanClicked,
        isLuxuryClicked,
        isConvertibleClicked,
        isCommercialClicked,
        isPickupTruckClicked,
        handleMainResetClick,
    } = props;

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
                    onClick={handleMainResetClick}
                >
                    Reset
                </div>
            )}
        </div>
    );
};

export default Header;
