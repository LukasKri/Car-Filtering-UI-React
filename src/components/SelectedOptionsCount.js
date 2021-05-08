import React from "react";

const SelectedOptionsCount = (props) => {
    const {
        isLuxuryChecked,
        isConvertibleChecked,
        isCommercialChecked,
        isPickupTruckChecked,
    } = props;

    if (
        isLuxuryChecked &&
        isConvertibleChecked &&
        isCommercialChecked &&
        isPickupTruckChecked
    ) {
        return <div className="selected-details">4 selected</div>;
    } else if (
        (isLuxuryChecked && isConvertibleChecked && isCommercialChecked) ||
        (isLuxuryChecked && isConvertibleChecked && isPickupTruckChecked) ||
        (isLuxuryChecked && isCommercialChecked && isPickupTruckChecked) ||
        (isConvertibleChecked && isCommercialChecked && isPickupTruckChecked)
    ) {
        return <div className="selected-details">3 selected</div>;
    } else if (
        (isLuxuryChecked && isConvertibleChecked) ||
        (isLuxuryChecked && isCommercialChecked) ||
        (isLuxuryChecked && isPickupTruckChecked) ||
        (isConvertibleChecked && isCommercialChecked) ||
        (isConvertibleChecked && isPickupTruckChecked) ||
        (isCommercialChecked && isPickupTruckChecked)
    ) {
        return <div className="selected-details">2 selected</div>;
    } else if (isLuxuryChecked) {
        return <div className="selected-details">Luxury</div>;
    } else if (isConvertibleChecked) {
        return <div className="selected-details">Convertible</div>;
    } else if (isCommercialChecked) {
        return <div className="selected-details">Commercial</div>;
    } else if (isPickupTruckChecked) {
        return <div className="selected-details">Pickup Truck</div>;
    } else {
        return null;
    }
};

export default SelectedOptionsCount;
