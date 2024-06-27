import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MoreFilter from "./MoreFilter";

jest.mock("./DropdownSVG", () => () => <div>DropdownSVG</div>);
jest.mock("./MoreFilterCard", () => ({ carType }) => <div>{carType}</div>);
jest.mock("./ResetSVG", () => ({ handleSVGResetClick }) => (
  <div role="button" onClick={handleSVGResetClick}>
    ResetSVG
  </div>
));
jest.mock("./SelectedOptionsCount", () => () => (
  <div>SelectedOptionsCount</div>
));

const moreFilterCars = [{ type: "Luxury" }, { type: "Convertible" }];

const defaultProps = {
  clickedCarTypes: {
    luxury: false,
    convertible: false,
    commercial: false,
    pickupTruck: false,
    moreFilter: false,
  },
  handleCarTypeClick: jest.fn(),
  handleSVGResetClick: jest.fn(),
  darkTheme: { background: "#000", color: "#fff" },
  lightTheme: { background: "#fff", color: "#000" },
};

describe("MoreFilter", () => {
  test("renders MoreFilter button", () => {
    render(<MoreFilter {...defaultProps} />);

    expect(screen.getByText("More")).toBeInTheDocument();
  });

  test("renders DropdownSVG when no car types are selected", () => {
    render(<MoreFilter {...defaultProps} />);
    const button = screen.getAllByRole("button");
    const firstEl = button[0];

    expect(screen.getByText("DropdownSVG")).toBeInTheDocument();
    expect(screen.queryByText("ResetSVG")).not.toBeInTheDocument();
    expect(firstEl).toHaveStyle({ background: "#fff", color: "#000" });
  });

  test("renders ResetSVG when any car type is selected", () => {
    const props = {
      ...defaultProps,
      clickedCarTypes: { ...defaultProps.clickedCarTypes, luxury: true },
    };
    render(<MoreFilter {...props} />);
    const button = screen.getAllByRole("button");
    const firstEl = button[0];

    expect(screen.getByText("ResetSVG")).toBeInTheDocument();
    expect(screen.queryByText("DropdownSVG")).not.toBeInTheDocument();
    expect(firstEl).toHaveStyle({ background: "#000", color: "#fff" });
  });

  test("calls handleCarTypeClick when More button is clicked", () => {
    render(<MoreFilter {...defaultProps} />);
    fireEvent.click(screen.getByText("More"));

    expect(defaultProps.handleCarTypeClick).toHaveBeenCalledWith("moreFilter");
  });

  test("renders MoreFilterCard components when moreFilter is clicked", () => {
    const props = {
      ...defaultProps,
      clickedCarTypes: { ...defaultProps.clickedCarTypes, moreFilter: true },
    };
    render(<MoreFilter {...props} />);

    moreFilterCars.forEach((car) => {
      expect(screen.getByText(car.type)).toBeInTheDocument();
    });
  });

  test("calls handleSVGResetClick when ResetSVG is clicked", () => {
    const props = {
      ...defaultProps,
      clickedCarTypes: { ...defaultProps.clickedCarTypes, luxury: true },
      handleSVGResetClick: jest.fn(),
    };
    render(<MoreFilter {...props} />);
    fireEvent.click(screen.getByText("ResetSVG"));

    expect(props.handleSVGResetClick).toHaveBeenCalled();
  });
});
