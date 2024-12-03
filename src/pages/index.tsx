/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import CharacterList from "../components/CharacterList";
import CharacterProfile from "../components/CharacterProfile";
import { Character } from "../types";
import { useCharacter } from "@/service/hooks";
import { Pagination } from "@/components/Pagination";
import { styles } from "@/styles/theme";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching } = useCharacter(searchTerm, page);

  const handleNextPage = () => {
    if (data?.next) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (data?.previous && page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const renderContent = () => {
    if (!searchTerm.trim())
      return (
        <p style={styles.message}>Start typing to search for characters...</p>
      );
    if (isLoading || isFetching)
      return <p style={styles.message}>Loading...</p>;
    if (error)
      return <p style={styles.error}>Error fetching data: {error.message}</p>;
    if (data?.results.length === 0)
      return <p style={styles.message}>No results found for "{searchTerm}".</p>;

    return (
      <>
        <CharacterList
          characters={data?.results || []}
          onCharacterClick={setSelectedCharacter}
        />
        {data?.count && data.count > 10 && (
          <Pagination
            handlePreviousPage={handlePreviousPage}
            data={data}
            isFetching={isFetching}
            page={page}
            handleNextPage={handleNextPage}
          />
        )}
      </>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <Image src="/logoStarWars.png" alt="logo" width={649} height={128} />
      </div>
      <SearchBar
        value={searchTerm}
        onChange={(value) => {
          setSearchTerm(value);
          setPage(1); // Resetear a la primera página en cada nueva búsqueda
        }}
      />
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
