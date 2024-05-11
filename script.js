const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Função para ajustar a posição do rolar para as seções e fechar o menu
function ajustarPosicaoScroll(event) {
  event.preventDefault(); // Impede o comportamento padrão do link
  const targetId = this.getAttribute('href').substring(1); // Obtém o ID da seção alvo
  const targetElement = document.getElementById(targetId); // Obtém a seção alvo
  const headerHeight = document.getElementById('header').offsetHeight; // Obtém a altura do cabeçalho
  const targetPosition = targetElement.offsetTop - headerHeight; // Calcula a posição alvo considerando o cabeçalho
  window.scrollTo({
    top: targetPosition, // Define a posição de rolagem
    behavior: 'smooth' // Adiciona um efeito de rolagem suave
  });

  // Fecha o menu após clicar em um link
  const nav = document.getElementById('nav');
  nav.classList.remove('active');
  btnMobile.setAttribute('aria-expanded', false);
  btnMobile.setAttribute('aria-label', 'Abrir Menu');
}

// Adiciona o evento de clique aos links do menu
const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', ajustarPosicaoScroll);
});
