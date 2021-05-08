import { useState } from "react";
import CarFilterCard from "./CarFilterCard";
import Header from "./Header";
import MoreFilter from "./MoreFilter";

function App() {
    const [isSmallClicked, setIsSmallClicked] = useState(false);
    const [isMediumClicked, setIsMediumClicked] = useState(false);
    const [isLargeClicked, setIsLargeClicked] = useState(false);
    const [isSUVClicked, setIsSUVClicked] = useState(false);
    const [isVANClicked, setIsVANClicked] = useState(false);

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

    return (
        <div className="App">
            <Header isSmallClicked={isSmallClicked} />
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
                <MoreFilter />
            </div>
        </div>
    );
}

export default App;
