/*
Le programme précédent ne fonctionnera que dans les pays ou la majorité est à 18 ans.
Afin que votre programme puisse fonctionner pour tous les pays, réécrivez le programme précédent pour qu'il puisse
prendre un argument à son lancement en ligne de commande qui correspondra à l'âge de la majorité dans le pays de l'utilisateur du programme.
Un utilisateur américain lancerait le programme avec la commande:
% node interMajorityTest.js 21

Un utilisateur francais lancerait le programme avec la commande:
% node interMajorityTest.js 18

Si l'âge est inférieur à l'argument passé en ligne de commande lui afficher avec le prenom et nom correspondant:
Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter

Si l'âge est supérieur ou égal à l'argument passé en ligne de commande lui afficher:
prenom nom, vous êtes majeur, vous pouvez voter
*/


/* Pseudo Code */

//  % node interMajorityTest.js 18  => Utilisateur Français
//  % node interMajorityTest.js 21  => Utilisateur Americain
// IF (age < majorite) => Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter
// IF (age > majorite) => prenom nom, vous êtes majeur, vous pouvez voter

/* Import des librairies Requises */

const readlineSync = require('readline-sync')

/* Fonctions */

const droitVote = (majorite, age, pays, prenom, nom) => {

  if (majorite == 18) {
    pays = pays[0]
    console.log(`Vous êtes citoyen de ${pays}`)
  }
  else if (majorite == 21) {
    pays = pays[1]
    console.log(`Vous êtes citoyen d'${pays}`)
  }
  else {
    console.log(`Vous n'êtes pas citoyen de ${pays[0]}, ni d'${pays[1]}, vous ne pouvez donc voter`)
    process.exit(1)
  }

  switch (pays) {

    case 'france':
      if (age < majorite) {
        return console.log(`Désolé, ${prenom} ${nom}, vous êtes mineur, vous ne pouvez pas voter`)
      }
      else if (age >= majorite) {
        return console.log(`${prenom} ${nom}, vous êtes majeur, vous pouvez voter`)
      }
      break

    case 'amerique':
      if (age < majorite) {
        return console.log(`Désolé, ${prenom} ${nom}, vous êtes mineur, vous ne pouvez pas voter`)
      }
      else if (age >= majorite) {
        return console.log(`${prenom} ${nom}, vous êtes majeur, vous pouvez voter`)
      }
      break

    default:
      return console.log(`ERREUR: vous n'avez pas entrer un pays valide`) // Avec la boucle IF précédente ce choix n'est pas nécessaire
  }

}

/*-- Check Command Line --*/

if (process.argv.length !== 3) {
  console.log('La commande doit avoir 3 arguments: node interMajorityTest.js majorite')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} La valeur renseigné doit être un nombre`)
  process.exit(1)
}

/* Déclarations des valeurs pour notre Fonction */

const majorite = Number(process.argv[2])
let pays = ['france', 'amerique']

/*-- Check des données entrer --*/

const prenom = readlineSync.question('Entrer votre Prenom: ')
if (!isNaN(prenom)) {
  console.log(`Error: ${process.argv[3]} La valeur renseigné doit être composé de caractères`)
  process.exit(1)
}

const nom = readlineSync.question('Entrer votre Nom: ')
if (!isNaN(nom)) {
  console.log(`Error: ${process.argv[4]} La valeur renseigné doit être composé de caractères`)
  process.exit(1)
}

const age = Number(readlineSync.question('Entrer votre Age: '))
if (isNaN(age)) {
  console.log(`Error: ${process.argv[1]} La valeur renseigné doit être être composé d'un nombre`)
  process.exit(1)
}

/* Accès à notre Algorithme */

droitVote(majorite, age, pays, prenom, nom)