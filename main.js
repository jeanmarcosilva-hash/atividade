const form = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const campoA = Number(form.campoA.value);
  const campoB = Number(form.campoB.value);

  mensagem.style.display = 'none';
  mensagem.className = 'message';

  if (isNaN(campoA) || isNaN(campoB)) {
    mensagem.textContent = 'Por favor, preencha ambos os campos com números válidos.';
    mensagem.classList.add('error');
    mensagem.style.display = 'block';
    return;
  }

  if (campoB > campoA) {
    mensagem.textContent = 'Formulário válido! Campo B é maior que Campo A.';
    mensagem.classList.add('success');
  } else {
    mensagem.textContent = 'Formulário inválido! Campo B deve ser maior que Campo A.';
    mensagem.classList.add('error');
  }

  mensagem.style.display = 'block';
});