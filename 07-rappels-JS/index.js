console.log('Hello World');

/*
Commentaire sur plusieurs lignes
---
dqjdkslq
 */

// Commentaire sur une seule ligne

/**
 * Pour la documentation
 */

/*
Les variables : pour stocker des données

 */

// Déclarer une variable : ( let nom ), assigner une valeur  :( = valeur )
let message = 'Hello World Bis';
console.log(message);
message = 'Bonjour le monde';
console.log(message);

/*
Normes ECMAscript
- 2015 -> ES6
- 2021 -> ES12
- 2022 -> ES13

var : ancien JS, à ne plus utiliser
 */
var toto = 'Ne pas utiliser !!!';

// Constantes : ne peut pas être réassigner
const pi = 3.14;
//pi = 5; -> génère une erreur

let foo;
//const bar; --> pas possible


/*
    Types

    - chaîne de caractères : string
    - nombres : number
 */

/*
Convention de nommage :

Pour nommer des variables :
- commencer par une minuscule
- pas d'espaces
- si plusieurs mots :
        - camelCase maVariableEnCamelCase
        - snake_case ma_variable

On n'utilise PAS ni le PascalCase ni le kebab-case

On peut commencer sa variable pas _ ou $ ou une lettre en minuscule
On peut utiliser des nombres, _, $, &, #

 */


/*** Les strings **********/

let ma_chaine = 'Simples quotes. C\'est chiant pour les apostrophes';
ma_chaine = "Guillemets. C'est ok pour les apostrophe, mais il faut échapper les \"\"";
ma_chaine = `Template litteral ( ou quotes inversées - alt gr + 7 ); C'est ok pour les "", les ', 
ça prend en compte les sauts de lignes`;

console.log(ma_chaine);

// Concaténation :
const nom = 'Jean Michel';
const salutation = 'Bonjour';
let message2 = salutation + " " + nom + ", comment ça va ? 1 + 1 = " + (1 + 1);
console.log(message2);

message2 = `${salutation} ${nom}, comment ça va ? 1 + 1 = ${1 + 1}`;


// Une variable, c'est juste un alias pour un contenu, lorsqu'on utilise une variable, on utilise son contenu.



/********** Les nombres ************/

let a = 1;
a = 1 + 1;
/*
Opérateurs :
+ additions
- soustractions
* multiplications
/ divisions
% modulos -> sert à savoir si un nombre est un multiple d'un autre ( retourne 0 si oui )
 */

a = 4 % 2; // 4 est un multiple de 2, retourne 0
a = 5 % 2; // 5 n'est pas un multiple de 2, retourne 1

// Les règles des opérations sont les même que sur une calculatrice : on peut mettre des parenthèses,
// l'ordre de calcul est le même ( multiplications et divisions réalisées avant les soustractions et additions )


// Raccourcis d'écriture :
b = 10;
b++; // équivalent )à  b = b + 1;  -> incrémentation
b--; // équivalent à b = b - 1  --> décrémentation

console.log(b); // 10
console.log(b++); // 10 -> Il utilise la valeur ( ici, pour l'afficher ) et APRES il incrémente
console.log(b); // 11
console.log(++b); // 12 -> Il incrémente puis utilise la valeur ( ici, pour l'afficher )
console.log(--b); // 11 -> fonctionne aussi pour la décrementation
console.log(b--); // 11
console.log(b); // 10

b += 10; // b = b + 10;
b -= 10;
b *= 10; // b = b * 10;
b /= 10; // b = b / 10;
b %= 10; // b = b % 10;


let n1 = '1';
let n2 = 1;
let n3 = n1 + n2 + 1;
console.log(n3); // 111

/* Dès qu'il y a une chaîne de caractère, le + signifie une concaténation */

n3 = n1 - n2;
console.log(n3); // 0
// Pour les autres opérateurs, JS va convertir les chaînes en number pour réaliser le calcule


n1 = 'a';
n3 = n1 - n2;
console.log(n3); // NaN => Not A Number
// Si la chaîne ne peut pas être convertie en nombre, JS retourne NaN ( pour tous les calcules utilisant cette string ou le résultat )




/*********** Boolean **************/

