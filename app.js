//EN ESTE PROYECTO VOY A INTENTAR VARIAS FORMAS DE SOLUCIONARLO, DESCOMENTAR EL LOG QUE QUERAIS VISUALIZAR

//Variables
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

//1. Iteración
for (let i = 0; i < pronoun.length; i++) {

    for (let j = 0; j < adj.length; j++) {

        for (let k = 0; k < noun.length; k++) {

            //console.log(pronoun[i] + adj[j] + noun[k] + ".com");

        }
    }
}
//1.1. Iteración con un solo array
let completName = [pronoun, adj, noun]

for (let i = 0; i < completName[0].length; i++) {

    for (let j = 0; j < completName[1].length; j++) {

        for (let k = 0; k < completName[2].length; k++) {

            //console.log(completName[0][i] + completName[1][j] + completName[2][k] + ".com");

        }
    }
}

//2. Iteración con varios dominios
let domain = ['.com', '.es', '.org', '.net', '.us', '.io']

for (let i = 0; i < completName[0].length; i++) {

    for (let j = 0; j < completName[1].length; j++) {

        for (let k = 0; k < completName[2].length; k++) {

            for (let x = 0; x < domain.length; x++) {

                //console.log(completName[0][i] + completName[1][j] + completName[2][k] + domain[x]);

            }

        }
    }
}

//3. Ejercicio complementario "domain hacks"
let nameHackeable = ['juguetes', 'vacaiones', 'puedes', 'delicious', 'thelastofus', 'movies'];
let acortado = '';

for (let i = 0; i < nameHackeable.length; i++) {
    if (nameHackeable[i].includes('es')) {
        acortado = nameHackeable[i].slice(0, nameHackeable[i].length - 2)
        //console.log(acortado + '.es');
        
    } else if (nameHackeable[i].includes('us')) {
        acortado = nameHackeable[i].slice(0, nameHackeable[i].length - 2)
        //console.log(acortado + '.us');
    }
    
}