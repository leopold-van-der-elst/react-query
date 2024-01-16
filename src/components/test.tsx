import { Hero } from "../dto/hero.dto";
import { useSuperHeroes } from "../hooks/useSuperHeroes";
import Nav from "./nav";

export default function Test() {
  const { isLoading, isFetching, refetch, data, isError, error } =
    useSuperHeroes({});
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
      {data ? data.map((hero: Hero) => <p key={hero.id}>{hero.name}</p>) : null}
      <button onClick={() => refetch()}>Fetch</button>
    </>
  );
}
