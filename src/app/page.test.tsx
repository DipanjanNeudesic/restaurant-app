/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "src/pages/home";

it("App Router: Works with Server Components", () => {
  render(<Home />);
  expect(screen.getByRole("heading")).toHaveTextContent("App Router");
});
