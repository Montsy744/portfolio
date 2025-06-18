document.querySelectorAll(".liens a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        const targetId = this.getAttribute("href"); // Récupère l'ID de l'ancre
        const targetElement = document.querySelector(targetId); // Sélectionne l'élément cible

        // Défilement fluide vers l'élément cible
        targetElement.scrollIntoView({
        behavior: "smooth", // Effet de défilement fluide
        });
    });
});