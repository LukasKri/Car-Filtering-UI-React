import React from "react";
import "./MoreFilter.scss";

import DropdownSVG from "./DropdownSVG";
import MoreFilterCard from "./MoreFilterCard";
import ResetSVG from "./ResetSVG";
import SelectedOptionsCount from "./SelectedOptionsCount";

const moreFilterCars = [
  {
    key: "luxury",
    type: "Luxury",
    price: "$364",
    img: "https://content.r9cdn.net/rimg/carimages/generic/04_premium.png?width=108&height=72",
  },
  {
    key: "convertible",
    type: "Convertible",
    price: "$542",
    img: "https://content.r9cdn.net/rimg/carimages/generic/08_convertible_white.png?width=108&height=72",
  },
  {
    key: "commercial",
    type: "Commercial",
    price: "$1,256",
    img: "https://content.r9cdn.net/rimg/carimages/generic/14_commercial_white.png?width=108&height=72",
  },
  {
    key: "pickupTruck",
    type: "Pickup Truck",
    price: "$1,307",
    img: "https://content.r9cdn.net/rimg/carimages/generic/12_truck_white.png?width=108&height=72",
  },
];

const MoreFilter = ({
  clickedCarTypes,
  handleCarTypeClick,
  handleSVGResetClick,
  darkTheme,
  lightTheme,
}) => {
  const { luxury, convertible, commercial, pickupTruck, moreFilter } =
    clickedCarTypes;

  return (
    <div>
      <div
        role="button"
        className="more-filter-button-card"
        onClick={() => handleCarTypeClick("moreFilter")}
        style={
          moreFilter || luxury || convertible || commercial || pickupTruck
            ? darkTheme
            : lightTheme
        }
      >
        <div className="more-filter-title">
          More
          {(luxury || convertible || commercial || pickupTruck) && (
            <SelectedOptionsCount
              clickedCarTypes={clickedCarTypes}
              moreFilterCars={moreFilterCars}
            />
          )}
        </div>
        {luxury || convertible || commercial || pickupTruck ? (
          <ResetSVG handleSVGResetClick={handleSVGResetClick} />
        ) : (
          <DropdownSVG isMoreFilterClicked={moreFilter} />
        )}
      </div>
      {moreFilter && (
        <div className="more-filter-cards-outer">
          <div className="more-filter-cards-inner">
            {moreFilterCars.map((car) => (
              <MoreFilterCard
                key={car.key}
                imgAddress={car.img}
                carType={car.type}
                price={car.price}
                isChecked={clickedCarTypes[car.key]}
                handleCheckboxClick={() => handleCarTypeClick(car.key)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreFilter;
