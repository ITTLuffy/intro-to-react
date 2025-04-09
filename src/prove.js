const oggetto = {
    pippo: "Ciao Pippo",
    pluto : "Ciao Pluto",
    eta: 42,
    lista: [1, 2, 3, 4, 5],
}
// Destruttura l'oggetto oggetto in tre variabili: pippo, pluto e resto
// spread operator --> ...resto
const { pippo, pluto, ...resto } = oggetto;
const o1 = { ...oggetto, eta: 43 }; // costruzione di un nuovo oggetto
const o2 = oggetto;

console.log(o1===oggetto);
console.log(o2===oggetto);
console.log(pippo); // Ciao Pippo
console.log(pluto); // Ciao Pluto
console.log(resto); // { eta: 42, lista: [ 1, 2, 3 ] }


const [a,b, ...restoArray] = oggetto.lista;
console.log(oggetto.lista); // [ 1, 2, 3 ]
console.log(a); // 1
console.log(b); // 2
console.log(restoArray); // [ 3 ]


