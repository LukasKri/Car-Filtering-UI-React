import React, { useState } from "react";

const MoreFilter = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = (e) => {
        console.log("More filter was clicked.");
        setIsClicked((prevClicked) => !prevClicked);
    };

    return (
        <>
            <div
                className="more-filter"
                onClick={handleClick}
                style={
                    isClicked
                        ? { background: "#2c3439", color: "#fff" }
                        : { background: "#fff", color: "#192024" }
                }
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
        </>
    );
};

export default MoreFilter;
