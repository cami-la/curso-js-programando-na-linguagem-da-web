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
var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso Inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso Inválido";
}

if(altura <= 0 || altura >= 3.00) {
    console.log("Altura Inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida";
    
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

 

console.log(imc);




