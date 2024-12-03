import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchBar from "../components/SearchBar";
import CharacterList from "../components/CharacterList";
import CharacterProfile from "../components/CharacterProfile";
import { Character } from "../types";

const fetchCharacters = async (searchTerm: string): Promise<Character[]> => {
  const response = await fetch(
    `https://swapi.dev/api/people/?search=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.results || [];
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const {
    data: characters = [],
    error,
    isLoading,
    isFetching,
  } = useQuery<Character[]>({
    queryKey: ["characters", searchTerm],
    queryFn: () => fetchCharacters(searchTerm),

    enabled: !!searchTerm.trim(),
    staleTime: 60000,
  });

  return (
    <div style={{ padding: "16px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Star Wars Character Searcher</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      {isLoading || isFetching ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data: {error.message}</p>
      ) : characters.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <CharacterList
          characters={characters}
          onCharacterClick={setSelectedCharacter}
        />
      )}
      {selectedCharacter && (
        <CharacterProfile
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}
