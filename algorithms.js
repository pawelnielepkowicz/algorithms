/**
 * Created by Paweł Nielepkowicz on 22/06/2015.
 */



var parts = [
    {'from': 12345, 'to': 13455},
    {'from': 12745, 'to': 13755},
    {'from': 2345, 'to': 2755},
    {'from': 5345, 'to': 9455},
    {'from': 2700, 'to': 5240},
    {'from': 345, 'to': 13455},
    {'from': 11345, 'to': 13000}
];


// algorytm sortowania bąbelkowego. Tu sortuję tablicę od wartości najmniejszej w polach “from”
var length = parts.length - 1;
do {
    var swapped = false;
    for (var i = 0; i < length; ++i) {
        if (parts[i].from > parts[i + 1].from) {
            var temp = parts[i].from;
            parts[i].from = parts[i + 1].from;
            parts[i + 1].from = temp;
            swapped = true;

        }

    }
}
while (swapped == true);


var max = 0; // wartośći graniczne (minimum i maximum)
var min = parts[0].from;


// algorytm rekurencyjny do wyszukania maksymalnej wartosci w polach parts.to
var _j = 0;
findMax(0);

function findMax(_j) {
    if (_j < parts.length) {

        if (parts[_j].to > max) {

            max = parts[_j].to;

        }

        _j++;
        findMax(_j)
    }

}


for (var _jj = 0; _jj < parts.length; _jj++) { // Szukamnajmniejszej liczby w tablicy w polach "from" . Tym razem zwykła pętla for
    if (parts[_jj].from < min) {

        min = parts[_jj].from;

    }

}


var firstArray = []; // tworze pusta tablice o dlugości max i wymiarze parts.length
for (var ii = 0; ii < parts.length; ii++) {

    firstArray[ii] = new Array();
}


for (var _k = 0; _k < parts.length; _k++) { // zapełniam zerami lub jedynkami nowa tablice,


    for (var _l = 0; _l < max; _l++) {

        if (_l > parts[_k].from && _l < parts[_k].to) {


            firstArray[_k][_l] = 1;
        } else {
            firstArray[_k][_l] = 0;
        }

    }

}
// rezultat wygląda mniej więcej tak:
// firstArray = [
// {11111000000000000000}
// {01111111111110000000}
// {00011111110000000000}
// {00000111111111111110}
// {00000000111111000000}
// {00000000000011100000}
// {00000000000000000111}
// ];


var counterArray = new Array(max);

for (var m = 0; m < max; m++) { // algorytm zliczający pionowa sumę jedynek

    var total = 0;
    for (var n = 0; n < firstArray.length; n++) {

        total += firstArray[n][m];
        counterArray[m] = total;

    }

}
var maxColumn = 0;
for (var o = 0; o < max; o++) {

    if (counterArray[o] > maxColumn) {

        maxColumn = counterArray[o];

    }

}


console.log("jaka jest największa ilość jednocześnie nakładających się na siebie odcinków: " + maxColumn);