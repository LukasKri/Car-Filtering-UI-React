import React from "react";

const Header = () => {
    const handleResetClick = () => {
        console.log("Reset clicked.");
    };

    return (
        <div className="header">
            <div className="header-name">Car type</div>
            <div
                role="button"
                className="header-reset"
                onClick={handleResetClick}
            >
                Reset
            </div>
        </div>
    );
};

export default Header;
