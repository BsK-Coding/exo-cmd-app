/* Boucles IF qui Test les erreurs */
/* 3 arguments 1=node 2=programme 3=argument (valeur) */

if (process.argv.length != 3) {
  console.log(`La commande doit comporter au moin 3 arguments: node sayMyname.js prenom`)
  process.exit(1) // exit the program with code status 1
}

/* Boucle basé sur les indexes pour être certains que la valeur entrée doit comporter des caractères */
if (!isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} le prenom doit comporter des caractères.`)
  process.exit(1)
}

let name = process.argv[2]
console.log(`My name is ${name}`)
