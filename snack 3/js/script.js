// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
function myFunction(array, n1, n2) {
    var newArray = []
    for (var i = n1 ; i <= n2; i++){
        newArray.push(array[i]);
    }
    return newArray;
}
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

var list = [23, 7, 33, 4, 55, 6, 17, 8, 934, 88, 109, 11]
var a = 2;
var b = 8;
console.log(list);
console.log(myFunction(list, a, b));