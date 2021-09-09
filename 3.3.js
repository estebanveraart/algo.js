let animaux = ["poisson","cheval","cerf","crocodile"];
console.log(animaux)
var final = animaux.push("poisson","cheval","cerf","crocodile");
console.log(animaux);
while(animaux.length>4){
    animaux.pop();
}
console.log(animaux);