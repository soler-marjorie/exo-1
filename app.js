/*
Syntaxe de base et variables :
Exo 1 : déclarer des variables de différents types (string, number, boolean) et 
d'afficher leur contenu dans la console.
Exo 2 : Écrire un script qui convertit des degrés Celsius en Fahrenheit.
*/

//Exercice 1 ----------------------------------------------------
let string = 'Bonjour';
let number = 25;
let bool = true;

console.log(string, number, bool);

//Exercice 2 -----------------------------------------------------
function celsiusToFahrenheit(celsius){
    const fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}
console.log(celsiusToFahrenheit(25));

/*
Conditions et boucles :
Exo 3 : Écrire une condition pour vérifier si un nombre est pair ou impair, et 
afficher un message correspondant.
Exo 4 : Utiliser une boucle for pour afficher les nombres de 1 à 10, puis inverser
la boucle pour les afficher de 10 à 1.
*/

//Exercice 3 -----------------------------------------------------
let num = 13
if(num%2 == 0){
    console.log('Le nombre est pair');
}else{
    console.log('Le nombre est impair');
}

//Exercice 4 -----------------------------------------------------
for(let i = 0; i < 10; i ++){
    console.log(i+1);
}

for(let j = 11; j > 1; j --){
    console.log(j-1);
}

/*
Fonctions :
Exo 5 : créer une fonction simple qui prend deux nombres et renvoie leur somme.
Exo 6 : Créer une fonction pour vérifier si une chaîne de caractères contient un 
certain mot.
*/

//Exercice 5 ------------------------------------------------------
function plus(a, b){
    return a+b;
}
console.log(plus(1,2));

//exercice 6 ------------------------------------------------------

function verifier(phrase, mot){
    return phrase.includes(mot);
}
console.log(verifier('j\'aime les chips','chips'));
console.log(verifier('j\'aime les chips','manger'));

/*
Tableaux et objets :
Exo 7 : Créer un tableau de prénoms et afficher chacun avec une boucle.
Exo 8: créer un objet simple représentant une personne (nom, âge, ville) et 
d'accéder aux propriétés. (On affiche en console)
*/

//Exercice 7 -------------------------------------------------
let prenoms = ['Marine', 'Anthony', 'Virginie', 'Amori']
for(let i = 0; i < prenoms.length; i++){
    console.log(prenoms[i]);
}

//Exercice 8 -------------------------------------------------
const personne = {
    nom: "dupont",
    âge: 42,
    ville: "Lyon"
}
console.log("nom:", personne.nom);
console.log("âge:", personne.âge);
console.log("ville:", personne.ville);
/*
Manipulation de DOM :
Exo 9 :ajouter un élément de texte dans une page HTML via JavaScript.
Exo 10 : Créer un bouton via JS, on l’affiche dans la page et au click cela 
déclenche une alerte
*/

//Exercice 9 ----------------------------------------------
let phrase = document.createElement('p');
phrase.textContent = 'Voici une phrase inséré depuis JS';

document.body.appendChild(phrase);

// Exercice 10 ----------------------------------------------
let btn = document.createElement('button');
document.body.appendChild(btn);
btn.innerHTML = "cliquez moi !"

btn.addEventListener("click", function(){
    alert("tu me clique dessus comme ça !!!");
})

/*
Exo 11 : Contactez une api qui génère des chuck Norris Facts , et  on affiche 
dans blague dans la page 
https://api.chucknorris.io/jokes/random
*/

//Exercice 11 ------------------------------------------------
const phraseChuck = document.createElement('p');
phraseChuck.textContent = 'Cliquez pour une blague de Chuck';

document.body.appendChild(phraseChuck);



let btnChuck = document.createElement('button');
document.body.appendChild(btnChuck);
btnChuck.innerHTML = "cliquez moi pour une blague !"

btn.addEventListener("click", function(){
    alert("tu me clique dessus comme ça !!!");
})



async function afficherChuck() {
    try{
        const reponse = await fetch("https://api.chucknorris.io/jokes/random");
        const blagues = await reponse.json();
        
        phraseChuck.textContent = blagues.value;
    } catch (error) {
        phraseChuck.textContent = 'erreur lors de la récupération de la blague';
        console.error("erreur:", error);
    }    
}

btnChuck.addEventListener('click', afficherChuck);