const portfolio = document.getElementById("modal1");
const university = document.getElementById("modal2");



const btnPortfolio = document.getElementById("btn-choix1");
const btnuniversity = document.getElementById("btn-choix2");


function showModal(modalToShow, btnToHighlight) {
    // Masquer tous les modaux
    portfolio.classList.remove("show");
    university.classList.remove("show");


    // Réinitialiser l'opacité
    portfolio.style.opacity = "0";
    university.style.opacity = "0";


    // Afficher le modal sélectionné
    modalToShow.classList.add("show");

    // Changer l'opacité après un court délai pour permettre la transition
    setTimeout(() => {
        modalToShow.style.opacity = "1";
    }, 10);

    // Faire défiler la page pour que les boutons soient en haut de l'écran
    const offset = btnPortfolio.offsetTop; // Obtenir la position du bouton
    window.scrollTo({
        top: offset - 50, // Ajuster le décalage pour que le bouton soit visible
        behavior: "smooth", // Défilement fluide
    });

  // Réinitialiser les styles de fond des boutons
  btnPortfolio.style.backgroundColor = "transparent"; // Couleur de fond transparente
  btnuniversity.style.backgroundColor = "transparent"; // Couleur de fond transparente


  // Mettre en surbrillance le bouton sélectionné
  btnToHighlight.style.backgroundColor = "rgba(107, 104, 128, 0.6)"; // Couleur de fond du bouton actif
}

// Afficher le modal portfolio par défaut
portfolio.classList.add("show");
portfolio.style.opacity = "1"; // Assurez-vous que l'opacité est à 1

btnPortfolio.addEventListener("click", function () {
    console.log("cliqué");
    showModal(portfolio, btnPortfolio);
});

btnuniversity.addEventListener("click", function () {
    showModal(university, btnuniversity);
});

