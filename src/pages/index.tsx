import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Main } from "./main";
import { Vote } from "./vote";
import { About } from "./about";
import { Account } from "./account";
import { VoteTest } from "./voteTest";

const routes = [
  { path: "/", Page: Home },
  { path: "/main", Page: Main },
  { path: "/about", Page: About},
  { path: "/vote", Page: Vote },
  { path: "/vote/test", Page: VoteTest },
  { path: "/account", Page: Account },

];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
