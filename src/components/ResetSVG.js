import React from "react";
import "./ResetSVG.scss";

const ResetSVG = (props) => {
    const {
        setIsLuxuryClicked,
        setIsConvertibleClicked,
        setIsCommercialClicked,
        setIsPickupTruckClicked,
        setIsMoreFilterClicked,
    } = props;

    const handleResetClick = () => {
        setIsLuxuryClicked(false);
        setIsConvertibleClicked(false);
        setIsCommercialClicked(false);
        setIsPickupTruckClicked(false);
        setIsMoreFilterClicked(true);
    };

    return (
        <div role="button" onClick={handleResetClick}>
            <svg
                className="svg-image"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
            >
                <path
                    d="M180 37.918L162.082 20L100 82.208L37.918 20L20 37.918L82.208 100L20 162.082L37.918 180L100 117.792L162.082 180L180 162.082L117.792 100z"
                    fill={"#fff"}
                ></path>
            </svg>
        </div>
    );
};

export default ResetSVG;
