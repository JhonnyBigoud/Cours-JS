// Déclaration d'objet

var a = new Object();
var b = {};

var user = {
    firstname:"Jonn",
    lastname:"DOE"
}

console.log (user.firstname);
console.log( user['firstname']);

var user2 = new Object();
user2.firstname = "Bob";
user2.lastname = "DOE";



// Lire le contenu d'un objet

for (const key in user) 
{
    console.log( user[key] );
}