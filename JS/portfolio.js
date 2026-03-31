import { dataPortfolioPerso, dataPortfolioUniv } from "./portfolioProjet.js";

const renderHtmlStack = (imgStack, className) => {
  let htmlTemp = "";

  imgStack.forEach((prop) => {
    htmlTemp += `<img src="${prop}" alt="logo de la Stack"  class="${className}"></img>`;
  });

  return htmlTemp;
};

const liensProjetFunc = (lienCode, lienSite) => {
  let liensProjet = "";

  if (lienCode === `video`) {
    liensProjet += `
      <a href="" class="btnCard code" id="video">Voir la vidéo</a>
    `;
  } else if (lienSite === ``) {
    liensProjet += `
        <a href="${lienCode}" target="_blank" class="btnCard code">Voir le code</a>
    `;
  } else {
    liensProjet += `
        <a href="${lienSite}" target="_blank" class="btnCard site">Voir le projet</a>
        <a href="${lienCode}" target="_blank" class="btnCard code">Voir le code</a>
    `;
  }

  return liensProjet;
};

const renderHtmlPortfolio = ({ imgProjet, imgStack }) => {
  return `<div class="card">
            <div class="imgContainer">
                <img src="${imgProjet}" alt="Image du lancement du site" class="card__image imgProjet">
                <div>
                    ${renderHtmlStack(imgStack, "stack")}
                </div>
            </div>
        </div>`;
};

const renderHtmlPortfolioTel = ({
  imgProjet,
  title,
  description,
  lienCode,
  lienSite,
  imgStack,
}) => {
  let liensProjetPersoTel = liensProjetFunc(lienCode, lienSite);

  return `<div class="cardTel">
            <div class="imgContainerTel">
              <img src="${imgProjet}" alt="Image du lancement du site" class="card__image">
              <div>
                ${renderHtmlStack(imgStack, "stack")}
              </div>
            </div>
                        
            <div class="card__content_tel">
              <p class="card__title_tel">${title}</p>
              <p class="card__description_tel">${description}</p>
              <div class="btnContainer">
                  ${liensProjetPersoTel}
              </div>
            </div>
          </div>`;
};

let htmlPersoOrdi = "";
let htmlPersoTel = "";

let htmlUnivOrdi = "";
let htmlUnivTel = "";

const projetPersoOrdi = document.querySelector(`#modalContainer`);
const projetUnivOrdi = document.querySelector(`#modalContainerUnniversitaire`);

const projetPersoTel = document.querySelector(`#modalContainerTelPerso`);
const projetUnivTel = document.querySelector(`#modalContainerTelUniv`);

dataPortfolioPerso.forEach((prop) => {
  htmlPersoOrdi += renderHtmlPortfolio(prop);
  htmlPersoTel += renderHtmlPortfolioTel(prop);
});
projetPersoOrdi.innerHTML = htmlPersoOrdi;
projetPersoTel.innerHTML = htmlPersoTel;

dataPortfolioUniv.forEach((prop) => {
  htmlUnivOrdi += renderHtmlPortfolio(prop);
  htmlUnivTel += renderHtmlPortfolioTel(prop);
});
projetUnivOrdi.innerHTML = htmlUnivOrdi;
projetUnivTel.innerHTML = htmlUnivTel;

projetPersoOrdi.querySelectorAll(".card").forEach((card, index) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#mainHeader").classList.add("hide");
    document.querySelector("#containerPortfolio").classList.add("hide");
    document.querySelector("#descriptionProject").classList.remove("hide");
    document.querySelector("#descriptionProject").classList.add("visible");
    renderHtmlDescriptionView(dataPortfolioPerso[index]);
  });
});

projetUnivOrdi.querySelectorAll(".card").forEach((card, index) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#mainHeader").classList.add("hide");
    document.querySelector("#containerPortfolio").classList.add("hide");
    document.querySelector("#descriptionProject").classList.remove("hide");
    document.querySelector("#descriptionProject").classList.add("visible");
    renderHtmlDescriptionView(dataPortfolioUniv[index]);
  });
});

const renderHtmlDescriptionView = ({
  imgProjet,
  title,
  description,
  analyse,
  lienCode,
  lienSite,
  imgStack,
}) => {
  let liensProjet = liensProjetFunc(lienCode, lienSite);

  document.querySelector("#descriptionTitle").innerHTML = `<h1>${title}</h1>`;
  document.querySelector("#imgDescription").innerHTML =
    `<img src="${imgProjet}" alt="Image du projet" />`;
  document.querySelector("#stackDescription").innerHTML = renderHtmlStack(
    imgStack,
    "stackDescription",
  );
  document.querySelector("#contentDescription").innerHTML = `
  <h2> Description </h2>
  <p class="descriptionText">${description}</p>

  ${
    analyse
      ? `
  <table class="analyseTable">
    <tbody>
      <tr>
        <td class="analyseLabel">Apprentissage</td>
        <td>${analyse.apprentissage}</td>
      </tr>
      <tr>
        <td class="analyseLabel">Difficultés</td>
        <td>${analyse.difficultes}</td>
      </tr>
      <tr>
        <td class="analyseLabel">Solutions</td>
        <td>${analyse.solutions}</td>
      </tr>
      <tr>
        <td class="analyseLabel">Compétences</td>
        <td>${analyse.competences.map(c => `<span class="badge-competence">${c}</span>`).join("")}</td>
      </tr>
      <tr>
        <td class="analyseLabel">Améliorations</td>
        <td>${analyse.ameliorations}</td>
      </tr>
    </tbody>
  </table>`
      : ``
  }
`;
  document.querySelector("#btnDescription").innerHTML = liensProjet;
};

document.querySelector("#goBackToPortfolio").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#mainHeader").classList.remove("hide");
  document.querySelector("#containerPortfolio").classList.remove("hide");
  document.querySelector("#descriptionProject").classList.remove("visible");
  document.querySelector("#descriptionProject").classList.add("hide");
});
