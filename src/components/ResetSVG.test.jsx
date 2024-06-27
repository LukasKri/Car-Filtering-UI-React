import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ResetSVG from "./ResetSVG";

const defaultProps = {
  handleSVGResetClick: jest.fn(),
};

describe("ResetSVG", () => {
  test("renders the ResetSVG component", () => {
    render(<ResetSVG {...defaultProps} />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("calls handleSVGResetClick when SVG is clicked", () => {
    render(<ResetSVG {...defaultProps} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(defaultProps.handleSVGResetClick).toHaveBeenCalled();
  });
});
