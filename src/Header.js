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
        isVANClicked,
        setIsVANClicked,
    } = props;

    const handleResetClick = () => {
        console.log("Reset clicked.");
        setIsSmallClicked(false);
        setIsMediumClicked(false);
        setIsLargeClicked(false);
        setIsSUVClicked(false);
        setIsVANClicked(false);
    };

    return (
        <div className="header">
            <div className="header-name">Car type</div>
            {(isSmallClicked ||
                isMediumClicked ||
                isLargeClicked ||
                isSUVClicked ||
                isVANClicked) && (
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
