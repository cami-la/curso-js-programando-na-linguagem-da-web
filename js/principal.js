var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

/*console.log(paciente); //tr
console.log(tdPeso); //td que tem o peso
console.log(peso); //obter 100

console.log(tdAltura);
console.log(altura);
*/

var imc = peso / altura * altura;




