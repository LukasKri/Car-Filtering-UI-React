import CarFilter from "./CarFilter";
import MoreFilter from "./MoreFilter";

function App() {
    return (
        <div className="App">
            <div className="header">Car type</div>
            <div className="car-filters">
                <CarFilter
                    imgAddress={
                        "https://content.r9cdn.net/rimg/carimages/generic/01_mini_white.png?width=108&height=72"
                    }
                    carType={"Small"}
                    price={"$233+"}
                    style={{ left: "39px" }}
                />
                <CarFilter
                    imgAddress={
                        "https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72"
                    }
                    carType={"Medium"}
                    price={"$279+"}
                    style={{ left: "135px" }}
                />
                <CarFilter
                    imgAddress={
                        "https://content.r9cdn.net/rimg/carimages/generic/03_standard_white.png?width=108&height=72"
                    }
                    carType={"Large"}
                    price={"$279+"}
                    style={{ left: "232px" }}
                />
                <CarFilter
                    imgAddress={
                        "https://content.r9cdn.net/rimg/carimages/generic/05_suv-small_white.png?width=108&height=72"
                    }
                    carType={"SUV"}
                    price={"$383+"}
                    style={{ left: "329px" }}
                />
                <MoreFilter />
            </div>
        </div>
    );
}

export default App;
