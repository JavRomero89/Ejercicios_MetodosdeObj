// Crea un objeto llamado citizen1 y dale las propiedades name, lastname y age. Elige tú los valores.
let citizen1= {
    name:"Javier",
    lastname:"Romero",
    age:34
}

//Una vez creado, añádele la propiedad city, con el valor que tú quieras, y cambia el valor de la propiedad age. Comprueba que los cambios han surtido efecto.
citizen1.city= "Toledo"
citizen1.age= 45

console.log(citizen1);

//Crea una función checkCitizenship que acepte como parámetro un objeto, compruebe la edad del ciudadano y, si ésta es mayor de 18, añada la propiedad canVote: true; de lo contrario, debe añadir canVote: false. Usála con el objeto citizen1.

function checkCitizenship(patata) {
   if (patata.age > 18) {
    patata.canVote = true
   }
   else {
    patata.canVote = false
   }

}
checkCitizenship(citizen1)
console.log(citizen1);

//Crea una función llamada createCitizen que acepte 3 strings: nombre, apellido y edad. Si los parámetros son válidos, debe retornar un nuevo objeto del tipo:

// {
// 	name: <<nombre>>,
// 	lastname: <<apellido>>,
// 	age: <<age>>
// }
let citName= "Javier"
let citLastName = "Romero"
let citAge = 50
function createCitizen(citName,citLastName,citAge) {
   let Tomate = {
    name: citName,
    lastname: citLastName,
    age: citAge
   }
   return Tomate
 }

console.log(createCitizen(citName,citLastName,citAge));

// Crea una variable citizen2 y asígnale como valor el resultado de la función anterior con los parámetros que desees.

let citizen2 = createCitizen(citName,citLastName,citAge)

console.log(citizen2);

//Crea una función checkVoting que acepte como parámetro un objeto, compruebe si el objeto en cuestión tiene la propiedad canVote y retorne el resultado.

function checkVoting(objeto) {
    objeto={}
}
console.log(objecto.hasOwn("canVote"));
    

