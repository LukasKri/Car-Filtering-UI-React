import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DropdownSVG from "./DropdownSVG";

describe("DropdownSVG", () => {
  test("renders the SVG element", () => {
    render(<DropdownSVG isMoreFilterClicked={false} />);
    const svgElement = screen.getByRole("img");

    expect(svgElement).toBeInTheDocument();
  });

  test("applies rotate style when isMoreFilterClicked is true", () => {
    render(<DropdownSVG isMoreFilterClicked={true} />);
    const svgElement = screen.getByRole("img");

    expect(svgElement).toHaveStyle({ transform: "rotate(180deg)" });
  });

  test("applies not rotate style when isMoreFilterClicked is false", () => {
    render(<DropdownSVG isMoreFilterClicked={false} />);
    const svgElement = screen.getByRole("img");

    expect(svgElement).toHaveStyle({ transform: "rotate(0deg)" });
  });

  test("sets path fill color to white when isMoreFilterClicked is true", () => {
    render(<DropdownSVG isMoreFilterClicked={true} />);
    const svgElement = screen.getByRole("img");
    const pathElement = within(svgElement).getByTestId("svg-path");

    expect(pathElement).toHaveAttribute("fill", "#fff");
  });

  test("sets path fill color to #192024 when isMoreFilterClicked is false", () => {
    render(<DropdownSVG isMoreFilterClicked={false} />);
    const svgElement = screen.getByRole("img");
    const pathElement = within(svgElement).getByTestId("svg-path");

    expect(pathElement).toHaveAttribute("fill", "#192024");
  });
});
