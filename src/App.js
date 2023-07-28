import "./App.css";
import { About } from "./Pages/about/about";
import { Players } from "./Pages/team/players/players";
import { Contact } from "./Pages/contact/contact";
import { News } from "./Pages/news/news";
import { OpenedNewsCard } from "./Pages/news/opened_news_card/opened_news_card";
import { Shop } from "./Pages/shop/shop";
import { Player } from "./Pages/team/openedPlayer/player";
import { Match } from "./Pages/matches/mathc/match";
import { Standings } from "./Pages/matches/standings/standings";
import { Home } from "./Pages/home/home";
import { Header } from "./Pages/headerFooter/header/header";
import { OpenedShopCard } from "./Pages/shop/openShopCard/openShopCard";
import { Login } from "./Pages/login/login";
import { Signup } from "./Pages/signup/signup";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Footer } from "./Pages/headerFooter/footer/footer";
import ForgotPage from "./Components/forgot/ForgotPage";

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
        path: "newsCardTitle",
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
  {
    path: "/forgot-password",
    element: <ForgotPage />,
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
