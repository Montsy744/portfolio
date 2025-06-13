const langSelector = document.getElementById("language-selector");

function applyTranslations(data) {
    const keys = Object.keys(data);
    keys.forEach((key) => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = data[key];
        }
    });
}

function loadLanguage(lang) {
    fetch(`./Json/${lang}.json`)
    .then((res) => res.json())
    .then((data) => applyTranslations(data))
    .catch((err) => console.error("Erreur de chargement :", err));
}

// Détecter la langue du navigateur ou par défaut 'en'
const userLang = navigator.language.startsWith("fr") ? "fr" : "en";
langSelector.value = userLang;
loadLanguage(userLang);

// Changement manuel
langSelector.addEventListener("change", (e) => {
    loadLanguage(e.target.value);
});