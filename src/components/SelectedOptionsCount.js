import React from "react";
import "./SelectedOptionsCount.scss";

const SelectedOptionsCount = ({ clickedCarTypes, moreFilterCars }) => {
  const options = moreFilterCars.map((car) => {
    return { name: car.type, clicked: clickedCarTypes[car.key] };
  });

  const selectedOptions = options.filter((option) => option.clicked);
  const count = selectedOptions.length;

  if (count > 1) {
    return <div className="selected-details">{count} selected</div>;
  } else if (count === 1) {
    return <div className="selected-details">{selectedOptions[0].name}</div>;
  }
};

export default SelectedOptionsCount;
