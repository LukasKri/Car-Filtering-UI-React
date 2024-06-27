import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MoreFilterCard from "./MoreFilterCard";

const defaultProps = {
  imgAddress: "https://example.com/car-image.png",
  carType: "Luxury",
  price: "$364",
  isChecked: false,
  handleCheckboxClick: jest.fn(),
};

describe("MoreFilterCard", () => {
  test("renders the MoreFilterCard with correct props", () => {
    render(<MoreFilterCard {...defaultProps} />);

    expect(screen.getByAltText("Luxury-car-type-img")).toBeInTheDocument();
    expect(screen.getByText("Luxury")).toBeInTheDocument();
    expect(screen.getByText("$364")).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test("checkbox should be checked when isChecked is true", () => {
    render(<MoreFilterCard {...defaultProps} isChecked={true} />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeChecked();
  });

  test("calls handleCheckboxClick when card is clicked", () => {
    render(<MoreFilterCard {...defaultProps} />);
    const card = screen.getByRole("dialog");
    fireEvent.click(card);

    expect(defaultProps.handleCheckboxClick).toHaveBeenCalled();
  });
});
