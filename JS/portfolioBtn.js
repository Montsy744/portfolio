let portfolio, university;

if (window.innerWidth > 1000) {
    portfolio = document.getElementById("modal1");
    university = document.getElementById("modal2");
} else {
    portfolio = document.getElementById("modal3");
    university = document.getElementById("modal4");
}

portfolio.classList.remove("show");
university.classList.remove("show");

const btnPortfolio = document.getElementById("btn-choix1");
const btnuniversity = document.getElementById("btn-choix2");

let btnActif = btnPortfolio; // Par défaut, le premier bouton est actif

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

    
    // Mettre en surbrillance le bouton sélectionné en fonction de jour/nuit
    if (document.body.classList.contains('dusk')) {
        btnToHighlight.style.backgroundColor = "#B5A76E"; // Couleur dusk
    } else if (document.body.classList.contains('night')) {
        btnToHighlight.style.backgroundColor = "#2F3F78"; // Couleur night
    } else {
        btnToHighlight.style.backgroundColor = "#597C3A"; // Couleur jour (par défaut)
    }

    btnActif = btnToHighlight;
}

function updateActiveBtnColor() {
    // Réinitialise les deux boutons
    btnPortfolio.style.backgroundColor = "transparent";
    btnuniversity.style.backgroundColor = "transparent";
    // Applique la couleur sur le bouton actif selon la classe du body
    if (document.body.classList.contains('dusk')) {
        btnActif.style.backgroundColor = "#B5A76E";
    } else if (document.body.classList.contains('night')) {
        btnActif.style.backgroundColor = "#2F3F78";
    } else {
        btnActif.style.backgroundColor = "#597C3A";
    }
}

// Afficher le modal portfolio par défaut
portfolio.classList.add("show");
portfolio.style.opacity = "1"; // Assurez-vous que l'opacité est à 1

btnPortfolio.addEventListener("click", function () {
    showModal(portfolio, btnPortfolio);
});

btnuniversity.addEventListener("click", function () {
    showModal(university, btnuniversity);
});

