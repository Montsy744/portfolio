
const starsContainer = document.querySelector(".stars");
const containerHeight = document.querySelector(".container").offsetHeight;
const maxStars = 10; // Nombre maximum d'étoiles
let currentStars = 0; // Compteur d'étoiles actuelles

function createStar() {
  if (currentStars >= maxStars) return; // Ne pas créer plus d'étoiles si le maximum est atteint

  const star = document.createElement("div");
  star.classList.add("star");

  // Position aléatoire
  const leftPosition = Math.random() * 100; // Pourcentage
  star.style.left = `${leftPosition}vw`;

  // Taille aléatoire
  const size = Math.random() * 5 + 2; // Taille entre 2 et 7px
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  // Vitesse aléatoire
  const speed = Math.random() * 3 + 2; // Vitesse entre 2 et 5 secondes
  star.style.transition = `transform ${speed}s linear`;

  starsContainer.appendChild(star);
  currentStars++; // Incrémente le compteur d'étoiles

  // Démarrer l'animation
  setTimeout(() => {
    star.style.transform = `translateY(-${containerHeight + 10}px)`; // Déplace l'étoile vers le haut
  }, 100);

  // Réinitialiser l'étoile après l'animation
  star.addEventListener("transitionend", () => {
    star.remove(); // Supprime l'étoile après l'animation
    currentStars--; // Décrémente le compteur d'étoiles
    createStar(); // Crée une nouvelle étoile
  });
}

// Créer plusieurs étoiles en continu
setInterval(createStar, 500); // Crée une étoile toutes les 500ms
