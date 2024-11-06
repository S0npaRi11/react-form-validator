import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
// import { test, expect } from 'jest'

test("renders App Component", () => {
  render(<App />);
  const linkElement = screen.getByText(/React Form Handler Hook/i);
  expect(linkElement).toBeInTheDocument();
});
