import { Character } from "../types";

interface CharacterProfileProps {
  character: Character;
  onClose: () => void;
}

const CharacterProfile: React.FC<CharacterProfileProps> = ({
  character,
  onClose,
}) => (
  <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
    <div
      style={{
        border: "1px solid yellow",
        padding: "16px",
        marginTop: "16px",
        borderRadius: "8px",
        width: "560px",
        marginLeft: "40px",
      }}
    >
      <h2 style={{ color: "yellow" }}>{character.name}</h2>
      <p>
        <strong>Birth Year:</strong> {character.birth_year}
      </p>
      <p>
        <strong>Gender:</strong> {character.gender}
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

export default CharacterProfile;
