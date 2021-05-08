import { useState } from "react";
import CarFilterCard from "./components/CarFilterCard";
import Header from "./components/Header";
import MoreFilter from "./components/MoreFilter";

function App() {
    const [isSmallClicked, setIsSmallClicked] = useState(false);
    const [isMediumClicked, setIsMediumClicked] = useState(false);
    const [isLargeClicked, setIsLargeClicked] = useState(false);
    const [isSUVClicked, setIsSUVClicked] = useState(false);
    const [isVANClicked, setIsVANClicked] = useState(false);
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

    const handleVANClick = () => {
        setIsVANClicked((prevClicked) => !prevClicked);
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

    const handleMoreFilterClick = (e) => {
        setIsMoreFilterClicked((prevClicked) => !prevClicked);
    };

    return (
        <div className="App">
            <Header
                isSmallClicked={isSmallClicked}
                setIsSmallClicked={setIsSmallClicked}
                isMediumClicked={isMediumClicked}
                setIsMediumClicked={setIsMediumClicked}
                isLargeClicked={isLargeClicked}
                setIsLargeClicked={setIsLargeClicked}
                isSUVClicked={isSUVClicked}
                setIsSUVClicked={setIsSUVClicked}
                isVANClicked={isVANClicked}
                setIsVANClicked={setIsVANClicked}
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
                    carType={"Small"}
                    price={"$233+"}
                    style={{ left: "38px" }}
                    isClicked={isSmallClicked}
                    handleClick={handleSmallClick}
                />
                <CarFilterCard
                    imgAddress={
                        "https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72"
                    }
                    carType={"Medium"}
                    price={"$279+"}
                    style={{ left: "135px" }}
                    isClicked={isMediumClicked}
                    handleClick={handleMediumClick}
                />
                <CarFilterCard
                    imgAddress={
                        "https://content.r9cdn.net/rimg/carimages/generic/03_standard_white.png?width=108&height=72"
                    }
                    carType={"Large"}
                    price={"$279+"}
                    style={{ left: "232px" }}
                    isClicked={isLargeClicked}
                    handleClick={handleLargeClick}
                />
                <CarFilterCard
                    imgAddress={
                        "https://content.r9cdn.net/rimg/carimages/generic/05_suv-small_white.png?width=108&height=72"
                    }
                    carType={"SUV"}
                    price={"$383+"}
                    style={{ left: "329px" }}
                    isClicked={isSUVClicked}
                    handleClick={handleSUVClick}
                />
                <CarFilterCard
                    imgAddress={
                        "https://content.r9cdn.net/rimg/carimages/generic/11_van_white.png?width=108&height=72"
                    }
                    carType={"VAN"}
                    price={"$364+"}
                    style={{ left: "426px" }}
                    isClicked={isVANClicked}
                    handleClick={handleVANClick}
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
                />
            </div>
        </div>
    );
}

export default App;
