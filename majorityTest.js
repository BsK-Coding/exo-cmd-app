/*
Un état vous demande d'écrire un petit programme qui vérifie que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 afficher le prénom et nom correspondant
*/

/* Pseudo Code */
// readlineSync => Importer la librairie, afin que l'utilisateur puisse entrée ces informations
// let nom / let prenom / let age
// IF < 18 console.log(prenom, nom)

const readlineSync = require('readline-sync')

const droitVote = (prenom, nom, age) => {

  if (age < 18) {
    console.log(`Désolé, ${prenom} ${nom}, vous êtes mineur, vous ne pouvez pas voter`)
  }
  else if (age >= 18) {
    console.log(`${prenom} ${nom}, vous êtes majeur, vous pouvez voter`)
  }
}

const prenom = readlineSync.question('Entrer votre Prenom: ')
const nom = readlineSync.question('Entrer votre Nom: ')
const ageStr = readlineSync.question(`Veuillez entrer votre age: `)
const age = Number(ageStr)

/* let prenom = process.argv[2]
let nom = process.argv[3]
let age = Number(process.argv[4])*/
droitVote(prenom, nom, age)
