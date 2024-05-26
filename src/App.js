import { useState } from "react";
import "./App.css";
import Abouts from "./components/Abouts";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Reviews from "./components/Reviews";
import Search from "./components/Search";
import Services from "./components/Services";
import Popup from "./components/Popup";

function App() {
  const [pop, setPop] = useState(false);

  const onClickDown = () => {
    window.location.href = "#services";
  };

  const PopShow = () => {
    setPop(true);
  };

  const PopClose = () => {
    setPop(false);
  };
  return (
    <div className="App">
      <div className="page-main">
        <Header PopShow={PopShow} />
        <Hero onClickDown={onClickDown} PopShow={PopShow} />
        <Partners />
        <Abouts />
        <Services PopShow={PopShow} />
        <Search />
        <Blogs PopShow={PopShow} />
      </div>
      <Reviews />
      <Footer />
      {pop && <Popup PopClose={PopClose} />}
    </div>
  );
}

export default App;
