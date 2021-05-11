// Snack 1
// Creare un array di oggetti:// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var bicyclesList = [

    {
        name: "Gravel Bike",
        weight: 10 
    },
    {
        name: "Mountain Bike",
        weight: 14
    },
    {
        name: "Bmx",
        weight: 9
    },
    {
        name: "Fat Bike",
        weight: 11
    },
    {
        name: "Downhill",
        weight: 18
    },
]

// Stampare a schermo la bici con weight minore.
var smallBike = bicyclesList[0];

for (var i = 0; i < bicyclesList.length; i++) {
    
    if (bicyclesList[i].weight < smallBike.weight) {
        smallBike = bicyclesList[i];
    }

}
console.log(smallBike); 








// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.