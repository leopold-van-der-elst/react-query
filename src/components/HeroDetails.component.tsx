import { useParams } from "react-router-dom";
import { useSuperHero } from "../hooks/useSuperHero";

export default function HeroDetails() {
  let { id } = useParams();
  const heroId = id ? parseInt(id, 10) : 0;

  const { isLoading, isFetching, refetch, data, isError, error } =
    useSuperHero(heroId);

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    console.log("loading...");
    return <p>loading...</p>;
  }
  if (isFetching) {
    console.log("fetching");
  }

  return (
    <div>
      <p>{data?.name}</p>
      <p>{data?.alterEgo}</p>
      <p>{data?.id}</p>
    </div>
  );
}
