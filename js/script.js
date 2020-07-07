var km = prompt('Benvenuto! Quanti kilometri intendi percorrere?');
var anni = parseInt(prompt('Quanti anni hai?'));

if (anni < 18) {
    var prezzoMinori = km*0.21*0.8;
    document.getElementById('prezzo-finale').innerHTML = 'Complimenti, hai uno sconto del 20%. Devi pagare' + ' ' + prezzoMinori.toFixed(2) + '€' + '.' + ' ' + 'Grazie e buon viaggio!';
} else if (anni > 65) {
    var prezzoOver = km*0.21*0.6;
    document.getElementById('prezzo-finale').innerHTML = 'Complimenti, hai uno sconto del 40%. Devi pagare' + ' ' + prezzoOver.toFixed(2) + '€' + '.' + ' ' + 'Grazie e buon viaggio!';
} else {
    var prezzoNormale = km*0.21;
    document.getElementById('prezzo-finale').innerHTML = 'Devi pagare' + ' ' + prezzoNormale.toFixed(2) + '€' + '.' + ' ' + 'Grazie e buon viaggio!';
}
