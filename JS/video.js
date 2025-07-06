const maVideo = document.getElementById("maVideo");

const videoBtn = document.getElementById("video");
const videoBtnTel = document.getElementById("videoTel");

const close = document.getElementById("closeModalBtn");

const videoModal = document.getElementById("modalVideo");

videoBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    videoModal.classList.add("show");
    videoModal.style.opacity = "1"; // Assurez-vous que l'opacité est à 1
});

videoBtnTel.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    videoModal.classList.add("show");
    videoModal.style.opacity = "1"; // Assurez-vous que l'opacité est à 1
});

close.addEventListener("click", function() {
    videoModal.classList.remove("show");
    videoModal.style.opacity = "0"; // Assurez-vous que l'opacité est à 0
    maVideo.pause();
    maVideo.currentTime = 0; // Remet le timer à 0 (début)
});