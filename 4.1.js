let width = prompt("choisissez le width de votre rectangle");
let lenght = prompt("choisissez le height de votre retangle");
function calcSurface(width,lenght){
    let surface = width * lenght;
    return surface;
}
console.log("Votre rectangle a une surface de " + calcSurface(width, lenght) + " m²");