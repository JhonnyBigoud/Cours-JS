var a = true;
var b = true;
var c;

// Syntaxe
// condition ? val1: val2

if (a && b)
{
    c="C'est vrai";
}
else
{
    c="C'est faux";
}


console.log(c);

var d = a && b ? "C'est vrai": "C'est faux";
console.log(d);

console.log(a && b) ? "C'est vrai" :"C'est faux";
console.log(d);