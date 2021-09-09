let n = prompt("choisissez le nombres de chiffre à additionner par la suite.");
let somme = 0
for(let i=0; i<n; i++){
    let nb = prompt("choisissez un chiffre");
    console.log(nb);
    somme = somme + new Number (nb);
}
console.log(somme);