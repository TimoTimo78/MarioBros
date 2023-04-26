const results = document.querySelector(".MarioBroscomp")
const jeu = document.querySelector(".MarioBros")
const mein_popUp = document.querySelector('.mein_popUp')

function Jeu (titre, consoles, annee) {
    this.titre = titre,
    this.consoles = consoles,
    this.annee = annee
}

let mesConsoles = new Jeu ("Super Mario Bros", "NES", 1985);
let mesConsoles1 = new Jeu ("Super Mario Bros. 2", "NES", 1987);
let mesConsoles2 = new Jeu ("Super Mario Bros. 3", "NES", 1988);
let mesConsoles3 = new Jeu ("Super Mario World", "Super Nintendo", 1990);
let mesConsoles4 = new Jeu ("Super Mario All-Stars", "Super Nintendo", 1993);
let mesConsoles5 = new Jeu ("Super Mario World 2: Yoshi's Island ", "Super Nintendo", 1995);
let mesConsoles6 = new Jeu ("Super Mario 64", "Nintendo 64", 1996);
let mesConsoles7 = new Jeu ("Super Mario Sunshine", "GameCube", 2002);
let mesConsoles8 = new Jeu ("Super Mario Galaxy", "Wii", 2007);
let mesConsoles9 = new Jeu ("Super Mario Galaxy 2", "Wii", 2010);

console.log(mesConsoles);

let myCollection = {...{mesConsoles}, ...{mesConsoles1}, ...{mesConsoles2}, ...{mesConsoles3}, ...{mesConsoles4}, ...{mesConsoles5}, ...{mesConsoles6}, ...{mesConsoles7}, ...{mesConsoles8}, ...{mesConsoles9}};

console.log(myCollection);

results.innerHTML = Object.values(myCollection).map( (jeu, index) =>`
    <div class="MarioBros">
        <h2>Titre :  ${jeu.titre}</h2>
        <h3>Consoles : ${jeu.consoles}</h3>
        <h4>Année : ${jeu.annee}</h4>
        <button class="mein_popUp" id = ${"MarioBros" + (index+=1)}>Détails</button>
    </div>
    `).join("");

    // console.log('mein_popUp');

    // for (let index = 0; index < mein_popUp.length; index++) {
    //     const jeu = mein_popUp [index];
    //     console.log(jeu.getAttribute('MarioBros'))
    // }

    // ************************************popUp************************************

    for (let index = 0; index < jeu.length; index++) {
        const jeu = boutons[index];
        console.log(jeu.getAttribute('MarioBros'));
        jeu.addEventListener('click', ()=>{
            console.log(jeu);
            popupContainer.classList.toggle('active');
            })
    }

// for (const key in mesConsoles){
//     console.log(mesConsoles[key]);
// }
// Let nom Objet = {... {nomObjetaintégrer},...{nomObjetaintégrer}};

// // exercice 2
// // demander à Anne Sophie pour l'exo 2

// /*création d'objets dans un objet*/
// /*spread operator*/
