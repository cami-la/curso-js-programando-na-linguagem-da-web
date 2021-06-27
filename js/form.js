var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
    
    var pacienteTr = montaTr(paciente);

    
    if(!validaPaciente(paciente)){
        console.log("Paciente inválido");
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);
    
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
    if (validaPeso(paciente.peso) && validaAltura(paciente.altura)) return true;
    else return false;
}