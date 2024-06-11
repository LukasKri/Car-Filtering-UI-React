import React from "react";
import "./SelectedOptionsCount.scss";

const SelectedOptionsCount = ({
  isLuxuryClicked,
  isConvertibleClicked,
  isCommercialClicked,
  isPickupTruckClicked,
}) => {
  const options = [
    { name: "Luxury", clicked: isLuxuryClicked },
    { name: "Convertible", clicked: isConvertibleClicked },
    { name: "Commercial", clicked: isCommercialClicked },
    { name: "Pickup Truck", clicked: isPickupTruckClicked },
  ];

  const selectedOptions = options.filter((option) => option.clicked);
  const count = selectedOptions.length;

  if (count > 1) {
    return <div className="selected-details">{count} selected</div>;
  } else if (count === 1) {
    return <div className="selected-details">{selectedOptions[0].name}</div>;
  }
};

export default SelectedOptionsCount;
