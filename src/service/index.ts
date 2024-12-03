import { Character } from "@/types";

export const fetchCharacters = async (
  searchTerm: string
): Promise<Character[]> => {
  const response = await fetch(
    `https://swapi.dev/api/people/?search=${searchTerm}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.results || [];
};
