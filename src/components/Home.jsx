import React from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/pizza");
  };

  return (
    <div className="home-page-wrapper">
      <Header handleClick={handleClick} />

      {/* Nav a Menüsü */}
      <nav className="container link-blok">
        <a href="#">
          <img src="/assets/iteration-2/icons/1.svg" alt="" /> YENİ! Kore
        </a>
        <a href="#">
          <img src="/assets/iteration-2/icons/2.svg" alt="" /> Pizza
        </a>
        <a href="#">
          <img src="/assets/iteration-2/icons/3.svg" alt="" /> Burger
        </a>
        <a href="#">
          <img src="/assets/iteration-2/icons/4.svg" alt="" /> Kızartmalar
        </a>
        <a href="#">
          <img src="/assets/iteration-2/icons/5.svg" alt="" /> Fast Food
        </a>
        <a href="#">
          <img src="/assets/iteration-2/icons/6.svg" alt="" /> Gazlı İçecek
        </a>
      </nav>

      <Main handleClick={handleClick} />

      <Footer />
    </div>
  );
}

export default Home;
