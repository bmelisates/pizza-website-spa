describe("Anasayfa Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Acıktım butonuna tıklandığında sipariş sayfasına yönlendiriyor mu?", () => {
    cy.get("#hero-order-button").click();
    cy.url().should("include", "/pizza");
  });

  it("Sipariş Ver butonlarına tıklandığında sipariş sayfasına yönlendiriyor mu?", () => {
    cy.get(".order-button").eq(0).click();
    cy.url().should("include", "/pizza");
    cy.go("back");
    cy.get(".order-button").eq(1).click();
    cy.url().should("include", "/pizza");
    cy.go("back");
    cy.get(".order-button").eq(2).click();
    cy.url().should("include", "/pizza");
  });
});

describe("Pizza Sipariş Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/pizza");
  });

  it("İsim inputuna metin giriliyor mu?", () => {
    cy.get("input[name='isim']").type("melis").should("have.value", "melis");
  });

  it("İsim 3 karakterden az olduğunda hata mesajı veriyor mu?", () => {
    cy.get("input[name='isim']").type("me");
    cy.contains("Lütfen en az 3 karakter giriniz.").should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("Çoklu malzeme seçimi yapılabiliyor mu?", () => {
    cy.visit("http://localhost:5173/pizza");
    cy.get("#pepperoni").check();
    cy.get("#misir").check();
    cy.get("#mantar").check();
    cy.get("#tavuk-izgara").check();
    cy.get("#sogan").check();
    cy.get('input[type="checkbox"]:checked').should("have.length", 5);
  });

  it("4'ten az malzeme seçildiğinde sipariş butonu pasif kalıyor mu?", () => {
    cy.get('input[name="isim"]').type("melis");
    cy.get('[data-cy="size-m-label"]').click();
    cy.get('select[name="hamur"]').select(1);
    cy.contains("button", "+").click();
    cy.get("#pepperoni").check();
    cy.get("#misir").check();
    cy.get("#mantar").check();
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("10'dan fazla malzeme seçimine izin vermiyor mu?", () => {
    const malzemeler = [
      "#pepperoni",
      "#domates",
      "#biber",
      "#misir",
      "#sucuk",
      "#kanada-jambonu",
      "#tavuk-izgara",
      "#jalepeno",
      "#sogan",
      "#sarimsak",
    ];
    malzemeler.forEach((id) => {
      cy.get(id).check();
    });
    cy.get("#mantar").should("be.disabled");
  });

  it("10 malzeme seçilince diğerleri disabled olmalı, bir seçim kaldırılınca tekrar enabled olmalı", () => {
    const malzemeler = [
      "#pepperoni",
      "#domates",
      "#biber",
      "#misir",
      "#sucuk",
      "#kanada-jambonu",
      "#tavuk-izgara",
      "#jalepeno",
      "#sogan",
      "#sarimsak",
    ];

    malzemeler.forEach((id) => {
      cy.get(id).check();
    });
    // Mantarın disabled olduğunu doğrula
    cy.get("#mantar").should("be.disabled");
    // Seçili olanlardan birinin işaretini kaldır
    cy.get("#pepperoni").uncheck();
    //  Şimdi mantar kutusunun tekrar tıklanabilir (enabled) olduğunu doğrula
    cy.get("#mantar").should("not.be.disabled");
    cy.get("#mantar").check().should("be.checked");
  });

  it("Hamur kalınlığı seçimi değiştirilip varsayılana dönülünce buton tekrar disabled olmalı", () => {
    cy.get('input[name="isim"]').type("melis");
    cy.get('[data-cy="size-m-label"]').click();
    cy.contains("button", "+").click();
    cy.get("#pepperoni").check();
    cy.get("#misir").check();
    cy.get("#sucuk").check();
    cy.get("#mantar").check();
    // Hamuru seç ve butonun aktif olduğunu doğrula
    cy.get('select[name="hamur"]').select(1);
    cy.get('button[type="submit"]').should("not.be.disabled");
    // Seçimi varsayılan (geçersiz) seçeneğe geri al
    cy.get('select[name="hamur"]').select(0);
    //Buton tekrar disabled olmalı
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("Form gönderilebiliyor mu ve sonuç başarılı mı?", () => {
    cy.get('input[name="isim"]').type("melis");
    cy.get('select[name="hamur"]').select(1);
    cy.get('[data-cy="size-m-label"]').click();
    cy.get("#sucuk").check();
    cy.get("#biber").check();
    cy.get("#mantar").check();
    cy.get("#ananas").check();
    cy.contains("button", "+").click();
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/success");
  });
});
