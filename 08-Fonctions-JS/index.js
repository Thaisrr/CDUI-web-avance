/* Les fonctions

- Bout de code qu'on peut répéter
- Créer des actions

- Les fonctions vont avoir un nom, paramètres ( opt ), un block d'action, et un retour (opt )
- Le code n'est pas exécuté automatiquement : il faut appeler la fonction

-> Du code réutilisable
-> De gagner en lisibilité
-> D'exécuter les actions quand on en a besoin

-> On écrit les fonctions en camelCase
 */

// Création de la fonction
function sayHello() {
    console.log("Hello World !");
}

// Appel de la fonction
sayHello();
sayHello();
sayHello();

function sum(a, b) {
    const result = a + b;
    console.log('Votre résultat : ', result)
}

sum(10, 10);
sum(18080, 89389038403);
let foo = 25;
let bar = 99;
sum(foo, bar);

function bonjour(name = 'Toto') {
    console.log("Bonjour " + name);
}

bonjour('Jane Doe'); // Bonjour Jane Doe
bonjour(); // Bonjour Toto


function multiply(a, b = 10) {
    console.log('Résultat : ', a * b);
}

multiply(20); // a = 20, b = 10
multiply(20, 5); // a = 20, b = 5


function calculComplexe(a, b, c) {
    const result = a * b * c;
    return result; // le return arrête la fonction
    console.log('Unreachable code -> code jamais lu');
}

const result = calculComplexe(3, 4, 5);

function isEmailCorrect(email) {
    // vérifier l'email
    return true // retourne si oui ou non l'email est valide
}

function isPaire(n) {
    if(n % 2) {
        return true;
    } else {
        return false;
    }
}


function isPaire2(n) {
    return n % 2;
}


function submit(email, password) {
    const isEmailValid = isEmailCorrect(email);
    //

    sendToAPI();
}

function sendToAPI() {

}

/****************************/


function launchGame() {
    const pc = Math.floor(Math.random() * 101);
    checkUserAnswer(pc);
    if(confirm('Recommencer ? ')) {
        launchGame();
    }
}

function checkUserAnswer(pc) {
    let answer = prompt("Entrez un nombre entre 0 et 100");
    answer = Number(answer);
    if(isAnswerValid(answer)) {
        if(answer === pc) {
            alert('Gagné')
        } else {
            alert('Perdu')
        }
    } else {
        alert('Réponse non valide')
    }
}

function isAnswerValid(a) {
    return !!a && !isNaN(a) && a > 0 && a < 100;
}


/******** Autres syntaxes *********/

function sum2(a, b) {
    return a + b;
}

const sum3 = function (a, b) {
    return a + b;
}
let res = sum3(2, 2);


const sum4 = (a, b) => a + b;
/*
Pour les fonctions fléchées, si le traitement se fait sur 1 seule ligne, et
SANS les accolades, le retour est implicite ( pas besoin de mettre le mot clef return )
 */

res = sum4(5, 5); // 10

const complex = (a, b) => {
    // Traitement sur plusieurs lignes
    return `Si besoin d'un return, il doit etre explicite`
}


// Ces syntaxes peuvent servir pour : les méthodes d'objets, ou les callbacks