// Valeur binaire -> true ou false

let bool = true;
console.log(bool); // true
bool = false;

// Conditions
/*
    Opérateurs conditionnels :
    ===  égalité entre deux valeurs
    !== différence
    > < supérieur / inférieur
    >= <= supérieur ou égal / inférieur ou égal

    && -> ET pour cumuler des conditions
    || ( alt gr + 6 ) -> OU
 */

bool = 10 > 5; // true
bool = a === b;

let x = 'a';
let y = 2;
let z = x / y; // NaN

bool = isNaN(z); // z === NaN -> true

let user_entry = 10;

// Retourner true si user_entry est compris entre 0 et 20 inclut
let is_correct = (user_entry >= 0) && (user_entry <= 20);

// Retourner true si user_entry n'est pas compris entre 0 et 20
let is_incorrect = user_entry < 0 || user_entry > 20;


let user_name;
console.log(user_name); //  undefined



//let nb_lettres = user_name.length; // retourne la taille d'une chaîne de caractères


// Retourne true si mon nom est défini, et si sa taille n'exéde pas les 20 caractères, et si il y a au moins 2 caractères.
// user_name !== undefined
// user_name.length <= 20
// user_name >= 2
let is_name_ok = user_name !== undefined && user_name.length <= 20 && user_name.length >=2;


/*
    !  --> si la valeur est truthy alors on retourne false, et vice versa ( ça inverse le résultat, ajoute une notion de négation )
    falsy --> valeurs falsy => undefined, null, false, 0, NaN, '', "" ( chaîne vide )
    ces valeurs, quand elles sont testées, retourne false.
    Le reste est considéré comme truthy ( retourne true quand testé )
 */

bool = !(10 < 20); // false

bool = !user_name; // retourne false si user_name est undefined


let aa = 10;
let bb = aa;
console.log(bb); // 10
bb = !aa; // teste si  aa est falsy ( undefined, ... ) > si oui, retourne true, si non retourne false
console.log(bb); // false


aa = !undefined; // true
aa = !null; // true
aa = (20 < 0); // false
aa = !(20 < 0); // true
aa = !true; // false
aa = !!undefined; // false
aa = !user_name; // true
aa = !!user_name; // false
// -> ! retourne false si c'est truthy
// -> !! retourne true si truthy
console.log(aa);

let cc = 'toto';

let is_cc_defined = undefined;
console.log(is_cc_defined); // undefined
is_cc_defined = !undefined; // true
is_cc_defined = !!undefined; // falsy retourne false
/*
undefined -> falsy false
!false === true
 */


if(true) {
    console.log('Vrai est vrai')
} else {
    console.log('Il y a un problème')
}

if(user_entry >= 0) {
    console.log('Vous avez entré un nombre positif');
} else {
    console.log('Vous avez entré un nombre négatif ( ou pas un nombre )')
}

user_entry = 0;
if(user_entry) {
    console.log('User_entry est falsy ( potentiellement undefined ou 0, null, string vide, NaN,  ) ', user_entry)
} else {
    console.log('user_entry est défini', user_entry);
}

// Pas besoin de mettre un !! dans un if : on est explicitement dans une condition
if(user_entry) {
    console.log('User entry est truthy')
} else {
    console.log('user entry est falsy')
}

if(!user_entry && user_entry !== 0) {
    console.log("Erreur : le nombre n'est pas correct")
} else if(user_entry < 0) {
    console.log('User entry est négatif')
} else {
    console.log('User entry est positif')
}

/*
Dans un if
-> on peut mettre juste un if
-> on peut utiliser un if, avec un else
-> un if, avec un ou plusieurs else if
-> un if et un ou plusieurs else if et un else
 */


/*
Communiquer avec les users

- alert : permettent d'écrire un message
- prompt : permettent de récupérer une chaîne en entrée ou null
- confirm : permettent de récupérer un booléan
 */
/*
alert('Coucou !');

const res = prompt('ça va ?');
console.log(res);

const sur = confirm('Sûr⋅e ? ');
console.log(sur);
*/

