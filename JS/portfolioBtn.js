const portfolio = document.getElementById("modal1");
const certification = document.getElementById("modal2");
const skills = document.getElementById("modal3");
const university = document.getElementById("modal4");

const btnPortfolio = document.getElementById("btn-choix1");
const btnCertification = document.getElementById("btn-choix2");
const btnSkills = document.getElementById("btn-choix3");
const btnUniversity = document.getElementById("btn-choix4");

function showModal(modalToShow, btnToHighlight) {
    // Masquer tous les modaux
    portfolio.classList.remove("show");
    certification.classList.remove("show");
    skills.classList.remove("show");
    university.classList.remove("show");

    // Réinitialiser l'opacité
    portfolio.style.opacity = "0";
    certification.style.opacity = "0";
    skills.style.opacity = "0";
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
  btnCertification.style.backgroundColor = "transparent"; // Couleur de fond transparente
  btnSkills.style.backgroundColor = "transparent"; // Couleur de fond transparente
  btnUniversity.style.backgroundColor = "transparent"; // Couleur de fond transparente

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

btnCertification.addEventListener("click", function () {
    showModal(certification, btnCertification);
});

btnSkills.addEventListener("click", function () {
    showModal(skills, btnSkills);
});
btnUniversity.addEventListener("click", function () {
    showModal(university, btnUniversity);
});
