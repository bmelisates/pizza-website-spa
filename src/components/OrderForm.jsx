import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../CSS/OrderForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import axios from "axios";
import Footer from "./Footer";

function OrderForm({ orderData, setOrderData }) {
  const history = useHistory();

  const [formData, setFormData] = useState({
    isim: "",
    boyut: "",
    hamur: "",
    not: "",
  });

  // Counter
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Malzemeler ve Malzeme Seçimi
  const malzemeler = [
    { id: "pepperoni", label: "Pepperoni" },
    { id: "domates", label: "Domates" },
    { id: "biber", label: "Biber" },
    { id: "misir", label: "Mısır" },
    { id: "sucuk", label: "Sucuk" },
    { id: "kanada-jambonu", label: "Kanada Jambonu" },
    { id: "tavuk-izgara", label: "Tavuk Izgara" },
    { id: "jalepeno", label: "Jalepeno" },
    { id: "sogan", label: "Soğan" },
    { id: "sarimsak", label: "Sarımsak" },
    { id: "mantar", label: "Mantar" },
    { id: "ananas", label: "Ananas" },
  ];
  const [secilenMalzemeler, setSecilenMalzemeler] = useState([]);
  const handleIngredientChange = (malzeme) => {
    if (secilenMalzemeler.includes(malzeme)) {
      setSecilenMalzemeler(
        secilenMalzemeler.filter((item) => item !== malzeme),
      );
    } else {
      if (secilenMalzemeler.length < 10) {
        setSecilenMalzemeler([...secilenMalzemeler, malzeme]);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz.");
      }
    }
  };

  // Fiyat
  const malzemeFiyati = secilenMalzemeler.length * 5 * count;
  const pizzaFiyati = 85.5 * count;
  const toplamFiyat = pizzaFiyati + malzemeFiyati;

  // SİPARİŞ VER
  const [loading, setLoading] = useState(false);

  // Form Geçerliliği Kontrolü (Sipariş ver Butonuna bağlandı)
  const isFormInvalid =
    formData.isim.length < 3 ||
    secilenMalzemeler.length < 4 ||
    formData.boyut === "" ||
    formData.hamur === "" ||
    formData.hamur === "Hamur Kalınlığı" ||
    count <= 0;
  loading;

  // Input takibi - State güncelleme
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); //Kullanıcıya geri bildirim vermek ve double submiti önlemek için. (Butona bağlandı)

    // Veri paketleme
    const siparisBilgisi = {
      ...formData,
      malzemeler: secilenMalzemeler,
      adet: count,
      toplamFiyat: toplamFiyat,
      pizzaFiyati: pizzaFiyati,
      malzemeFiyati: malzemeFiyati,
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        siparisBilgisi,
        {
          headers: {
            "x-api-key":
              "pub_216744f0787811ee44919f8ab216dcd5fcca2840e7ee31c1da0ca68faaebd915",
          },
        },
      );
      setOrderData(response.data); //PROP LİFTİNG
      console.log(response.data);
      history.push("/success");
    } catch (error) {
      console.log(
        "Hatanın Detayı:",
        error.response ? error.response.data : error.message,
      );
      alert("Sipariş alınamadı!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order-page-wrapper">
      {/* Header */}
      <header className="header pb-0">
        <div className="container flex-column">
          <img
            className="d-block mx-auto pb-0 pb-4"
            src="/assets/iteration-1/logo.svg"
            alt="logo"
          />
        </div>
      </header>

      {/* MAİN (info + form) */}
      <section
        className="order-form-group flex-column"
        style={{ paddingTop: "0px" }}
      >
        {/* İnfo */}
        <section
          className="product-info container flex-column"
          style={{ paddingTop: "0px" }}
        >
          {/* Pizza Resmi */}
          <img
            style={{ paddingBottom: "50px" }}
            src="/assets/iteration-2/pictures/form-banner.png"
            alt=""
            className="img-fluid d-inline-block mx-auto"
          />
          {/* Nav Linkleri */}
          <nav className="d-flex flex-start gap-1 mb-3">
            <Link to="/" href="" className="nav-link">
              <span className="fw-weight">Anasayfa</span>
            </Link>
            <span>-</span>
            <Link href="" className="nav-link" style={{ color: "#d62828" }}>
              <span className="fw-weight">Sipariş Oluştur</span>
            </Link>
          </nav>
          {/* Başlık */}
          <h3 className="fw-semibold">Position Absolute Acı Pizza</h3>
          {/* Info Satırı */}
          <div className="d-flex justify-content-between align-items-center mt-2 pb-4">
            <span className="h4 fw-bold mb-0">85.50₺</span>
            <div className="pizza-stats d-flex gap-5 text-secondary">
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>
          {/* Açıklama */}
          <p className="light-grey">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </section>

        {/* FORM */}
        <Form>
          {/* İlk 2 form elemanı */}
          {/* Boyut ve Hamur Seçimi - Yan yana */}
          <section className="container">
            <div className="row">
              {/* Boyut Seçimi */}
              <div className="col-6">
                <h5 className="dark-grey fw-bold">
                  Boyut Seç: <span className="required">*</span>
                </h5>
                <div className="size-buttons light-grey">
                  <FormGroup check>
                    <Input
                      id="kucuk"
                      name="boyut"
                      type="radio"
                      value="kucuk"
                      onChange={handleChange}
                    />
                    <Label htmlFor="kucuk" check>
                      S
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      id="orta"
                      name="boyut"
                      type="radio"
                      value="orta"
                      onChange={handleChange}
                    />
                    <Label htmlFor="orta" check data-cy="size-m-label">
                      M
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      id="buyuk"
                      name="boyut"
                      type="radio"
                      value="buyuk"
                      onChange={handleChange}
                    />
                    <Label htmlFor="buyuk" check>
                      L
                    </Label>
                  </FormGroup>
                </div>
              </div>
              {/* Hamur Seçimi */}
              <div className="col-6 ps-4">
                <h5
                  className="dark-grey fw-bold"
                  style={{ paddingBottom: "10px" }}
                >
                  Hamur Seç: <span className="required">*</span>
                </h5>
                <FormGroup className="thickness-selects">
                  <Input
                    id="hamur"
                    className="mb-3 w-100"
                    name="hamur"
                    value={formData.hamur}
                    type="select"
                    onChange={handleChange}
                  >
                    <option value="">--Hamur Kalınlığı Seç--</option>
                    <option>İnce</option>
                    <option>Orta</option>
                    <option>Kalın</option>
                  </Input>
                </FormGroup>
              </div>
            </div>
          </section>

          {/* Checkbox - Malzeme Seçimi */}
          <section className="container">
            <div className="light-grey">
              <h5 className="dark-grey fw-bold">Ek Malzemeler:</h5>
              <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>

              <FormGroup className="fw-bold">
                <div className="row ps-3">
                  {malzemeler.map((item) => (
                    <FormGroup
                      key={item.id}
                      check
                      /* col-6: En küçükte 2 sütun | col-md-4: Orta ekranda 3 sütun */
                      className="ingredient-check col-6 col-md-4 d-flex align-items-center gap-2 mb-2"
                    >
                      <Input
                        type="checkbox"
                        id={item.id}
                        checked={secilenMalzemeler.includes(item.label)}
                        onChange={() => handleIngredientChange(item.label)}
                        disabled={
                          secilenMalzemeler.length >= 10 &&
                          !secilenMalzemeler.includes(item.label)
                        }
                      />
                      <Label htmlFor={item.id} check className="mb-0">
                        {item.label}
                      </Label>
                    </FormGroup>
                  ))}
                </div>
              </FormGroup>
            </div>
          </section>

          {/* Ad - Soyad */}
          <section className="name-area container">
            <FormGroup style={{ width: "100%" }}>
              <Label for="isim">
                <h5 className="fw-bold">
                  Adınız: <span className="required">*</span>
                </h5>
              </Label>
              <Input
                id="isim"
                name="isim"
                type="text"
                rows="3"
                placeholder="İsminizi giriniz"
                minLength="3"
                required
                value={formData.isim}
                onChange={handleChange}
                invalid={formData.isim.length > 0 && formData.isim.length < 3}
              />

              <FormFeedback>Lütfen en az 3 karakter giriniz.</FormFeedback>
            </FormGroup>
          </section>

          {/* Sipariş Notu */}
          <section className="order-note container">
            <FormGroup style={{ width: "100%" }}>
              <Label for="not">
                <h5 className="fw-bold">Sipariş Notu:</h5>
              </Label>
              <Input
                id="not"
                name="not"
                type="textarea"
                rows="2"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={formData.not}
                onChange={handleChange}
              />
            </FormGroup>
          </section>
        </Form>

        {/* Border */}
        <hr className="container" />

        {/* Border Bottom - Count butonu ve Sipariş card */}
        <section className="container order-section d-flex flex-wrap align-items-start justify-content-between">
          {/* Counter Buton Bloğu */}
          <div
            className="input-group count-buttons"
            style={{ height: "45px", flexShrink: 0 }}
          >
            <button
              className="btn btn-warning fw-bold"
              type="button"
              onClick={handleDecrease}
              style={{
                borderRadius: "5px 0 0 5px",
              }}
            >
              <span className="ps-2">-</span>
            </button>
            <div className="form-control text-center d-flex align-items-center justify-content-center fw-bold">
              {count}
            </div>
            <button
              className="btn btn-warning fw-bold"
              type="button"
              onClick={handleIncrease}
              style={{ borderRadius: "0 5px 5px 0" }}
            >
              <span className="ps-1">+</span>
            </button>
          </div>

          {/* Sipariş Toplamı Kartı */}
          <div
            className="order-wrapper order-card"
            style={{
              maxWidth: "400px",
              minWidth: "300px",
            }}
          >
            {/* Bilgi Kartı */}
            <div
              className="card order-info-card shadow-sm border-bottom-0 p-5"
              style={{ borderRadius: "8px 8px 0 0", background: "#FAF7F2" }}
            >
              <div>
                <h5 className="mb-4 fw-bold">Sipariş Toplamı</h5>
                <div className="d-flex justify-content-between mb-2 fw-bold pb-2">
                  <span className="light-grey">Pizza ({count})</span>
                  <span className="light-grey">{pizzaFiyati}₺</span>
                </div>
                <div className="d-flex justify-content-between mb-2 fw-bold pb-2">
                  <span className="light-grey">
                    Seçimler ({secilenMalzemeler.join(", ")})
                  </span>
                  <span className="light-grey">{malzemeFiyati}₺</span>
                </div>
                <div className="d-flex justify-content-between fw-bold">
                  <span>Toplam</span>
                  <span>{toplamFiyat}₺</span>
                </div>
              </div>
            </div>

            {/* Sipariş Butonu */}
            <button
              className="order-button btn btn-warning py-3 shadow-sm d-flex justify-content-center align-items-center"
              style={{
                borderRadius: "0 0 8px 8px",
                fontSize: "1.1rem",
              }}
              type="submit"
              disabled={isFormInvalid || loading} //Form geçersizse veya yükleniyorsa butonu kapat
              onClick={handleSubmit}
            >
              <span className="fw-bold">
                {loading ? "SİPARİŞİNİZ HAZIRLANIYOR..." : "SİPARİŞ VER"}
              </span>
            </button>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}

export default OrderForm;
