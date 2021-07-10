var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function (paciente) {
  paciente.addEventListener("dblclick", function() {
    console.log("Fui clicado com um duplo click!")
    this.remove();
  });
});