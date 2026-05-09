function Footer() {
  return (
    <footer>
      <section className="container">
        {/* Adres */}
        <div className="address f-card">
          <img
            className="f-title-logo"
            src="/assets/iteration-2/footer/logo-footer.svg"
            alt=""
          />

          <p>
            <img src="/assets/iteration-2/footer/icons/icon-1.png" alt="" /> 341
            Londonderry Road, Istanbul Türkiye
          </p>
          <p>
            <img src="/assets/iteration-2/footer/icons/icon-2.png" alt="" />{" "}
            aciktim@teknolojikyemekler.com
          </p>
          <p>
            <img src="/assets/iteration-2/footer/icons/icon-3.png" alt="" /> +90
            216 123 45 67
          </p>
        </div>
        {/* Menü */}
        <div className="hot-menu f-card">
          <h3 className="f-title">Hot Menu</h3>
          <ul style={{ paddingLeft: "0" }}>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        {/* Sosyal Medya */}
        <div className="instagram f-card">
          <h3 className="f-title">Instagram</h3>
          <div className="images">
            <img src="/assets/iteration-2/footer/insta/li-0.webp" alt="" />
            <img src="/assets/iteration-2/footer/insta/li-1.webp" alt="" />
            <img src="/assets/iteration-2/footer/insta/li-2.webp" alt="" />
            <img src="/assets/iteration-2/footer/insta/li-3.webp" alt="" />
            <img src="/assets/iteration-2/footer/insta/li-4.webp" alt="" />
            <img src="/assets/iteration-2/footer/insta/li-5.webp" alt="" />
          </div>
        </div>
      </section>
      <div className="full-border"></div>
      <section className="container">
        <p>© 2026 Teknolojik Yemekler.</p>
      </section>
    </footer>
  );
}

export default Footer;
