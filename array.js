// Déclaration de tableau

var a = new Array();
var b = [];

console.log("a", typeof a);
console.log("b", typeof b);

var a_arbres = new Array(
"sequoia", //0
"laurier", //1
"cèdre", //2
"chêne", //3
"érable" //4
);

console.log("a_arbres", typeof a_arbres);
console.table(a_arbres);


// -----
console.log("----------------");
var c = new Array(10);

console.log(c);
console.table(c);

var d = (10);

console.log(d);
console.table(d);


console.log("----------------");

// Ajouter une entrée en fin de tableau >> (méthode "array.push()")

var a = [];

console.log(a);

a.push('Pommes');
console.table(a);


a.push('Poires');
a.push('Bananes');
console.table(a);

a.push('Kiwi','Fraise');
console.log(a);

console.log("----------------");

// Compter le nombre d'entrée du tableau
// Propriété array.length 

console.log( a.length);


console.log("-------------");

//Supprimer la dernière entrée du tableau
//méthode array.pop()

a.pop();
console.table(a);
console.log( a.length);

console.log("-------------");
// Ajouter une ligne en DEBUT de talbeau
// Méthode array.unshift()

a.unshift('Mangues');
console.table(a);

a.shift();
console.table(a);

console.log("-------------");

// Supprimer X entrée à partir d'un index défini
// Méthode array.splice()

a.push('Cerise','Pastèques','Fruits du Dragon','Melons');
console.table(a);

a.splice(3,2); // A partir de l'index 3, on supprime 2 entrées.
console.table(a);

console.log("-------------");
// Split un tableau en 2
var b = a.slice(2, 6); // Prend le tableau depuis l'index 2 jusque l'index 6.
console.table (b);
console.log(a);

console.log("-------------");
// Conversion d'un tableau en chaîne
// Méthode array.join()

console.log(a.join(", "));

console.log(a.join(" ++++"));

console.log("-------------");

console.log(a[1]);
console.log(a[4]);

console.log("-------------");
// Afficher les lignes d'un tableau (une à une) à l'aide d'une boucle

for (let i = 0; i < a.length; i++)
{
    console.log( a[i] );
}

console.log("-------------");
// Recréer la méthode join()
// -Parcourir un tableau
// -Concaténation
// -Condition(s)

//Sortie: Pommes, Poires,  Bananes

var fruits =['Cerises','Pastèques','Fruits du Dragon', 'Melon'];
var output ="";

for (let i=0; i< fruits.length; i++)
{
    if (output.length != 0)
        {
            output += ", ";
        }
        output += fruits[i];
}

// Affiche la chaîne de sortie
console.log(output);