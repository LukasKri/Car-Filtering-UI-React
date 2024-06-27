/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MainFilter from "./MainFilter";

jest.mock("./CarFilterCard", () => (props) => (
  <div
    className={`car-filter-card ${props.isClicked ? "dark" : "light"}`}
    onClick={props.handleClick}
  >
    {props.carType}
  </div>
));
jest.mock("./Header", () => (props) => (
  <div className="header">
    <div className="header-name">Car type</div>
    {Object.values(props.clickedCarTypes).some(Boolean) && (
      <div
        role="button"
        className="header-reset"
        onClick={props.handleMainResetClick}
      >
        Reset
      </div>
    )}
  </div>
));
jest.mock("./MoreFilter", () => (props) => (
  <div className="more-filter">
    More
    <div
      className={`more-filter-button ${
        props.clickedCarTypes.moreFilter ? "dark" : "light"
      }`}
      onClick={() => props.handleCarTypeClick("moreFilter")}
    >
      More Filter Button
    </div>
  </div>
));
describe("MainFilter", () => {
  test("renders Header and MoreFilter components", () => {
    render(<MainFilter />);

    expect(screen.getByText("Car type")).toBeInTheDocument();
    expect(screen.getByText("More")).toBeInTheDocument();
  });

  test("renders all CarFilterCard components", () => {
    render(<MainFilter />);
    const carTypes = [
      "Small cars",
      "Medium cars",
      "Large cars",
      "SUVs",
      "Vans",
    ];

    carTypes.forEach((type) => {
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  });

  test("toggles car type selection on CarFilterCard click", () => {
    render(<MainFilter />);
    const smallCarCard = screen
      .getByText("Small cars")
      .closest(".car-filter-card");

    fireEvent.click(smallCarCard);
    expect(smallCarCard).toHaveClass("dark");

    fireEvent.click(smallCarCard);
    expect(smallCarCard).toHaveClass("light");
  });

  test("resets car types on Reset button click in Header", () => {
    render(<MainFilter />);
    const smallCarCard = screen
      .getByText("Small cars")
      .closest(".car-filter-card");
    fireEvent.click(smallCarCard);

    expect(smallCarCard).toHaveClass("dark");

    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);
    expect(smallCarCard).toHaveClass("light");
  });
});
