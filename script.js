let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvar() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function mostrarTarefas() {
  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.textContent = tarefa;

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.onclick = () => {
      tarefas.splice(index, 1);
      salvar();
      mostrarTarefas();
    };

    li.appendChild(btnExcluir);
    lista.appendChild(li);
  });
}

function adicionarTarefa() {
  const input = document.getElementById("novaTarefa");
  const texto = input.value.trim();
  if (texto !== "") {
    tarefas.push(texto);
    salvar();
    mostrarTarefas();
    input.value = "";
  }
}

mostrarTarefas();
