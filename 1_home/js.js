let pointers = Array.from(document.getElementsByClassName("map-pointer"));
pointers.forEach((pointer) => {
  pointer.addEventListener("click", () => {
    let testo = "";
    let titolo = "";
    switch (pointer.id) {
      case "pointer1":
        testo = content.pointer1.testo;
        titolo = content.pointer1.titolo;
        break;
      case "pointer2":
        testo = content.pointer2.testo;
        titolo = content.pointer2.titolo;
        break;
      case "pointer3":
        testo = content.pointer3.testo;
        titolo = content.pointer3.titolo;
        break;
      case "pointer4":
        testo = content.pointer4.testo;
        titolo = content.pointer4.titolo;
        break;
    }

    let popUp = document.getElementById("map-info-panel");
    let popUpTitolo = popUp.querySelector("h2");
    let popUpTesto = popUp.querySelector("p");

    popUpTesto.innerHTML = testo
    popUpTitolo.innerHTML = titolo
    popUp.style.display = "block";
    setTimeout(() => {
      popUp.style.opacity = "0.9";
    }, 100);

    document.getElementById("map").style.filter = "blur(5px)";
  });
});

let closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", () => {
  let popUp = document.getElementById("map-info-panel");
  popUp.style.opacity = "0";
  setTimeout(() => {
    popUp.style.display = "none";
  }, 500);

  document.getElementById("map").style.filter = "none";
});

let pin = Array.from(document.getElementsByClassName("map-pointer"));
pin.map((singlePin, i) => {
  playAnimation(singlePin, 2000);
});

function playAnimation(singlePin, timer) {
  singlePin.style.animation = "pinAnimation 0.3s ease-in-out";
  setTimeout(function () {
    singlePin.style.animation = "none";
    setTimeout(playAnimation, timer, singlePin, timer);
  }, 300);
}

const content = {
  pointer1: {
    titolo: "DOLCE MAREA",
    testo: `Dolce Marea è un quartiere incantevole situato direttamente sull'acqua, con case e strutture costruite su palafitte o su isolette galleggianti. Le strade sono sostituite da canali navigabili, attraversati da piccole imbarcazioni incantate che trasportano gli abitanti da un luogo all'altro. Le case sono decorate con conchiglie incantate e alghe colorate, e le luci notturne si riflettono sulle onde tranquille, creando uno spettacolo luminoso e magico. Le creature magiche e fatate abitano le acque circostanti, nuotando tra i coralli incantati e danzando sotto la luna piena. È un luogo dove la magia e la natura si fondono armoniosamente, creando un'esperienza unica e incantevole per chiunque vi abiti o lo visiti.`,
  },
  pointer2: {
    titolo: "castello goloso",
    testo: `Benvenuti nel cuore di Etheria, il quartiere noto come "Castello Goloso". Qui, le strade lastricate di caramelle e cioccolato conducono attraverso un regno delizioso di prelibatezze e incantevoli aromi. Le case sono fatte di biscotti glassati e creme pasticcere, mentre gli alberi fruttati offrono frutti zuccherini che si dondolano al vento come dolci pendenti.
     La piazza centrale, chiamata Piazza del Cioccolato, è circondata da pasticcerie luccicanti e caffetterie che emanano il profumo avvolgente di caffè appena tostato. Entra e scopri le dolci leccornie.`,
  },
  pointer3: {
    titolo: "FORESTA INCANTATA",
    testo: `La Foresta Incantata, che circonda Etheria, è un luogo intriso di magia dove la natura selvaggia si fonde con l'incanto. Qui, gli alberi possiedono una vita propria, intrecciando le loro fronde per formare un tetto verde sopra sentieri tortuosi e radure segrete. Tra le loro ombre danzano creature magiche, come fate luminose che svolazzano tra i rami e gnomi curiosi che abitano piccoli nascondigli nascosti sotto le radici degli alberi.`,
  },
  pointer4: {
    titolo: "DISTRETTO DORATO",
    testo: `Il Distretto Dorato è una meraviglia architettonica situata nella città di Etheria. Questo quartiere è un'imponente testimonianza di ricchezza e lusso, interamente costruito con l'oro più prezioso. Le strade sono lastricate conlastre d'oro, mentre gli edifici sfoggiano facciate scintillanti e dettagli elaborati, tutti realizzati con il prezioso metallo. Le decorazioni sontuose, tra cui statue e fontane, brillano sotto il sole, creando un'atmosfera di splendore senza pari`,
  },
};
