import CarButton from "./CarButton";

function App() {
    return (
        <div className="App">
            <div className="header">Car type</div>
            <div className="car-filters">
                <CarButton
                    imgAddress="https://content.r9cdn.net/rimg/carimages/generic/01_mini_white.png?width=108&height=72"
                    carType="Small"
                />
                <CarButton
                    imgAddress="https://content.r9cdn.net/rimg/carimages/generic/02_economy_white.png?width=108&height=72"
                    carType="Medium"
                />
                <CarButton
                    imgAddress="https://content.r9cdn.net/rimg/carimages/generic/03_standard_white.png?width=108&height=72"
                    carType="Large"
                />
                <CarButton
                    imgAddress="https://content.r9cdn.net/rimg/carimages/generic/05_suv-small_white.png?width=108&height=72"
                    carType="SUV"
                />
                <div className="car-filter">More</div>
            </div>
        </div>
    );
}

export default App;
