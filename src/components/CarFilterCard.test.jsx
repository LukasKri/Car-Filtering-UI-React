import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CarFilterCard from "./CarFilterCard";

const defaultProps = {
  carType: "Small cars",
  price: "$233+",
  imgAddress:
    "https://content.r9cdn.net/rimg/carimages/generic/01_mini_white.png?width=108&height=72",
  style: { left: "43px" },
  isClicked: true,
  handleClick: jest.fn(),
  darkTheme: {
    background: "#363f45",
    borderColor: "#363f45",
    color: "#fff",
  },
  lightTheme: {
    background: "#fff",
    color: "#192024",
  },
};

describe("CarFilterCard", () => {
  test("renders with correct props", () => {
    render(<CarFilterCard {...defaultProps} />);

    expect(screen.getByText("Small cars")).toBeInTheDocument();
    expect(screen.getByAltText("Small cars-car-type-img")).toBeInTheDocument();
  });

  test("shows price tooltip on mouse enter and hides on mouse leave", () => {
    render(<CarFilterCard {...defaultProps} />);
    const card = screen.getByText("Small cars");

    fireEvent.mouseEnter(card);
    expect(screen.getByText("$233+")).toBeInTheDocument();

    fireEvent.mouseLeave(card);
    expect(screen.queryByText("$233+")).not.toBeInTheDocument();
  });

  test("applies dark theme styles when isClicked is true", () => {
    render(<CarFilterCard {...defaultProps} />);
    const card = screen.getByRole("button");

    expect(card).toHaveStyle({
      background: "#363f45",
      borderColor: "#363f45",
      color: "#fff",
    });
  });

  test("applies light theme styles when isClicked is false", () => {
    const props = { ...defaultProps, isClicked: false };
    render(<CarFilterCard {...props} />);
    const card = screen.getByRole("button", { name: /small cars/i });

    expect(card).toHaveStyle({ background: "#fff", color: "#192024" });
  });

  test("calls handleClick when clicked", () => {
    render(<CarFilterCard {...defaultProps} />);
    const card = screen.getByRole("button", { name: /small cars/i });

    fireEvent.click(card);
    expect(defaultProps.handleClick).toHaveBeenCalled();
  });
});
