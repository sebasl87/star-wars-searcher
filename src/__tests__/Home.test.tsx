import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/index";
import { useCharacter } from "@/service/hooks";

jest.mock("@/service/hooks", () => ({
  useCharacter: jest.fn(),
}));

describe("Home", () => {
  it("renders the logo and search bar", () => {
    (useCharacter as jest.Mock).mockReturnValue({
      data: { results: [], next: null, previous: null },
      isLoading: false,
      isFetching: false,
      error: null,
    });

    render(<Home />);
    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search for a character...")
    ).toBeInTheDocument();
  });

  it("displays results after search", () => {
    (useCharacter as jest.Mock).mockReturnValue({
      data: {
        results: [
          { name: "Luke Skywalker", birth_year: "19BBY", gender: "male" },
        ],
        next: null,
        previous: null,
      },
      isLoading: false,
      isFetching: false,
      error: null,
    });

    render(<Home />);
    fireEvent.change(screen.getByPlaceholderText("Search for a character..."), {
      target: { value: "Luke" },
    });
    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
  });
});
