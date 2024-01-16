import { Hero } from "../dto/hero.dto";
import { useQuery } from "react-query";
import { superHeroesService } from "../services/SuperHeroes.service";

export const useSuperHeroes = (config: any) => {
  const { ...rest } = config;
  return useQuery<Hero[], Error>(
    "super-heroes",
    superHeroesService.fetchSuperHeroes,
    {
      ...rest,
    }
  );
};
