import "./MoreFilter.scss";

import DropdownSVG from "./DropdownSVG";
import MoreFilterCard from "./MoreFilterCard";
import ResetSVG from "./ResetSVG";
import SelectedOptionsCount from "./SelectedOptionsCount";

const MoreFilter = ({
  isLuxuryClicked,
  handleLuxuryClick,
  isConvertibleClicked,
  handleConvertibleClick,
  isCommercialClicked,
  handleCommercialClick,
  isPickupTruckClicked,
  handlePickupTruckClick,
  isMoreFilterClicked,
  handleMoreFilterClick,
  handleSVGResetClick,
  darkTheme,
  lightTheme,
}) => {
  return (
    <div>
      <div
        role="button"
        className="more-filter-button-card"
        onClick={handleMoreFilterClick}
        style={
          isMoreFilterClicked ||
          isLuxuryClicked ||
          isConvertibleClicked ||
          isCommercialClicked ||
          isPickupTruckClicked
            ? darkTheme
            : lightTheme
        }
      >
        <div className="more-filter-title">
          More
          {(isLuxuryClicked ||
            isConvertibleClicked ||
            isCommercialClicked ||
            isPickupTruckClicked) && (
            <SelectedOptionsCount
              isLuxuryClicked={isLuxuryClicked}
              isConvertibleClicked={isConvertibleClicked}
              isCommercialClicked={isCommercialClicked}
              isPickupTruckClicked={isPickupTruckClicked}
            />
          )}
        </div>
        {isLuxuryClicked ||
        isConvertibleClicked ||
        isCommercialClicked ||
        isPickupTruckClicked ? (
          <ResetSVG handleSVGResetClick={handleSVGResetClick} />
        ) : (
          <DropdownSVG isMoreFilterClicked={isMoreFilterClicked} />
        )}
      </div>
      {isMoreFilterClicked && (
        <div className="more-filter-cards-outer">
          <div className="more-filter-cards-inner">
            <MoreFilterCard
              imgAddress={
                "https://content.r9cdn.net/rimg/carimages/generic/04_premium.png?width=108&height=72"
              }
              carType={"Luxury"}
              price={"$364"}
              isChecked={isLuxuryClicked}
              handleCheckboxClick={handleLuxuryClick}
            />
            <MoreFilterCard
              imgAddress={
                "https://content.r9cdn.net/rimg/carimages/generic/08_convertible_white.png?width=108&height=72"
              }
              carType={"Convertible"}
              price={"$542"}
              isChecked={isConvertibleClicked}
              handleCheckboxClick={handleConvertibleClick}
            />
            <MoreFilterCard
              imgAddress={
                "https://content.r9cdn.net/rimg/carimages/generic/14_commercial_white.png?width=108&height=72"
              }
              carType={"Commercial"}
              price={"$1,256"}
              isChecked={isCommercialClicked}
              handleCheckboxClick={handleCommercialClick}
            />
            <MoreFilterCard
              imgAddress={
                "https://content.r9cdn.net/rimg/carimages/generic/12_truck_white.png?width=108&height=72"
              }
              carType={"Pickup Truck"}
              price={"$1,307"}
              isChecked={isPickupTruckClicked}
              handleCheckboxClick={handlePickupTruckClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreFilter;
