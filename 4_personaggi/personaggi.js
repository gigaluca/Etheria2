let personaggi = Array.from(document.getElementsByClassName("pers-selectable"));
personaggi.map((personaggioSingolo) => {
    personaggioSingolo.addEventListener("click", (e) => {

        let lastPersSelected = document.getElementsByClassName("pers-selected")[0];
        let lastPersInfo = document.getElementById(lastPersSelected.id + "-info")
        let newPersInfo = document.getElementById(personaggioSingolo.id + "-info")
        lastPersInfo.style.display = "none"
        newPersInfo.style.display = "flex"
        lastPersSelected.classList.remove("pers-selected");
        personaggioSingolo.classList.add("pers-selected");

    });
});