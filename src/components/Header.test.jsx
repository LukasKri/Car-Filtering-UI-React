import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

const defaultProps = {
  clickedCarTypes: { small: false, medium: false, large: false },
  handleMainResetClick: jest.fn(),
};

const smallTrueProps = {
  clickedCarTypes: { small: true, medium: false, large: false },
  handleMainResetClick: jest.fn(),
};

describe("Header", () => {
  test("renders the header with no car types clicked", () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByText("Car type")).toBeInTheDocument();
    expect(screen.queryByText("Reset")).not.toBeInTheDocument();
  });

  test("renders the header with some car types clicked", () => {
    render(<Header {...smallTrueProps} />);

    expect(screen.getByText("Car type")).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
  });

  test("does not render reset button when no car types are clicked", () => {
    render(<Header {...defaultProps} />);

    expect(screen.queryByText("Reset")).not.toBeInTheDocument();
  });

  test("renders reset button when any car type is clicked", () => {
    render(<Header {...smallTrueProps} />);

    expect(screen.getByText("Reset")).toBeInTheDocument();
  });

  test("calls handleMainResetClick when reset button is clicked", () => {
    render(<Header {...smallTrueProps} />);

    fireEvent.click(screen.getByText("Reset"));
    expect(smallTrueProps.handleMainResetClick).toHaveBeenCalled();
  });
});
