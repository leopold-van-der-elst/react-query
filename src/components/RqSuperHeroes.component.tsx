import Nav from "./nav";
import { useState } from "react";
import { useSuperHeroes } from "../hooks/useSuperHeroes";
import { Hero } from "../dto/hero.dto";
import { Link, Navigate } from "react-router-dom";

export default function RqSuperHeroes() {
  const [refetchTimer, setRefetchTimer] = useState<any>(3000);

  const { isLoading, isFetching, data, isError, error } = useSuperHeroes({
    refetchOnMount: false,
  });

  if (isLoading) {
    console.log("Loading...");
    return <p>Loading...</p>;
  }
  if (isFetching) {
    console.log("Fetching...");
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <Nav />
      {data
        ? data.map((hero: Hero) => {
            return (
              <div key={hero.id}>
                <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
              </div>
            );
          })
        : null}
    </>
  );
}
