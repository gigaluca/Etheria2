let rotella_selezionata = document.getElementsByClassName(
  "rotella-selezionata"
)[0];
let rotelle_selezionabili = Array.from(
  document.getElementsByClassName("rotella-selezionabile")
);

function setQuartiere(className) {
  let castello_goloso_element = Array.from(
    document.getElementsByClassName("castello-goloso")
  );
  let foresta_incantata_element = Array.from(
    document.getElementsByClassName("foresta-incantata")
  );
  let dolce_marea_element = Array.from(
    document.getElementsByClassName("dolce-marea")
  );
  let distretto_dorato_element = Array.from(
    document.getElementsByClassName("distretto-dorato")
  );
  castello_goloso_element.map((elemento) => {
    elemento.style.display = "none";
  });
  foresta_incantata_element.map((elemento) => {
    elemento.style.display = "none";
  });
  dolce_marea_element.map((elemento) => {
    elemento.style.display = "none";
  });
  distretto_dorato_element.map((elemento) => {
    elemento.style.display = "none";
  });

  let toChange = Array.from(document.getElementsByClassName(className));
  toChange.map((elemento) => {
    elemento.style.display = "block";
  });
}
rotelle_selezionabili.forEach((rotella) => {
  rotella.addEventListener("click", () => {
    let isMobile = window.innerWidth < 991 ? true : false;

    if (!Array.from(rotella.classList).includes("rotella-selezionata")) {
      let carouselString = "";
      let imgEstention = rotella.getAttribute("id");
      switch (rotella.getAttribute("id")) {
        case "castello-goloso":
          carouselString = content.castello_goloso;
          break;
        case "foresta-incantata":
          carouselString = content.foresta_incantata;
          break;
        case "dolce-marea":
          carouselString = content.dolce_marea;
          break;
        case "distretto-dorato":
          carouselString = content.distretto_dorato;
          break;
      }
      

        let carouselImages = Array.from(
          document.getElementsByClassName("carousel-image")
        );
        carouselImages.map((image, index) => {
          image.src = "img/img" + (index + 1) + "-" + imgEstention + ".svg";
        });
        let galleryImages = Array.from(
          document.getElementsByClassName("gallery-image")
        );
        galleryImages.map((image, index) => {
          image.src = "img/img" + (index + 1) + "-" + imgEstention + ".svg";
        });
        let carouselElement = document.getElementById("carouselContainer");
        carouselElement.innerHTML = carouselString;
      

      setQuartiere(rotella.getAttribute("id"));
      rotella.classList.add("rotella-selezionata");
      rotella.classList.remove("rotella-selezionabile");

      rotella_selezionata.classList.add("rotella-selezionabile");
      rotella_selezionata.classList.remove("rotella-selezionata");

      rotella_selezionata = document.getElementsByClassName(
        "rotella-selezionata"
      )[0];
    }
  });
});

