import { Character } from "../types";

interface CharacterProfileProps {
  character: Character;
  onClose: () => void;
}

const CharacterProfile: React.FC<CharacterProfileProps> = ({
  character,
  onClose,
}) => {
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={handleBackgroundClick}
    >
      <div
        style={{
          backgroundColor: "black",
          border: "1px solid yellow",
          padding: "16px",
          borderRadius: "8px",
          width: "560px",
          color: "yellow",
        }}
      >
        <h2>{character.name}</h2>
        <p>
          <strong>Birth Year:</strong> {character.birth_year}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender}
        </p>
        <button
          onClick={onClose}
          style={{
            backgroundColor: "black",
            color: "yellow",
            border: "1px solid yellow",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CharacterProfile;
