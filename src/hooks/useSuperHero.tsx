import { useQuery } from "react-query";
import { useQueryClient } from "react-query";
import { Hero } from "../dto/hero.dto";
import { superHeroesService } from "../services/SuperHeroes.service";

export const useSuperHero = (id: number, config?: any) => {
  const queryClient = useQueryClient();
  return useQuery<Hero, Error>(
    ["super-hero", id],
    () => superHeroesService.fetchOneSuperHeroById(id),
    {
      initialData: () => {
        const hero = queryClient
          .getQueryData<Hero[]>("super-heroes")
          ?.find((hero: Hero) => hero.id === id.toString());
        if (hero) {
          return hero;
        } else {
          return undefined;
        }
      },
    }
  );
};
