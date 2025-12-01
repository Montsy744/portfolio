window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const elementsToFade = document.querySelectorAll("header, main, footer");

    // Fade-out loader
    loader.style.opacity = "0";

    // Quand le fondu est terminé
    setTimeout(() => {
        loader.style.display = "none";

        // Fade-in du contenu
        elementsToFade.forEach(el => {
            el.style.opacity = "1";
        });

    }, 400); // durée du fade-out du loader
});
