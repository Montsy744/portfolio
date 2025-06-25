const checkbox = document.getElementById('checkbox');


function updateActiveBtnColor() {
    // Réinitialise les deux boutons
    btnPortfolio.style.backgroundColor = "transparent";
    btnuniversity.style.backgroundColor = "transparent";
    // Applique la couleur sur le bouton actif
    if (checkbox.checked) {
        btnActif.style.backgroundColor = "#597C3A";
    } else {
        btnActif.style.backgroundColor = "#2F3F78";
    }
}

function updateBackground() {
    // Met le thème dusk immédiatement
    document.body.classList.add('dusk');
    document.body.classList.remove('night');
    document.body.classList.remove('day');

    // Après 5 secondes, applique le vrai thème
    setTimeout(() => {
        document.body.classList.remove('dusk');
        if (checkbox.checked) {
            document.body.classList.remove('night');
            localStorage.setItem('theme', 'day');
        } else {
            document.body.classList.add('night');
            localStorage.setItem('theme', 'night');
        }
        updateActiveBtnColor();
    }, 5000);
}

// Applique le thème au chargement de la page
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'night') {
    document.body.classList.add('night');
    checkbox.checked = false;
} else {
    document.body.classList.remove('night');
    checkbox.checked = true;
}

checkbox.addEventListener('change', updateBackground);