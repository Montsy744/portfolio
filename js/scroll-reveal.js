// Sélectionner tous les éléments qui ont la classe 'reveal'
const elements = document.querySelectorAll(".reveal");

// Options pour l'Intersection Observer
const options = {
  root: null, // Utiliser la fenêtre de visualisation par défaut
  threshold: 0.3, // Un élément est considéré comme visible si 30% de celui-ci est dans la vue
};

// Fonction de callback qui sera exécutée lors de l'intersection
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Ajouter la classe 'visible' lorsque l'élément entre dans la vue
      entry.target.classList.add("visible");
      entry.target.classList.remove("disappear-up", "disappear-down"); // Enlever les classes de disparition
    } else {
      // Vérifier la direction du défilement
      if (entry.boundingClientRect.top < 0) {
        // L'élément sort par le haut
        entry.target.classList.remove("visible");
        entry.target.classList.add("disappear-up");
      } else {
        // L'élément sort par le bas
        entry.target.classList.remove("visible");
        entry.target.classList.add("disappear-down");
      }
    }
  });
};

// Créer une instance d'IntersectionObserver avec la fonction de callback et les options
const observer = new IntersectionObserver(handleIntersection, options);

// Observer chaque élément avec la classe 'reveal'
elements.forEach((element) => {
  const delay = element.getAttribute("data-delay");
  element.style.setProperty("--delay", `${delay}s`);
  observer.observe(element);
});
