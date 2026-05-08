function Main({ handleClick }) {
  return (
    <main>
      {/* 3lü Card Bölümü */}
      <section className="container container-top">
        <div className="card card-left">
          <h2>
            Özel <br /> Lezzetus
          </h2>
          <p>Position: Absolute Acı Pizza</p>
          <button onClick={handleClick}>SİPARİŞ VER</button>
        </div>
        <div className="cards-right">
          <div className="card card-right1">
            <h3>
              Hackatlon <br /> Burger Menü
            </h3>
            <button onClick={handleClick}>SİPARİŞ VER</button>
          </div>
          <div className="card card-right2">
            <h3>
              <span>Çoooook</span> hızlı <br /> npm gibi kurye
            </h3>
            <button onClick={handleClick}>SİPARİŞ VER</button>
          </div>
        </div>
      </section>

      {/* Ara Yazılar */}
      <p className="text">en çok paketlenen menüler</p>
      <h2 className="text">Acıktıran Kodlara Doyuran Lezzetler</h2>

      {/* Nav Menü */}
      <nav className="container middle-nav">
        <button>
          <img src="/assets/iteration-2/icons/1.svg" alt="" /> Ramen
        </button>
        <button>
          <img src="/assets/iteration-2/icons/2.svg" alt="" /> Pizza
        </button>
        <button>
          <img src="/assets/iteration-2/icons/3.svg" alt="" /> Burger
        </button>
        <button>
          <img src="/assets/iteration-2/icons/4.svg" alt="" /> French Fries
        </button>
        <button>
          <img src="/assets/iteration-2/icons/5.svg" alt="" /> Fast Food
        </button>
        <button>
          <img src="/assets/iteration-2/icons/6.svg" alt="" /> Soft Drinks
        </button>
      </nav>

      {/* Pizza Cards */}
      <section className="container food-cards">
        <div className="food-card">
          <img src="/assets/iteration-2/pictures/food-1.webp" alt="" />
          <h3>Terminal Pizza</h3>
          <div className="info">
            <div className="puan">4.9</div>
            <div className="bilgi">
              <div className="parantez">(200)</div>
              <div className="fiyat">60₺</div>
            </div>
          </div>
        </div>
        <div className="food-card food-middle">
          <img src="/assets/iteration-2/pictures/food-2.webp" alt="" />
          <h3>Position Absolute Acı Pizza</h3>
          <div className="info">
            <div className="puan">4.9</div>
            <div className="bilgi">
              <div className="parantez">(200)</div>
              <div className="fiyat">85₺</div>
            </div>
          </div>
        </div>
        <div className="food-card food-right">
          <img src="/assets/iteration-2/pictures/food-3.webp" alt="" />
          <h3>useEffect Tavuklu Burger</h3>
          <div className="info">
            <div className="puan">4.9</div>
            <div className="bilgi">
              <div className="parantez">(200)</div>
              <div className="fiyat">60₺</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
