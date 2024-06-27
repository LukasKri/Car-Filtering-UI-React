import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SelectedOptionsCount from "./SelectedOptionsCount";

const defaultProps = {
  clickedCarTypes: {
    luxury: false,
    convertible: false,
    commercial: false,
    pickupTruck: false,
  },
  moreFilterCars: [
    {
      key: "luxury",
      type: "Luxury",
    },
    {
      key: "convertible",
      type: "Convertible",
    },
    {
      key: "commercial",
      type: "Commercial",
    },
    {
      key: "pickupTruck",
      type: "Pickup Truck",
    },
  ],
};

describe("SelectedOptionsCount", () => {
  test("renders the count of selected options correctly when more than one option is selected", () => {
    const props = {
      ...defaultProps,
      clickedCarTypes: {
        ...defaultProps.clickedCarTypes,
        luxury: true,
        convertible: true,
      },
    };
    render(<SelectedOptionsCount {...props} />);

    expect(screen.getByText("2 selected")).toBeInTheDocument();
  });

  test("renders the name of the selected option correctly when only one option is selected", () => {
    const props = {
      ...defaultProps,
      clickedCarTypes: { ...defaultProps.clickedCarTypes, commercial: true },
    };
    render(<SelectedOptionsCount {...props} />);

    expect(screen.getByText("Commercial")).toBeInTheDocument();
  });

  test("renders nothing when no options are selected", () => {
    render(<SelectedOptionsCount {...defaultProps} />);

    expect(screen.queryByText(/selected/)).not.toBeInTheDocument();
    expect(screen.queryByText(/luxury/)).not.toBeInTheDocument();
    expect(screen.queryByText(/convertible/)).not.toBeInTheDocument();
    expect(screen.queryByText(/commercial/)).not.toBeInTheDocument();
    expect(screen.queryByText(/pickupTruck/)).not.toBeInTheDocument();
  });
});
