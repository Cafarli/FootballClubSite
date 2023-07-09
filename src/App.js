import "./App.css";
import { About } from "./about/about";
import { Players } from "./pages/players/players";
import { Contact } from "./contact/contact";
import { News } from "./news/news";
import { OpenedNewsCard } from "./news/opened_news_card/opened_news_card";
import { Shop } from "./shop/shop";
import { Player } from "./pages/openedPlayer/player";
import { Match } from "./matches/mathc/match";
import { Standings } from "./matches/standings/standings";
import { Home } from "./home/home";
import { Header } from "./headerFooter/header/header";
import { OpenedShopCard } from "./shop/openShopCard/openShopCard";
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Footer } from "./headerFooter/footer/footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/squad",
        element: <Players />,
      },
      {
        path: "/standings",
        element: <Standings />,
      },
      {
        path: "/matches",
        element: <Match />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/newsCardTitle",
        element: <OpenedNewsCard />,
      },
      {
        path: "/shop/kit",
        element: <OpenedShopCard />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/squad/player",
        element: <Player />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  setTimeout(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, 0);

  return <RouterProvider router={router} />;
}

export default App;
