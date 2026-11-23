const aviso = document.querySelector("#aviso");
const tituloAviso = document.querySelector("#titulo-aviso");
const textoAviso = document.querySelector("#texto-aviso");
const fecharAviso = document.querySelector("#fechar-aviso");

const formulario = document.querySelector("#form-contato");
const nome = document.querySelector("#nome");
const mensagem = document.querySelector("#mensagem");
const contador = document.querySelector("#contador");
const retorno = document.querySelector("#retorno");
0;
function atualizarContador() {
  contador.textContent = `${mensagem.value.length} de ${mensagem.maxLength} caracteres`;
}

atualizarContador();
aviso.showModal();
mensagem.addEventListener("input", atualizarContador);

formulario.addEventListener("input", () => {
  retorno.textContent = "";
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  // O navegador já verifica campos vazios e o formato do e-mail.
  for (const campo of [nome, mensagem]) {
    if (campo.value.trim() === "") {
      retorno.textContent = `Preencha o campo ${campo.labels[0].textContent}.`;
      campo.focus();
      return;
    }
  }

  tituloAviso.textContent = `Tudo certo, ${nome.value.trim()}!`;

  textoAviso.textContent =
    "Seu formulário foi preenchido corretamente e validado neste navegador.";

  fecharAviso.textContent = "Voltar ao formulário";

  aviso.showModal();
});
