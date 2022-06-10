/*
Le DOM, kesako ?

Document Object Model

- objet
- Arbre généalogique logique de la page

 -> On y retrouve la structure de la page HTML
 - Document
 - html
 - head
    - meta
    - title
 - body
    - h1 -> on y retrouve les attributs HTML
        class, id, style, href, ....
        contenu : texte, les enfants
        data
        ...
 */

const h1 = document.querySelector('#title');
console.log(h1);

h1.title = 'Coucou';
h1.style.color = 'green';
h1.style.fontSize = '1rem';
    // font-size -> fontSize
// les propriétés de style sont les mêmes que les propriétés CSS
// Les noms en kebab-case css s'écrivent en camelCase en JS
// La valeur s'écrit en string


// Gestion d'événements - easy

function makeRed() {
    h1.style.color = 'red';
}

function displayBox() {
    const box = document.querySelector('#box');
    //box.className = 'box'; // pas ouf
    box.classList.add('red');
    box.classList.remove('red');
    box.classList.toggle('hidden');
}


// Modifier le contenu

const message = 'Ceci est un message très important';

const content = document.querySelector('#content');

setTimeout( function () {
    content.textContent = message;
}, 3000 );


// Créer du contenu
const item = 'Un element de liste';

const li = document.createElement('li');
li.textContent = item;
li.classList.add('blah');
li.id = 'item1';

const parent = document.querySelector('#list');
parent.append(li);

// Créer plein de contenu

const trucs = ['Patate' ,'Truc', 'Bidule', 'Machin', 'Chose', 'Scrognegneu', 'Sacrebleu']

trucs.forEach(function (el) {
    const li = document.createElement('li');
    li.textContent = el;
    parent.append(li);
});

// créer du contenu plus complexe

const charentaise = {
    image: 'https://m.mes-pantoufles.fr/img/134-9a020-9a020.jpg',
    nom: 'Charentaise Deluxe',
    prix: 52.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur beatae deleniti dolore id illum ipsum laboriosam necessitatibus nihil nobis, numquam provident quae quia recusandae, similique sint voluptate. Suscipit, tenetur!'
}


function createCard(param_charentaise) {
    const card = document.createElement('div');
    card.classList.add('card');
// Entête
    const header = document.createElement('div');
    header.classList.add('card-header');
    const img = document.createElement('img');
    img.src = param_charentaise.image;
    img.alt = "De super charentaises";
    header.append(img);
    card.append(header);
// body :
    const body = create('div'); // raccourcis créé dans tools.js
    const h3 = create('h3');
    h3.textContent = param_charentaise.nom;
    const price = create('p');
    price.textContent = param_charentaise.prix + '€';
    const desc = create('p');
    desc.textContent = param_charentaise.description;

    body.append(h3);
    body.append(price);
    body.append(desc);
    card.append(body);

    $('#products').append(card);
}


createCard(charentaise);

// Input level 1

function getName() {
    const input = $('#name');
    alert('Vous vous appelez : ' + input.value)
}

/*
- Un champs input
- Récupére le mot de passe entré
- On le compare avec le mp enregistré
- Si le mp entré est faux -> message d'erreur
- Si il est bon -> On affiche un message

Bonus 1 :
- Au bout de 3 essais ratés, on 'bloque le compte' : impossible de se
connecter

Bonus 2 :
- On efface le message secret au bout de 5s


Découpage de l'exercice :

1. Permettre à l'utilisateur d'entrer du texte, et le récupérer en JS
/
/
/
/

2. Comparer l'entré utilisateur avec un mot de passe existant enregistré dans le code
/
/
/
/

3. Afficher un message d'erreur si l'entrée est différente du mot de passe
/
/
/
/

4. Afficher 'un message secret' si l'entrée est égale au mot de passe
/
/
/
/
 */