import React from "react";
import "./MoreFilterCard.scss";

const MoreFilterCard = ({
  imgAddress,
  carType,
  price,
  isChecked,
  handleCheckboxClick,
}) => {
  return (
    <>
      <div className="m-f-content" role="dialog" onClick={handleCheckboxClick}>
        <div className="m-f-inner">
          <div className="m-f-card">
            <input
              className="m-f-input"
              type="checkbox"
              checked={isChecked}
              readOnly
            />
            <div className="m-f-img-car-type">
              <div className="m-f-car-img">
                <img
                  className="car-img"
                  src={imgAddress}
                  alt={`${carType}-car-type-img`}
                />
              </div>
              <div className="m-f-car-type">{carType}</div>
            </div>
            <div className="m-f-price-box">
              <div className="m-f-price-tag">{price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreFilterCard;
