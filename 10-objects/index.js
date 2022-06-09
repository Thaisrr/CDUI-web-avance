/*
Voiture :
- couleur
- marque
- année
- modèle
- nombre de portes
...
 */

const voiture_de_ansaka = {
    color : 'Rouge',
    marque: 'Audi',
    model: 'A3',
    year: 2022,
    nb_doors: 5
}

console.log(` Ansaka à une voiture ${ voiture_de_ansaka.color } `);

const tab = [];
console.log( tab.length );


const user =  {
    firstname: 'Quentin',
    lastname: 'Plouvier',
    notes: [0, 2, 12, 9, 3],
    entreprise: {
        name: 'Google',
        phone: '0102030405',
        address: {
            number: 3,
            street: 'rue des fleurs',
            city: 'Lille'
        },
        coworkers : [
            {name: 'Jean Michel', job: 'compta'},
            {name: 'Joceline', job: 'IT'},
            {name: 'Renée', job: 'RH'}
        ]
    }
}

user.notes.push(20);
user.notes.forEach( (note) => console.log(note));

// Afficher dans la console: 'Quentin travaille chez Google, dans la ville de Lille'
console.log(` ${user.firstname} travaille chez ${ user.entreprise.name }, dans la ville de ${ user.entreprise.address.city} `);

// version hors objet
const notes = [0, 2, 12, 9, 3];
let message = `Il y ${notes.length} notes, qui sont : `;

notes.forEach(function (note) {
    //message += `${note}, `;
    //message = `${message} ${note}, `;
    //message = message + note + ', ';
    message = message.concat(`${note}, `);
})
console.log(message);


// Afficher dans la console : 'Il a ... notes, qui sont : ........ '
 message = `Il y ${notes.length} notes, qui sont : `;
user.notes.forEach(function (note) {
    message = message.concat(`${note}, `);
})
console.log(message);

// Afficher dans la console : 'Il a 3 collègues : Jean Michel, Joceline, Renée,'
let workers_messages = `Il a ${user.entreprise.coworkers.length} collègues `;
user.entreprise.coworkers.forEach( function (cw) {
    workers_messages = workers_messages.concat( cw.name, ', ' );
} )


// Méthode

const car = {
    marque: 'Ferrari',
    color: 'Jaune',
    rouler() {
        console.log('Vroom Vroom')
    },
    decrire() {
        console.log(this); // affiche car
        console.log(`Ma voiture est une ${ this.marque } ${ this.color }`)
    }
}

console.log(this); // Objet Window
car.rouler();

