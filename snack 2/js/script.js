// Snack 2
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
  
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
var teamList = [

    {
        name: "Milan",
        score: 0,
        fouls: 0
    },
    {
        name: "Juventus",
        score: 0,
        fouls: 0
    },
    {
        name: "Inter",
        score: 0,
        fouls: 0
    },
    {
        name: "Napoli",
        score: 0,
        fouls: 0
    }
    
]

var teamsFouls = [];
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
for (var i = 0; i < teamList.length; i++) {
    teamList[i].score = getRndNumber(1, 100);
    teamList[i].fouls = getRndNumber(1, 50);

    var teamFouls = {};
    teamFouls.nome = teamList[i].name;
    teamFouls.fouls = teamList[i].fouls;
    teamsFouls.push(teamFouls)


}
console.log(teamList);
console.log(teamsFouls);
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
