import { useFriends } from "../hooks/useFriends";
import { useSuperHeroes } from "../hooks/useSuperHeroes";
import Nav from "./nav";

export default function Friends() {
  const {
    isLoading: friendsLoading,
    isFetching: friendsFetching,
    data: friends,
  } = useFriends();
  const {
    isLoading: heroesLoading,
    isFetching: heroesFetching,
    data: heroes,
  } = useSuperHeroes({});

  if (friendsLoading) {
    console.log("friendsLoading");
  }
  if (friendsFetching) {
    console.log("friendsFetching");
  }
  if (heroesLoading) {
    console.log("heroesLoading");
  }
  if (heroesFetching) {
    console.log("heroesFetching");
  }

  return (
    <div>
      <Nav />
      {friends?.map((e) => (
        <div key={e.id}>{e.name}</div>
      ))}
      {heroes?.map((e) => (
        <div key={e.id}>{e.name}</div>
      ))}
    </div>
  );
}
