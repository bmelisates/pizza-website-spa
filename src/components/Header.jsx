function Header({ handleClick }) {
  return (
    <header>
      {/* Başlık Bölümü */}
      <div className="home">
        <img
          className="logo"
          src="/assets/iteration-1/logo.svg"
          alt="logo"
          fetchpriority="high"
          rel="preload"
          loading="eager"
        />
        <p>fırsatı kaçırma</p>
        <h1>
          KOD ACIKTIRIR
          <br />
          PIZZA, DOYURUR
        </h1>
        <button id="order-pizza" onClick={handleClick}>
          ACIKTIM
        </button>
      </div>
    </header>
  );
}

export default Header;
