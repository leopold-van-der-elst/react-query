import { Hero } from "../dto/hero.dto";

const url = "http://localhost:4000";
//
export const superHeroesService = {
  async fetchSuperHeroes(): Promise<Hero[]> {
    const response = await fetch(`${url}/rq-super-heroes`);
    if (!response.ok) {
      throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  },
  async fetchOneSuperHeroById(id: number): Promise<Hero> {
    const response = await fetch(`${url}/rq-super-heroes/${id}`);
    if (!response.ok) {
      throw new Error(`Erreur: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
  },
};
