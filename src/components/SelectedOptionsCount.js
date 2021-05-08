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
        return <div>4 Selected</div>;
    } else if (
        (isLuxuryChecked && isConvertibleChecked && isCommercialChecked) ||
        (isLuxuryChecked && isConvertibleChecked && isPickupTruckChecked) ||
        (isLuxuryChecked && isCommercialChecked && isPickupTruckChecked) ||
        (isConvertibleChecked && isCommercialChecked && isPickupTruckChecked)
    ) {
        return <div>3 Selected</div>;
    } else if (
        (isLuxuryChecked && isConvertibleChecked) ||
        (isLuxuryChecked && isCommercialChecked) ||
        (isLuxuryChecked && isPickupTruckChecked) ||
        (isConvertibleChecked && isCommercialChecked) ||
        (isConvertibleChecked && isPickupTruckChecked) ||
        (isCommercialChecked && isPickupTruckChecked)
    ) {
        return <div>2 Selected</div>;
    } else if (isLuxuryChecked) {
        return <div>Luxury</div>;
    } else if (isConvertibleChecked) {
        return <div>Convertible</div>;
    } else if (isCommercialChecked) {
        return <div>Commercial</div>;
    } else if (isPickupTruckChecked) {
        return <div>Pickup Truck</div>;
    } else {
        return null;
    }
};

export default SelectedOptionsCount;
