// Portée de Var

console.log("hello");

// Déclaration de la variable "a"

var a = 42;

console.log(a);
// Déclaration d'une fonction
function MyFunction()
{
    // Appel de la variable "a" qui possère une portée globale
    console.log(a);

    // Déclaration de la variable "b"
    var b = 20
    // Appel de la variable "b"
    console.log(b);
}

// Appel d'une fonction
MyFunction();

// Affichage de la variable "b"
// Génére une erreur de référence
console.log(b);