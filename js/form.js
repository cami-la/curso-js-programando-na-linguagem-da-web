var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
    
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }


    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);
    
    var mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = "";

    form.reset();
    
});

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}


function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    pacienteTr.appendChild(montaTd("info-nome", paciente.nome));
    pacienteTr.appendChild(montaTd("info-peso", paciente.peso));
    pacienteTr.appendChild(montaTd("info-altura", paciente.altura));
    pacienteTr.appendChild(montaTd("info-gordura", paciente.gordura));
    pacienteTr.appendChild(montaTd("info-td", paciente.imc));
    
    return pacienteTr;
}

function montaTd(classe, dado) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    
    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) erros.push("Campo nome não pode ser em branco!");
    if (paciente.peso.length == 0) erros.push("O campo Peso não pode estar em branco!");
    if (paciente.altura.length == 0) erros.push("O campo Altura não pode estar em branco!");    
    if (paciente.gordura.length == 0) erros.push("O campo Gordura não pode estar em branco!")
    
    if (!validaPeso(paciente.peso)) erros.push("Peso inválido!");
    if (!validaAltura(paciente.altura)) erros.push("Altura Inválida");

    return erros;

}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.classList.add("mensagem-erro");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
    
    

