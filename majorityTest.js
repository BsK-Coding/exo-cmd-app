/*
Un état vous demande d'écrire un petit programme qui vérifie que les citoyens ont le droit de voter.
Ecrivez un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 afficher le prénom et nom correspondant
*/

/* Pseudo Code */
// readlineSync => Importer la librairie, afin que l'utilisateur puisse entrée ces informations
// Fonction droitVote
// let nom / let prenom / let age
// IF < 18  =>  console.log(`Désolé, prenom, nom, vous êtes mineur, vous ne pouvez pas voter`)
// IF > 18  =>  console.log(`${prenom} ${nom}, vous êtes majeur, vous pouvez voter`))


/* Import de Librairie */
const readlineSync = require('readline-sync')

/* Fonction droitVote */
const droitVote = (majorite, prenom, nom, age) => {
  if (age < majorite) {
    console.log(`Désolé, ${prenom} ${nom}, vous êtes mineur, vous ne pouvez pas voter`)
  }
  else if (age >= majorite) {
    console.log(`${prenom} ${nom}, vous êtes majeur, vous pouvez voter`)
  }
}

const majorite = 18
/*
const prenom = readlineSync.question('Entrer votre Prenom: ')
const nom = readlineSync.question('Entrer votre Nom: ')
const ageStr = readlineSync.question(`Veuillez entrer votre age: `)
*/

/*-- Check des données entrer --*/
const prenom = readlineSync.question('Entrer votre Prenom: ')
if (!isNaN(prenom)) {
  console.log(`Error: ${prenom} La valeur renseigné doit être composé de caractères`)
  process.exit(1)
}

const nom = readlineSync.question('Entrer votre Nom: ')
if (!isNaN(nom)) {
  console.log(`Error: ${nom} La valeur renseigné doit être composé de caractères`)
  process.exit(1)
}

const ageStr = readlineSync.question(`Veuillez entrer votre age: `)
const age = Number(ageStr)
if (isNaN(age)) {
  console.log(`Error: ${age} La valeur renseigné doit être composé d'un nombre`)
  process.exit(1)
}

droitVote(majorite, prenom, nom, age)