content = {
  castello_goloso: ` <div class="eventi no-mobile castello-goloso">
  <h2 class="subtitle center-subtitle">eventi castello goloso</h2>
  <br />
  <div id="carousel-eventi" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        data-target="#carousel-eventi"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carousel-eventi" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-container">
          <img
            class="d-block"
            src="img/carousel_image2.svg"
            alt="First slide"
          />
          <div class="text">
            <h2 class="subtitle">3 febbraio</h2>
            <p>SAPORI MAGICI</p>
            <p>
              Questo incantevole evento è interamente incentrato
              sull'assaggio di torte magiche, creazioni uniche che
              mescolano sapientemente ingredienti magici e dolci
              tradizionali.
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-container">
          <img
            class="d-block"
            src="img/carousel_image3.svg"
            alt="First slide"
          />
          <div class="text">
            <h2 class="subtitle">9 febbraio</h2>
            <p>CACCIA ALLE DOLCI LECCORNIE</p>
            <p>
              Questo evento unisce il divertimento di una caccia al tesoro
              con la golosità dei dolci più prelibati. La città si
              trasforma in un grande campo di gioco, con mappe dettagliate
              che guidano i partecipanti.
            </p>
          </div>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carousel-eventi"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carousel-eventi"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <div class="col-12 mt-3 d-flex justify-content-center">
    <button class="btn btn-primary" type="button">
      <span class="text">SCOPRI IL FESTIVAL</span>
    </button>
  </div>
</div>`,
  dolce_marea: `<div class="eventi no-mobile dolce-marea">
<h2 class="subtitle center-subtitle">eventi dolce marea</h2>
<br />
<div id="carousel-eventi" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li
      data-target="#carousel-eventi"
      data-slide-to="0"
      class="active"
    ></li>
    <li data-target="#carousel-eventi" data-slide-to="1"></li>
    <li data-target="#carousel-eventi" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-container">
        <img
          class="d-block"
          src="img/carousel_image4.svg"
          alt="First slide"
        />
        <div class="text">
          <h2 class="subtitle">4 febbraio</h2>
          <p>DANZA DELLE ONDE LUMINOSE</p>
          <p>
            Durante il festival, la spiaggia si anima con la "Danza
            delle Onde Luminose", uno spettacolo di danza acquatica e
            giochi di luce che riflettono il fascino dell'oceano.
          </p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-container">
        <img
          class="d-block"
          src="img/carousel_image5.svg"
          alt="First slide"
        />
        <div class="text">
          <h2 class="subtitle">8 febbraio</h2>
          <p>SFILATA DELLE MASCHERE MAGICHE</p>
          <p>
            Durante questa festa annuale, gli abitanti e i visitatori
            del quartiere sono invitati a indossare maschere elaborate e
            affascinanti, che celano segreti e identità sotto uno strato
            di incanto.
          </p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-container">
        <img
          class="d-block"
          src="img/carousel_image1.svg"
          alt="First slide"
        />
        <div class="text">
          <h2 class="subtitle">10 febbraio</h2>
          <p>GIOCHI DA SPIAGGIA INCANTATI 2</p>
          <p>
            Dolce Marea, vengono organizzati giochi da spiaggia magici,
            tra cui gare di nuoto con creature marine incantate,
            castelli di sabbia animati e sfide di abilità acquatiche.
          </p>
        </div>
      </div>
    </div>
  </div>
  <a
    class="carousel-control-prev"
    href="#carousel-eventi"
    role="button"
    data-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#carousel-eventi"
    role="button"
    data-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div class="col-12 mt-3 d-flex justify-content-center">
  <button class="btn btn-primary" type="button">
    <span class="text">SCOPRI IL FESTIVAL</span>
  </button>
</div>
</div>`,
  distretto_dorato: ` <div class="eventi no-mobile distretto-dorato">
<h2 class="subtitle center-subtitle">eventi distretto dorato</h2>
<br />
<div
  id="carousel-eventi"
  class="carousel slide"
  data-ride="carousel"
>
  <ol class="carousel-indicators">
    <li
      data-target="#carousel-eventi"
      data-slide-to="0"
      class="active"
    ></li>
    <li
      data-target="#carousel-eventi"
      data-slide-to="1"
    ></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="carousel-container">
        <img
          class="d-block"
          src="img/carousel_image6.svg"
          alt="First slide"
        />
        <div class="text">
          <h2 class="subtitle">2 febbraio</h2>
          <p>SINFONIA DI LUCI</p>
          <p>
            Durante questa straordinaria celebrazione, le strade
            lastricate d'oro del quartiere vengono illuminate da
            migliaia di luci scintillanti, creando uno spettacolo di
            luce e colore senza eguali.
          </p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="carousel-container">
        <img
          class="d-block"
          src="img/carousel_image7.svg"
          alt="First slide"
        />
        <div class="text">
          <h2 class="subtitle">7 febbraio</h2>
          <p>FESTA DELLE BOLLE DI SAPONE</p>
          <p>
            Le strade lastricate d'oro del quartiere di bolle di sapone
            scintillanti. I festeggiamenti iniziano con una parata di
            artisti e artiste del sapone che creano bolle di tutte le
            forme e dimensioni.
          </p>
        </div>
      </div>
    </div>
  </div>
  <a
    class="carousel-control-prev"
    href="#carousel-eventi"
    role="button"
    data-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#carousel-eventi"
    role="button"
    data-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div class="col-12 mt-3 d-flex justify-content-center">
  <button class="btn btn-primary" type="button">
    <span class="text">SCOPRI IL FESTIVAL</span>
  </button>
</div>
</div>`,
  foresta_incantata: `
<div id="carouselContainer">
<div class="eventi no-mobile foresta-incantata" id="carousel-eventi">
  <h2 class="subtitle center-subtitle">eventi foresta incantata</h2>
  <br />
  <div
    id="carousel-eventi-foresta-incantata"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carousel-eventi-foresta-incantata"
        data-slide-to="0"
        class="active"
      ></li>
      <li
        data-target="#carousel-eventi-foresta-incantata"
        data-slide-to="1"
      ></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="carousel-container">
          <img
            class="d-block"
            src="img/carousel_image8.svg"
            alt="First slide"
          />
          <div class="text">
            <h2 class="subtitle">1 febbraio</h2>
            <p>SENTIERO DELLE CREATURE</p>
            <p>
            I partecipanti sono invitati a percorrere il sentiero, dove incontrano creature magiche provenienti dai recessi più profondi della foresta. Fate luminose danzano tra gli alberi, gnomi curiosi emergono dalle radici.
            </p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-container">
          <img
            class="d-block"
            src="img/carousel_image9.svg"
            alt="First slide"
          />
          <div class="text">
            <h2 class="subtitle">6 febbraio</h2>
            <p>CONCERTO NELLA FORESTA</p>
            <p>
            Questo evento trasforma la tranquilla bellezza della natura nella cornice perfetta per un'esperienza musicale unica.  Questo concerto porta insieme la musica e la natura in un connubio armonioso e suggestivo.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <a
      class="carousel-control-prev"
      href="#carousel-eventi-foresta-incantata"
      role="button"
      data-slide="prev"
    >
      <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carousel-eventi-foresta-incantata"
      role="button"
      data-slide="next"
    >
      <span
        class="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <div class="col-12 mt-3 d-flex justify-content-center">
    <button class="btn btn-primary" type="button">
      <span class="text">SCOPRI IL FESTIVAL</span>
    </button>
  </div>
</div>
</div>`,
};
