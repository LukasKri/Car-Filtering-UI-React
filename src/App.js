import "./App.css";
import CarButton from "./CarButton";

function App() {
    return (
        <div className="App">
            <h1>UI for cars category filter</h1>
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
            <button className="more">More</button>
        </div>
    );
}

export default App;
