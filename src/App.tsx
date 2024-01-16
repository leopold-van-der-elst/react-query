import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./components/home.component";
import SuperHeroes from "./components/superHeroes.component";
import RqSuperHeroes from "./components/RqSuperHeroes.component";
import Test from "./components/test";
import HeroDetails from "./components/HeroDetails.component";
import Friends from "./components/Friends.component";

const queryClient = new QueryClient();

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/super-heroes",
      element: <SuperHeroes />,
    },
    {
      path: "/rq-super-heroes",
      element: <RqSuperHeroes />,
    },
    {
      path: "/rq-super-heroes/:id",
      element: <HeroDetails />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: "/friends",
      element: <Friends />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
