var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var pacienteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = form.nome.value;
    pacienteTr.appendChild(nomeTd);
    pesoTd.textContent = form.peso.value;
    pacienteTr.appendChild(pesoTd);
    alturaTd.textContent = form.altura.value;
    pacienteTr.appendChild(alturaTd);
    gorduraTd.textContent = form.gordura.value;
    pacienteTr.appendChild(gorduraTd);
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});