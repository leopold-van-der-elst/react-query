import { useEffect, useState } from "react";
import Nav from "./nav";
import { Hero } from "../dto/hero.dto";
import { superHeroesService } from "../services/SuperHeroes.service";

export default function SuperHeroes() {
  const [data, setData] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    superHeroesService.fetchSuperHeroes().then((res: Hero[]) => {
      setData(res);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <Nav />
      {data
        ? data.map((e) => {
            return <p key={e.id}>{e.name}</p>;
          })
        : null}
    </>
  );
}
