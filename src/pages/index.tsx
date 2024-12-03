import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CharacterList from "../components/CharacterList";
import CharacterProfile from "../components/CharacterProfile";
import { Character } from "../types";
import { useCharacter } from "@/service/hooks";
import Image from "next/image";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const {
    data: characters = [],
    error,
    isLoading,
    isFetching,
  } = useCharacter(searchTerm);
  console.log("characters", characters);
  const renderContent = () => {
    if (!searchTerm.trim()) return null;
    if (isLoading || isFetching) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;
    if (characters.length === 0) return <p>No results found.</p>;

    return (
      <CharacterList
        characters={characters}
        onCharacterClick={setSelectedCharacter}
      />
    );
  };

  return (
    <div style={{ padding: "16px", maxWidth: "600px", margin: "0 auto" }}>
      <Image src="/logoStarWars.png" alt="logo" width={649} height={128} />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {renderContent()}
      {selectedCharacter && (
        <CharacterProfile
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}
