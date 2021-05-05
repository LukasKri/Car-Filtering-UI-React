import React from "react";

const CarButton = ({ imgAddress, carType }) => {
    // const [state, setstate] = useState(false);

    const handleClick = (e) => {
        console.log("This div was clicked.");
    };

    return (
        <div className="car-filter" onClick={handleClick}>
            <img className="car-img" src={imgAddress} alt={carType} />
            <div className="car-type">{carType}</div>
        </div>
    );
};

export default CarButton;
