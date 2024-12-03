import CharacterList from "@/components/CharacterList";
import { Character } from "@/types";
import { render, screen, fireEvent } from "@testing-library/react";

describe("CharacterList", () => {
  const mockCharacters: Character[] = [
    { name: "Luke Skywalker", birth_year: "19BBY", gender: "male" },
    { name: "Leia Organa", birth_year: "19BBY", gender: "female" },
  ];

  const mockOnCharacterClick = jest.fn();

  it("renders the list of characters", () => {
    render(
      <CharacterList
        characters={mockCharacters}
        onCharacterClick={mockOnCharacterClick}
      />
    );

    mockCharacters.forEach((character) => {
      expect(screen.getByText(character.name)).toBeInTheDocument();
    });

    const birthYears = screen.getAllByText(/19BBY/);
    expect(birthYears).toHaveLength(2);
  });

  it("calls onCharacterClick when a character is clicked", () => {
    render(
      <CharacterList
        characters={mockCharacters}
        onCharacterClick={mockOnCharacterClick}
      />
    );

    const firstCharacter = screen.getByText("Luke Skywalker");
    fireEvent.click(firstCharacter);

    expect(mockOnCharacterClick).toHaveBeenCalledWith(mockCharacters[0]);
    expect(mockOnCharacterClick).toHaveBeenCalledTimes(1);
  });
});
