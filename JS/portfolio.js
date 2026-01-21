const dataPortfolio = [
  {
    imgProjet: "./../public/img/project/fondEdurhum.png",
    title: "Site du bureau des étudiants",
    description:
      "J'ai créé ce site pour le bureau des étudiants du BUT informatique de l'Université de Lille.",
    lienCode: "https://montsy744.github.io/edurhum-site/",
    lienSite: "https://github.com/Montsy744/edurhum-site",
    imgStack: [
      "./../public/img/stack/html.png",
      "./../public/img/stack/css.png",
      "./../public/img/stack/JS.png",
      "./../public/img/stack/git.png",
    ],
  },
];

const renderHtmlPortfolio = ({
  imgProjet,
  title,
  description,
  lienCode,
  lienSite,
  imgStack,
}) => {
  const liensProjet = "";

  if (lienSite === ``) {
    liensProjet += `
        <a href="${lienCode}" target="_blank" class="btnCard code">Voir le code</a>
    `;
  } else {
    liensProjet += `
        <a href="${lienSite}" target="_blank" class="btnCard site">Voir le projet</a>
        <a href="${lienCode}" target="_blank" class="btnCard code">Voir le code</a>
    `;
  }

  return `<div class="card">
            <div class="imgContainer">
                <img src="${imgProjet}" alt="Image du lancement du site" class="card__image">
                <div>
                    ${renderHtmlStack(imgStack)}
                </div>
            </div>
            <div class="card__content">
                <p class="card__title">${title}</p>
                <p class="card__description">${description}</p>
                <div class="btnContainer">
                    ${liensProjet}
                </div>
            </div>
        </div>`;
};

const projetPersoOrdi = document.querySelector(`#modalContainer`);
const projetUnivOrdi = document.querySelector(`#modalContainerUnniversitaire`);

const projetPersoTel = document.querySelector(`#modalContainerTelPerso`);
const projetUnivTel = document.querySelector(`#modalContainerTelUniv`);
