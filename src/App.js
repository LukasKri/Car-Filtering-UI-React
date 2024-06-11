import React, { useState, useRef, useEffect } from "react";

import { handleClick } from "./helpers/handleClick";
import "./App.scss";

import CarFilterCard from "./components/CarFilterCard";
import Header from "./components/Header";
import MoreFilter from "./components/MoreFilter";

function App() {
  const [isSmallClicked, setIsSmallClicked] = useState(false);
  const [isMediumClicked, setIsMediumClicked] = useState(false);
  const [isLargeClicked, setIsLargeClicked] = useState(false);
  const [isSUVClicked, setIsSUVClicked] = useState(false);
  const [isVanClicked, setIsVanClicked] = useState(false);
  const [isLuxuryClicked, setIsLuxuryClicked] = useState(false);
  const [isConvertibleClicked, setIsConvertibleClicked] = useState(false);
  const [isCommercialClicked, setIsCommercialClicked] = useState(false);
  const [isPickupTruckClicked, setIsPickupTruckClicked] = useState(false);
  const [isMoreFilterClicked, setIsMoreFilterClicked] = useState(false);

  const handleSmallClick = handleClick(setIsSmallClicked);
  const handleMediumClick = handleClick(setIsMediumClicked);
  const handleLargeClick = handleClick(setIsLargeClicked);
  const handleSUVClick = handleClick(setIsSUVClicked);
  const handleVanClick = handleClick(setIsVanClicked);
  const handleLuxuryClick = handleClick(setIsLuxuryClicked);
  const handleConvertibleClick = handleClick(setIsConvertibleClicked);
  const handleCommercialClick = handleClick(setIsCommercialClicked);
  const handlePickupTruckClick = handleClick(setIsPickupTruckClicked);
  const handleMoreFilterClick = handleClick(setIsMoreFilterClicked);

  const handleMainResetClick = () => {
    setIsSmallClicked(false);
    setIsMediumClicked(false);
    setIsLargeClicked(false);
    setIsSUVClicked(false);
    setIsVanClicked(false);
    setIsLuxuryClicked(false);
    setIsConvertibleClicked(false);
    setIsCommercialClicked(false);
    setIsPickupTruckClicked(false);
    setIsMoreFilterClicked(false);
  };

  const handleSVGResetClick = () => {
    setIsLuxuryClicked(false);
    setIsConvertibleClicked(false);
    setIsCommercialClicked(false);
    setIsPickupTruckClicked(false);
    setIsMoreFilterClicked(true);
  };

  const darkTheme = {
    background: "#363f45",
    borderColor: "#363f45",
    color: "#fff",
  };

  const lightTheme = {
    background: "#fff",
    color: "#192024",
  };

  const node = useRef();

  // useEffect hook closes the dropdown on outside click.
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (node.current && node.current.contains(e.target)) {
        // Inside click.
        return;
      }
      // Outside click.
      setIsMoreFilterClicked(false);
    };

    // Bind the event listener.
    if (isMoreFilterClicked) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      // Unbind the event listener on clean up.
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMoreFilterClicked, setIsMoreFilterClicked]);

  return (
    <div className="app">
      <div className="inside-app">
        <Header
          isSmallClicked={isSmallClicked}
          isMediumClicked={isMediumClicked}
          isLargeClicked={isLargeClicked}
          isSUVClicked={isSUVClicked}
          isVanClicked={isVanClicked}
          isLuxuryClicked={isLuxuryClicked}
          isConvertibleClicked={isConvertibleClicked}
          isCommercialClicked={isCommercialClicked}
          isPickupTruckClicked={isPickupTruckClicked}
          handleMainResetClick={handleMainResetClick}
        />
        <div ref={node} className="car-filter-cards">
          <CarFilterCard
            imgAddress={
              "https://content.r9cdn.net/rimg/carimages/generic/01_mini_white.png?width=108&height=72"
            }
            carType={"Small cars"}
            price={"$233+"}
            style={{ left: "43px" }}
            isClicked={isSmallClicked}
            handleClick={handleSmallClick}
            darkTheme={darkTheme}
            lightTheme={lightTheme}
          />
          <CarFilterCard
            imgAddress={
              "https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72"
            }
            carType={"Medium cars"}
            price={"$279+"}
            style={{ left: "152px" }}
            isClicked={isMediumClicked}
            handleClick={handleMediumClick}
            darkTheme={darkTheme}
            lightTheme={lightTheme}
          />
          <CarFilterCard
            imgAddress={
              "https://content.r9cdn.net/rimg/carimages/generic/03_standard_white.png?width=108&height=72"
            }
            carType={"Large cars"}
            price={"$279+"}
            style={{ left: "260px" }}
            isClicked={isLargeClicked}
            handleClick={handleLargeClick}
            darkTheme={darkTheme}
            lightTheme={lightTheme}
          />
          <CarFilterCard
            imgAddress={
              "https://content.r9cdn.net/rimg/carimages/generic/05_suv-small_white.png?width=108&height=72"
            }
            carType={"SUVs"}
            price={"$383+"}
            style={{ left: "368px" }}
            isClicked={isSUVClicked}
            handleClick={handleSUVClick}
            darkTheme={darkTheme}
            lightTheme={lightTheme}
          />
          <CarFilterCard
            imgAddress={
              "https://content.r9cdn.net/rimg/carimages/generic/11_van_white.png?width=108&height=72"
            }
            carType={"Vans"}
            price={"$364+"}
            style={{ left: "476px" }}
            isClicked={isVanClicked}
            handleClick={handleVanClick}
            darkTheme={darkTheme}
            lightTheme={lightTheme}
          />
          <MoreFilter
            isLuxuryClicked={isLuxuryClicked}
            handleLuxuryClick={handleLuxuryClick}
            isConvertibleClicked={isConvertibleClicked}
            handleConvertibleClick={handleConvertibleClick}
            isCommercialClicked={isCommercialClicked}
            handleCommercialClick={handleCommercialClick}
            isPickupTruckClicked={isPickupTruckClicked}
            handlePickupTruckClick={handlePickupTruckClick}
            isMoreFilterClicked={isMoreFilterClicked}
            handleMoreFilterClick={handleMoreFilterClick}
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

export default App;
