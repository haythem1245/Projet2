function factorielle(n) {
  var resultat = 1;
  for (var i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}
// récursive
function factorielle(n) {
  if (n === 0) return 1;
  return n * factorielle(n - 1);
}
// 2eme
function estPremier(n) {
  if (n < 2) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

//3éme
function fibonacci(n) {
  var a = 0, b = 1, temp;
  for (var i = 0; i < n; i++) {
    console.log(a);
    temp = a + b;
    a = b;
    b = temp;
  }
}
