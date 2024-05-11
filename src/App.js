import { useState } from 'react';
import './App.css';
import Abouts from './commponents/Abouts';
import Blogs from './commponents/Blogs';
import Footer from './commponents/Footer';
import Header from './commponents/Header';
import Hero from './commponents/Hero';
import Partners from './commponents/Partners';
import Reviews from './commponents/Reviews';
import Search from './commponents/Search';
import Services from './commponents/Services';
import Popup from './commponents/Popup';


function App() {

  const [pop, setPop] = useState(false)

  const onClickDown = () => {
    window.location.href = '#services';
  }

  const PopShow = () => {
    setPop(true)
  }

  const PopClose = () => {
    setPop(false)
  }
  return (
    <div className="App">
      <div className="page-main">
        <Header  PopShow={PopShow}/>
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