/*
En utilisant les boîtes de dialogue vues ci dessus,
Demander le nom de l'user
Afficher "Bonjour nom de user
Demander d'entrer son âge
Calculer et afficher si l'user est plus ou moins vieux que la reine d'Angleterre.

Bonus :
- Afficher une erreur si user n'entre pas un nombre ou si le nombre est négatif
 */

const name = prompt('Quel est votre nom ?');
alert('Bonjour ' + name);

const str_age = prompt('Quel âge avez vous ? ');

const queen_age = 96;
const age = Number(str_age); // transforme une chaîne de caractère en number OU NaN

if(isNaN(age)) {
    alert(`Erreur, veuillez entrer un nombre.`)
} else if(age < 0) {
    alert(`Vous n'êtes pas né⋅e !`)
} else if(age < queen_age) {
    alert('Pas si vieux');
} else if(age === queen_age) {
    alert('Vous avez le même age que la reine');
} else if(age > queen_age) {
    alert('ça commence à faire vieux');
} else {
    alert('Erreur');
}


/*
== ( ancien JS ) -> à ne pas utiliser  -> vérifie uniquement la valeur
=== ( Ecmascript 6+ ) -> à privilégier -> vérifie l'égalité totale ( valeur + type )
 */


/**** Switch ****/

/*
On l'utilise quand on une variable à plusieurs valeurs possibles connues,
et qu'on souhaite faire une action courte en fonction de cette valeur.
 */

const day = "SAMEDI";

switch (day) {
    case "LUNDI":
        console.log('Oh no :(');
        break;
    case "MARDI":
        console.log('Meh');
    case "MERCREDI" :
        console.log('On a fait la moitié !');
        break;
    case "VENDREDI":
    case "SAMEDI":
        console.log("Youhouh !");
    case "DIMANCHE" :
        console.log("Vive le week end");
        break;
    default :
        console.log("Bonne nuit");
}


/*** Expressions ternaires ******/

const genre = 'F';
let title;
if(genre === 'F') {
    title = 'Mme';
} else {
    title = 'Mr'
}

// variable = ( condition ?) valeur si vrai : valeur si faux
let title2 = (genre === 'F')? 'Mme' : 'Mr';

// Possible mais complexe à lire :
title2 = (genre === 'F')? 'Mme' : (genre === 'M')? 'Mr' : 'Mx';


let title3; // récupérer dans un prompt, un form...

if(!title3) {
    title3 = 'Mx';
}

title3 ??= 'Mx'; // assigne la valeur si il est undefined ou null


/***** Boucles ******/

let continuer;
do {
    // fait quelque chose
    console.log('Coucou');
    continuer = confirm('Voulez vous continuer ?')
} while (continuer); // tant que la valeur de 'continuer' est true, alors on recommence le do {}



/*
    Toujours en utilisant les boites de dialogues
    Créer un jeu dont le but est de "deviner" un nombre "pensé" par l'ordinateur
    -> Le nombre à deviner est compris entre 0 et 100 inclu

    L'utilisateur fait ses suppositions avec un prompt
    -> On récupère la valeur du prompt, et on la teste
        -> Si elle correpond au nombre à deviner, c'est gagné
        -> Sinon, on dit si elle est trop haute ou trop basse
        -> Si le nombre n'est pas inclu entre 0 et 100, on tape sur les doigts de user
        -> Si ce n'est pas un nombre : idem


  1. Récupérer le nombre
  2. Algo pour tester sa valeur
  3. On gère les erreurs
  4. Tant que l'user n'a pas gagné, on recommence

  6. Si il a gagné, on lui propose de recommencer

  Bonus :
  -> Quand il a faut, on lui donne des indices supplémentaires : est-ce qu'il se rapproche ou s'éloigne du nombre à deviner
  ( par rapport à la supposition précédente )
 */


const number_to_guess = 50; // Nombre à deviner - à générer aléatoirement plus tard
const user_guess = prompt('Entrez un nombre entre 0 et 100'); // permet d'enregistrer la valeur entrée par l'utilisateur

if(user_guess < number_to_guess ) {
    alert('Raté, trop bas');
} else if (user_guess > number_to_guess) {
    alert('Nope, trop haut');
} else if( user_guess === number_to_guess) {
    alert('Gagné');
}