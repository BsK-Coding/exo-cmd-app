// écrire un programme pyramid.js qui prend 2 arguments sur la ligne de commande

/* Fonction */
// let nbElem => nombre d'element de la base de ma pyramide
// let charElem => le caractère qui représentera le motif
// For NbElem { console.log(charElem.repeat(index)) }

const pyramid = (nbElem, charElem, reverse) => {
  if (!reverse) {
    for (let i = 1; i <= nbElem; i += 1) {
      console.log(charElem.repeat(i))
    }
  }
  else {
    for (let i = nbElem; i >= 1; --i) {
      console.log(charElem.repeat(i))
    }
  }
}

/* Boucles IF qui Test les erreurs */
// 5 arguments 1=node 2=programme 3=argument (nbElem) 4=argument (charElem) 5=argument -r (Reverse)

if (process.argv.length < 4 || process.argv.length > 5) {
  console.log('La commande doit avoir 5 arguments: node pyramid.js nombreElement motif reverse')
  process.exit(1)
}

/* Boucles IF qui Test l'argument 5 */
if (process.argv.length === 5 && process.argv[4] !== '-r') {
  console.log("cet argument d'inversement de pyramid est incorrecte")
  process.exit(1)
}

/* Boucle basé sur les indexs */
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} nombreElement doit être un nombre`)
  process.exit(1)
}

/* argument entré à partir de l'index 3 */
/* Index 0 et 1 et dédié à node et programme lancé */

let nbElem = Number(process.argv[2])
let charElem = process.argv[3]
let isReverse = process.argv.length === 5 ? true : false

pyramid(nbElem, charElem, isReverse)
