import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "..";

export const useCharacter = (searchTerm: string, page: number) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_SWAPI_URL}/?search=${searchTerm}&page=${page}`;

  return useQuery({
    queryKey: ["characters", searchTerm, page],
    queryFn: () => fetchCharacters(baseUrl),
    enabled: !!searchTerm.trim(),
    staleTime: 60000,
  });
};
