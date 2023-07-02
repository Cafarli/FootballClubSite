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
import { BrowserRouter , Route, Routes } from "react-router-dom";
import { Footer } from "./headerFooter/footer/footer";

function App() {

  setTimeout(() => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
}, 0);

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/squad" element={<Players />} />
          <Route exact path="/standings" element={<Standings />} />
          <Route exact path="/matches" element={<Match />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/news/newsCardTitle" element={<OpenedNewsCard />} />
          <Route exact path="/shop/kit" element={<OpenedShopCard />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/squad/player" element={<Player />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
