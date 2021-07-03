import { useState } from "react";
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

    const handleSmallClick = () => {
        setIsSmallClicked((prevClicked) => !prevClicked);
    };

    const handleMediumClick = () => {
        setIsMediumClicked((prevClicked) => !prevClicked);
    };

    const handleLargeClick = () => {
        setIsLargeClicked((prevClicked) => !prevClicked);
    };

    const handleSUVClick = () => {
        setIsSUVClicked((prevClicked) => !prevClicked);
    };

    const handleVanClick = () => {
        setIsVanClicked((prevClicked) => !prevClicked);
    };

    const handleLuxuryClick = () => {
        setIsLuxuryClicked((prevClicked) => !prevClicked);
    };

    const handleConvertibleClick = () => {
        setIsConvertibleClicked((prevClicked) => !prevClicked);
    };

    const handleCommercialClick = () => {
        setIsCommercialClicked((prevClicked) => !prevClicked);
    };

    const handlePickupTruckClick = () => {
        setIsPickupTruckClicked((prevClicked) => !prevClicked);
    };

    const handleMoreFilterClick = () => {
        setIsMoreFilterClicked((prevClicked) => !prevClicked);
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

    return (
        <div className="app">
            <div className="inside-app">
                <Header
                    isSmallClicked={isSmallClicked}
                    setIsSmallClicked={setIsSmallClicked}
                    isMediumClicked={isMediumClicked}
                    setIsMediumClicked={setIsMediumClicked}
                    isLargeClicked={isLargeClicked}
                    setIsLargeClicked={setIsLargeClicked}
                    isSUVClicked={isSUVClicked}
                    setIsSUVClicked={setIsSUVClicked}
                    isVanClicked={isVanClicked}
                    setIsVanClicked={setIsVanClicked}
                    isLuxuryClicked={isLuxuryClicked}
                    setIsLuxuryClicked={setIsLuxuryClicked}
                    isConvertibleClicked={isConvertibleClicked}
                    setIsConvertibleClicked={setIsConvertibleClicked}
                    isCommercialClicked={isCommercialClicked}
                    setIsCommercialClicked={setIsCommercialClicked}
                    isPickupTruckClicked={isPickupTruckClicked}
                    setIsPickupTruckClicked={setIsPickupTruckClicked}
                    setIsMoreFilterClicked={setIsMoreFilterClicked}
                />
                <div className="car-filter-cards">
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
                        setIsLuxuryClicked={setIsLuxuryClicked}
                        handleLuxuryClick={handleLuxuryClick}
                        isConvertibleClicked={isConvertibleClicked}
                        setIsConvertibleClicked={setIsConvertibleClicked}
                        handleConvertibleClick={handleConvertibleClick}
                        isCommercialClicked={isCommercialClicked}
                        setIsCommercialClicked={setIsCommercialClicked}
                        handleCommercialClick={handleCommercialClick}
                        isPickupTruckClicked={isPickupTruckClicked}
                        setIsPickupTruckClicked={setIsPickupTruckClicked}
                        handlePickupTruckClick={handlePickupTruckClick}
                        isMoreFilterClicked={isMoreFilterClicked}
                        setIsMoreFilterClicked={setIsMoreFilterClicked}
                        handleMoreFilterClick={handleMoreFilterClick}
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
