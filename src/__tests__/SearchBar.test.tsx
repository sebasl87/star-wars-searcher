import SearchBar from "@/components/SearchBar";
import { render, screen, fireEvent } from "@testing-library/react";

describe("SearchBar", () => {
  it("renders correctly", () => {
    render(<SearchBar value="" onChange={jest.fn()} />);
    const input = screen.getByPlaceholderText("Search for a character...");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Search for a character...");
    fireEvent.change(input, { target: { value: "Luke" } });
    expect(handleChange).toHaveBeenCalledWith("Luke");
  });

  it("displays the correct value in the input field", () => {
    render(<SearchBar value="Leia" onChange={jest.fn()} />);
    const input = screen.getByPlaceholderText("Search for a character...");
    expect(input).toHaveValue("Leia");
  });
});
