var a = true;
var b = true;

console.log("a",a );
console.log("b",b );

// ET logique

console.log(a && b, typeof (a && b)  );
if (a && b)
{
    console.log("C'est vrai");
}
else 
{
    console.log("C'est faux");
}


let age = 18;
let gender = "F";

if ( age >=18 && gender ==="F")
{
    console.log("Entrée gratos");
}
else
{
    console.log("Ne rentre pas")
}


// NON Logique 


// a et b doivent être vrais
if (a && b) 
{
    console.log("C'est vrai");
}
else
{
    console.log("C'est faux");
}

//a et b doivent être faux

if (!a && !b) 
{
    console.log("C'est vrai");
}
else
{
    console.log("C'est faux");
}