import React from "react";
import "./SelectedOptionsCount.scss";

const SelectedOptionsCount = ({
  isLuxuryClicked,
  isConvertibleClicked,
  isCommercialClicked,
  isPickupTruckClicked,
}) => {
  if (
    isLuxuryClicked &&
    isConvertibleClicked &&
    isCommercialClicked &&
    isPickupTruckClicked
  ) {
    return <div className="selected-details">4 selected</div>;
  } else if (
    (isLuxuryClicked && isConvertibleClicked && isCommercialClicked) ||
    (isLuxuryClicked && isConvertibleClicked && isPickupTruckClicked) ||
    (isLuxuryClicked && isCommercialClicked && isPickupTruckClicked) ||
    (isConvertibleClicked && isCommercialClicked && isPickupTruckClicked)
  ) {
    return <div className="selected-details">3 selected</div>;
  } else if (
    (isLuxuryClicked && isConvertibleClicked) ||
    (isLuxuryClicked && isCommercialClicked) ||
    (isLuxuryClicked && isPickupTruckClicked) ||
    (isConvertibleClicked && isCommercialClicked) ||
    (isConvertibleClicked && isPickupTruckClicked) ||
    (isCommercialClicked && isPickupTruckClicked)
  ) {
    return <div className="selected-details">2 selected</div>;
  } else if (isLuxuryClicked) {
    return <div className="selected-details">Luxury</div>;
  } else if (isConvertibleClicked) {
    return <div className="selected-details">Convertible</div>;
  } else if (isCommercialClicked) {
    return <div className="selected-details">Commercial</div>;
  } else if (isPickupTruckClicked) {
    return <div className="selected-details">Pickup Truck</div>;
  }
};

export default SelectedOptionsCount;
