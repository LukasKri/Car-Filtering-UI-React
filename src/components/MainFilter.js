import React, { useState, useRef } from "react";

import { useClickOutside } from "../customHooks/useClickOutside";
import "./MainFilter.scss";

import CarFilterCard from "./CarFilterCard";
import Header from "./Header";
import MoreFilter from "./MoreFilter";

const darkTheme = {
  background: "#363f45",
  borderColor: "#363f45",
  color: "#fff",
};

const lightTheme = {
  background: "#fff",
  color: "#192024",
};

const carTypes = [
  {
    key: "small",
    type: "Small cars",
    price: "$233+",
    img: "https://content.r9cdn.net/rimg/carimages/generic/01_mini_white.png?width=108&height=72",
    style: { left: "43px" },
  },
  {
    key: "medium",
    type: "Medium cars",
    price: "$279+",
    img: "https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72",
    style: { left: "152px" },
  },
  {
    key: "large",
    type: "Large cars",
    price: "$279+",
    img: "https://content.r9cdn.net/rimg/carimages/generic/03_standard_white.png?width=108&height=72",
    style: { left: "260px" },
  },
  {
    key: "suv",
    type: "SUVs",
    price: "$383+",
    img: "https://content.r9cdn.net/rimg/carimages/generic/05_suv-small_white.png?width=108&height=72",
    style: { left: "368px" },
  },
  {
    key: "van",
    type: "Vans",
    price: "$364+",
    img: "https://content.r9cdn.net/rimg/carimages/generic/11_van_white.png?width=108&height=72",
    style: { left: "476px" },
  },
];

function MainFilter() {
  const [clickedCarTypes, setClickedCarTypes] = useState({
    small: false,
    medium: false,
    large: false,
    suv: false,
    van: false,
    luxury: false,
    convertible: false,
    commercial: false,
    pickupTruck: false,
    moreFilter: false,
  });

  const handleCarTypeClick = (key) => {
    setClickedCarTypes((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleMainResetClick = () => {
    setClickedCarTypes((prevState) => ({
      ...prevState,
      small: false,
      medium: false,
      large: false,
      suv: false,
      van: false,
      luxury: false,
      convertible: false,
      commercial: false,
      pickupTruck: false,
      moreFilter: false,
    }));
  };

  const handleSVGResetClick = () => {
    setClickedCarTypes((prevState) => ({
      ...prevState,
      luxury: false,
      convertible: false,
      commercial: false,
      pickupTruck: false,
      moreFilter: true,
    }));
  };

  const node = useRef();
  useClickOutside(node, () =>
    setClickedCarTypes((prevState) => ({ ...prevState, moreFilter: false }))
  );

  return (
    <div className="app">
      <div className="inside-app">
        <Header
          clickedCarTypes={clickedCarTypes}
          handleMainResetClick={handleMainResetClick}
        />
        <div ref={node} className="car-filter-cards">
          {carTypes.map((car) => (
            <CarFilterCard
              key={car.key}
              imgAddress={car.img}
              carType={car.type}
              price={car.price}
              style={car.style}
              isClicked={clickedCarTypes[car.key]}
              handleClick={() => handleCarTypeClick(car.key)}
              darkTheme={darkTheme}
              lightTheme={lightTheme}
            />
          ))}
          <MoreFilter
            clickedCarTypes={clickedCarTypes}
            handleCarTypeClick={handleCarTypeClick}
            handleSVGResetClick={handleSVGResetClick}
            darkTheme={darkTheme}
            lightTheme={lightTheme}
          />
        </div>
      </div>
      {/* This div below is just for styling purposes. */}
      <div className="outside-app"></div>
    </div>
  );
}

export default MainFilter;
