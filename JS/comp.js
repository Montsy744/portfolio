const dataComp = [
    {
        name: "HTML",
        image: "./../public/img/stack/html.png"
    },
    {
        name: "CSS",
        image: "./../public/img/stack/css.png"
    },
    {
        name: "JavaScript",
        image: "./../public/img/stack/js.png"
    },
    {
        name: "Java",
        image: "./../public/img/stack/java.png"
    },
    {
        name: "SQL",
        image: "./../public/img/stack/sql.png"
    },
    {
        name: "git",
        image: "./../public/img/stack/git.png"
    },
    {
        name: "markdown",
        image: "./../public/img/stack/md.png"
    },
    {
        name: "python",
        image: "./../public/img/stack/python.png"
    },
    {
        name: "TypeScript",
        image: "./../public/img/stack/TypeScript.png"
    }
    
]

let htmlComp = "";
const divComp = document.querySelector(`#skilsContaineur`);

const renderHtmlComp = ({name, image}) => {
    return `<div class="skilsItem" id="${name}">
                <div class="containerPosition">
                    <div class="conatinerLogo">
                        <img src="${image}" alt="logo ${name}" class="bg">
                        <img src="${image}" alt="logo ${name}" class="devant">
                    </div>
                </div>
                <p>${name}</p>
            </div>`
}

dataComp.forEach((prop) => {
    htmlComp += renderHtmlComp(prop);
});

divComp.innerHTML = htmlComp