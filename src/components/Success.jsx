import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Label, Input, Card } from "reactstrap";
import Footer from "./Footer";
import "../CSS/Success.css";

function Success({ orderData }) {
  const {
    isim,
    boyut,
    hamur,
    malzemeler,
    adet,
    pizzaFiyati,
    malzemeFiyati,
    toplamFiyat,
  } = orderData;
  return (
    <div className="success-page order-page-wrapper">
      {/* Sipariş Alındı Bölümü */}
      <section className="main-section text-center">
        <img
          className="my-5"
          src="../public/assets/iteration-1/logo.svg"
          alt="logo"
        />
        <p className="slogan">lezzetin yolda</p>
        <h1>SİPARİŞ ALINDI</h1>
        <hr className="success-divider border-1 mx-auto" />
        <h4>Position Absolute Acı Pizza</h4>

        {/* Sipariş Özeti */}
        <div
          className="siparis-ozet text-start mb-4"
          style={{ width: "250px", margin: "0 auto" }}
        >
          <p>
            Boyut:{" "}
            <strong>
              {boyut === "buyuk"
                ? "L"
                : boyut === "orta"
                  ? "M"
                  : boyut === "kucuk"
                    ? "S"
                    : "-"}
            </strong>
          </p>
          <p>
            Hamur: <strong>{hamur}</strong>
          </p>
          <p>
            Ek Malzemeler: <strong>{malzemeler.join(", ")}</strong>
          </p>
        </div>

        {/* Sipariş Ücreti */}
        <div
          style={{
            width: "400px",
            margin: "5rem auto",
            marginBottom: "10rem",
            border: "1px solid white",
            borderRadius: "8px",
            padding: "30px",
            textAlign: "left",
          }}
        >
          <h5 className="mb-4 text-center">Sipariş Toplamı</h5>

          <div className="d-flex justify-content-between mb-2">
            <span>Pizza</span>
            <span>{pizzaFiyati}₺</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Seçimler</span>
            <span>{malzemeFiyati}₺</span>
          </div>

          <div
            className="d-flex justify-content-between mt-3"
            style={{ fontSize: "1.1rem", fontWeight: "bold" }}
          >
            <span>Toplam</span>
            <span>{toplamFiyat}₺</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Success;
