const checkbox = document.getElementById('checkbox');

function updateBackground() {
    if (checkbox.checked) {
        document.body.classList.remove('night');
        localStorage.setItem('theme', 'day');
    } else {
        document.body.classList.add('night');
        localStorage.setItem('theme', 'night');
    }
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