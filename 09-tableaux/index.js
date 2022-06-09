/*
Tableau / Array / Liste

-> Plusieurs données de même types enregistrées dans une même variable

 */

let vide = [];
const fruits = ['Pomme', 'Poires', 'Abricots'];
console.log(fruits);
fruits.push('Fraise');
console.log( fruits[0] );

// La position d'un élément dans un tableau s'appelle l'index

let index = fruits.indexOf('Poires'); // 1
index = fruits.indexOf('Patates'); // -1

fruits.splice(0, 1); // supprimer 1 élément à partir de l'index 0


let reversed = fruits.reverse();


for(let i = 0; i < 10; i++ ) {
    console.log('i = ', i);
}

console.log(`Il y a ${fruits.length} éléments dans mon tableau`);

for(let i = 0; i < fruits.length; i++) {
    console.log(`Element à l'index ${i} : ${fruits[i]}`);
}

function parcourirTableau(tableau, doSomething) {
    for(let i = 0; i < tableau.length; i++) {
        let element = tableau[i];
        doSomething(element, i);
    }
}


// 1ere solution
function displayElement(el, index) {
    console.warn(`Element à l'index ${index} : ${el}`)
}

parcourirTableau(fruits, displayElement);


parcourirTableau(fruits, function (el, index) {
    console.warn(`Element à l'index ${index} : ${el}`)
});

parcourirTableau(fruits, (el, index) => console.warn(`Element à l'index ${index} : ${el}`));


fruits.forEach(displayElement)

fruits.forEach(function (el, index) {
    // do something
})

fruits.forEach((el, index) => console.warn(`Element à l'index ${index} : ${el}`));

fruits.forEach((el, index) => {
    console.warn(`Element à l'index ${index} : ${el}`)
});

const modified = fruits.map((item) => item.toUpperCase() );
// retourne un nouveau tableau dans lequel les éléments du tableau fruit sont en majuscule

console.log(fruits);
console.log(modified);

// 1 retour implicite : pour les fonctions en 1 ligne
const arrow = (a, b, c, d) => a + b + c + d;

function arrow1(a, b, c, d) {
    return a + b + c + d;
}


const arrow3 = () => {
    // block d'instructions
    // de la fonction
    // sur plusieurs lignes
    // return (opt)
}


/*** En vrac *****/

console.log('Journaux');
console.info('Information');
console.warn('Warning');
console.error('Erreur');
console.debug('Debug');


/**
 * @param a : string
 * @param b : number
 * @return {boolean}
 *
 * @description Cette méthode fait des trucs super complexes
 */
function supercomplexe(a, b) {
    //
    return true
}



supercomplexe();


