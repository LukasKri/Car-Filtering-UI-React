import React from "react";
import "./DropdownSVG.scss";

const DropdownSVG = (props) => {
    const { isMoreFilterClicked } = props;

    const rotate = {
        transform: "rotate(180deg)",
    };

    const notRotate = {
        transform: "rotate(0deg)",
    };

    return (
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
    );
};

export default DropdownSVG;
