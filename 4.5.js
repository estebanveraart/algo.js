function calcDistance(x1,x2,y1,y2){
    let a = x1 - x2;
    let b = y1 - y2;
    return Math.sqrt(a * a + b * b);
}
console.log( calcDistance(1,1,2,2));