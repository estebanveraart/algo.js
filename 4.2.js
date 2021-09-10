let min = prompt("choisissez un nombre minimum");
let max = prompt("choisissez un nombre maximum");
function rand10(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1))+min;
}
console.log(rand10(min,max));