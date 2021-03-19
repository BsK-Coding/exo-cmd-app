/*
Ecrivez un petit jeu qui demande à un utilisateur de trouver un nombre qui aura été passé en ligne de commande par le maitre du jeu.
Le programme s'exécutera tant que l'utilisateur n'aura pas trouvé le bon nombre.
Après chaque tentative de l'utilisateur pour trouver le nombre secret, celui entré en argument de la ligne de commande du programme à son lancement, les messages suivant lui apparaîtront:
si le nombre entré par l'utilisateur est plus petit que le nombre secret: 'Nombre trop petit' en rouge
si le nombre entré par l'utilisateur est plus grand que le nombre secret: 'Nombre trop grand' en rouge
si le nombre entré par l'utilisateur est égal au nombre secret: 'Bravo!' en vert
*/

/* Pseudo Code */
// while (true) => permet de bouclé le programme tant que l'utilisateur ne trouve pas le nombre entré en commande
// initialisation de variables: nb / nbSecret(taper dans la commande)
// Check conditions:
// IF nb != d'un nombre = console.log(chalk.red('Vous devez entrer un nombre'))
// IF nb < nbSecret = console.log(Nombre trop petit) écrit en rouge (chalk)
// IF nb > nbSecret = console.log(Nombre trop grand) écrit en rouge
// IF nb == nbSecret = console.log(Bravo!) écrit en vert


/* Import de Librairie utiles au programme */

const readlineSync = require('readline-sync')
const chalk = require('chalk')

/* fonction */

const NbMagic = (boucle, count, nbSecret, nb) => {

  /* Check nombre entrer => nbStr */

  if (isNaN(nbStr)) {
    console.log(chalk.red('!! Vous devez entrer un nombre !!'))
    process.exit(1)
  }
  else {
    while (boucle) {
      if (nb < nbSecret) {
        console.log(chalk.red('Nombre trop petit'))
        process.exit(1)
      }
      if (nb > nbSecret) {
        console.log(chalk.red('Nombre trop grand'))
        process.exit(1)
      }
      else {
        console.log(chalk.green('Bravo!'))
        process.exit(1)                             // On pourrait également mettre "return boucle = false"
      }
    }
  }
}

const nbSecret = Number(process.argv[2])

/* Check Command Line */
if (process.argv.length != 3) {
  console.log('La commande doit avoir 3 arguments: node guessNumber nbSecret')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(chalk.red('!! Vous devez entrer un nombre !!'))
  process.exit(1)
}

let boucle = true
let count = 0
const nbStr = readlineSync.question('Entrer un nombre: ')
const nb = Number(nbStr)


NbMagic(boucle, count, nbSecret, nb)

/* !! Reste à régler la boucle tant que l'utilisateur ne trouve pas le bon nombre remplacer temporairement par process.exit(1) pour terminer la boucle !! */