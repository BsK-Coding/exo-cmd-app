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
// IF nb < nbSecret = console.log(Nombre trop petit) écrit en rouge (chalk)
// IF nb > nbSecret = console.log(Nombre trop grand) écrit en rouge
// IF nb == nbSecret = console.log(Bravo!) écrit en vert

/* Import de Librairie utiles au programme */

const readlineSync = require('readline-sync')
const chalk = require('chalk')

const NbMagic = (nbSecret, nb) => {
  while (true) {
    if (nb < nbSecret) {
      console.log(chalk.red('Nombre trop petit'))
    }
    if (nb > nbSecret) {
      console.log(chalk.red('Nombre trop grand'))
    }
  }
}

const nbSecret = Number(process.argv[2])
const nb = readlineSync.question('Entrer un nombre: ')
NbMagic(nbSecret, nb)
