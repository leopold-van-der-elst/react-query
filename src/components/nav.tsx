import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/super-heroes">SuperHeroes</Link>
      </li>
      <li>
        <Link to="/rq-super-heroes">RQSuper</Link>
      </li>
      <li>
        <Link to="/test">test</Link>
      </li>
      <li>
        <Link to="/friends">friends</Link>
      </li>
    </>
  );
}
