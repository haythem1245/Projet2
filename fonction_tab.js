//  max
function trouverMax(tab) {
  var max = tab[0];
  for (var i = 1; i < tab.length; i++) {
    if (tab[i] > max) {
      max = tab[i];
    }
  }
  return max;
}
//min
function trouverMin(tab) {
  var min = tab[0];
  for (var i = 1; i < tab.length; i++) {
    if (tab[i] < min) {
      min = tab[i];
    }
  }
  return min;
}
 

//2eme
function somme(tab) {
  var total = 0;
  for (var i = 0; i < tab.length; i++) {
    total += tab[i];
  }
  return total;
}
// 3eme
function filtrer(tab) {
  var resultat = [];
  var j = 0;
  for (var i = 0; i < tab.length; i++) {
    if (tab[i] % 2 === 0) {
      resultat[j] = tab[i];
      j++;
    }
  }
  return resultat;
}
