import { Character } from "@/types";

interface CharacterListProps {
  characters: Character[];
  onCharacterClick: (character: Character) => void;
}

const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  onCharacterClick,
}) => (
  <ul>
    {characters.map((character) => (
      <li
        key={character.name}
        onClick={() => onCharacterClick(character)}
        style={{
          cursor: "pointer",
          padding: "16px",
          borderBottom: "1px solid yellow",
          listStyle: "none",
        }}
      >
        <strong>{character.name}</strong> - {character.birth_year}
      </li>
    ))}
  </ul>
);

export default CharacterList;
