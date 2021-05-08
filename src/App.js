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
    const [isLuxuryChecked, setIsLuxuryChecked] = useState(false);
    const [isConvertibleChecked, setIsConvertibleChecked] = useState(false);
    const [isCommercialChecked, setIsCommercialChecked] = useState(false);
    const [isPickupTruckChecked, setIsPickupTruckChecked] = useState(false);

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
        setIsLuxuryChecked((prevClicked) => !prevClicked);
    };

    const handleConvertibleClick = () => {
        // console.log("Convertible checkbox clicked");
        setIsConvertibleChecked((prevClicked) => !prevClicked);
    };

    const handleCommercialClick = () => {
        // console.log("Commercial checkbox clicked");
        setIsCommercialChecked((prevClicked) => !prevClicked);
    };

    const handlePickupTruckClick = () => {
        // console.log("Pickup Truck checkbox clicked");
        setIsPickupTruckChecked((prevClicked) => !prevClicked);
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
                isLuxuryChecked={isLuxuryChecked}
                setIsLuxuryChecked={setIsLuxuryChecked}
                isConvertibleChecked={isConvertibleChecked}
                setIsConvertibleChecked={setIsConvertibleChecked}
                isCommercialChecked={isCommercialChecked}
                setIsCommercialChecked={setIsCommercialChecked}
                isPickupTruckChecked={isPickupTruckChecked}
                setIsPickupTruckChecked={setIsPickupTruckChecked}
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
                    isLuxuryChecked={isLuxuryChecked}
                    handleLuxuryClick={handleLuxuryClick}
                    isConvertibleChecked={isConvertibleChecked}
                    handleConvertibleClick={handleConvertibleClick}
                    isCommercialChecked={isCommercialChecked}
                    handleCommercialClick={handleCommercialClick}
                    isPickupTruckChecked={isPickupTruckChecked}
                    handlePickupTruckClick={handlePickupTruckClick}
                />
            </div>
        </div>
    );
}

export default App;
