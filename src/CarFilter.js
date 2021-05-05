import React from "react";

const CarFilter = ({ imgAddress, carType }) => {
    // const [state, setstate] = useState(false);

    const handleClick = (e) => {
        console.log("Car filter was clicked.");
    };

    return (
        <div className="car-filter" onClick={handleClick}>
            <img className="car-img" src={imgAddress} alt={carType} />
            <div className="car-type">{carType}</div>
        </div>
    );
};

export default CarFilter;
