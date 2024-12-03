import { Character } from "../types";

interface CharacterProfileProps {
  character: Character;
  onClose: () => void;
}

const CharacterProfile: React.FC<CharacterProfileProps> = ({
  character,
  onClose,
}) => (
  <div style={{ border: "1px solid #ddd", padding: "16px", marginTop: "16px" }}>
    <h2>{character.name}</h2>
    <p>
      <strong>Birth Year:</strong> {character.birth_year}
    </p>
    <p>
      <strong>Gender:</strong> {character.gender}
    </p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default CharacterProfile;
