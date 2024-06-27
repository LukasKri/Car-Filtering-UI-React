import React from "react";
import "./Header.scss";

const Header = ({ clickedCarTypes, handleMainResetClick }) => {
  const isAnyCarTypeClicked = Object.values(clickedCarTypes).some(Boolean);

  return (
    <div className="header">
      <div className="header-name">Car type</div>
      {isAnyCarTypeClicked && (
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
