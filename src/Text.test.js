import { render, screen } from "@testing-library/react";
// import Text from "./Text";

test("renders learn react link", () => {
  render(<Text />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
