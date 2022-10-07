# Variables et Primitives

## Variables

### Syntaxes

```txt
<nom variable> = <valeur>;
window. <nom variable> = <valeur>;```


`window` est une référence à l'instance JavaScriptt de la fenêtre du navigateur qui éxécute le script.

### var

- Instruction de déclaration d'une variable

    ```js
    var name = "John";
    var age;
    ```

- Portée Globale ou Portée de Fonction

### let 

- Déclaration de variables dont la portée se limite au bloc courant


### const

- Instruction de déclaration de variable dont la portée se limite au bloc courant
- Interdit une nouvelle affectation

## Primitives

- Type de donées qui ne sont pas des objets et qui ne possède pas de méthode.
    - 6 types de données primitives: 
        -**String**: châine de caractères
        -**Number**: données numériques
        -**Boolean**: vrai ou faux
        -**Null**: valeur qui vaut 0 de manière définie, adresse invalide ou inexistante
        -**Undefined**: valeur automatiquement affectée aux variables qui viennent d'être déclarées.
        -**Symbol**: Nouveauté ES6, représente un pointeur unique vers un objet par exemple