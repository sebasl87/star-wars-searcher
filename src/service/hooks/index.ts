import { Character } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "..";

export const useCharacter = (searchTerm: string) =>
  useQuery<Character[]>({
    queryKey: ["characters", searchTerm],
    queryFn: () => fetchCharacters(searchTerm),
    enabled: !!searchTerm.trim(),
    staleTime: 60000,
  });
