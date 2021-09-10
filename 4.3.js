let min = prompt("choisissez un nombre minimum");
let max = prompt("choisissez un nombre maximum");
let minn = 1;
let maxn = 10;
function rand10(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1))+min;
}
function multiRand(minn,maxn){
    minn = Math.ceil(1);
    maxn = Math.floor(10);
    return Math.floor(Math.random() * (maxn-minn+1))+minn;
}

console.log(rand10(min,max)* multiRand(minn,maxn));