// SCROLL SUAVE
function irPara(secao){
  document.getElementById(secao).scrollIntoView({
    behavior: 'smooth'
  });
}

// CLIQUE NOS PROJETOS
function abrirProjeto(nome){
  alert("Você clicou no projeto: " + nome);
}

// ANIMAÇÃO AO ROLAR
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const posicao = card.getBoundingClientRect().top;
    const tela = window.innerHeight;

    if(posicao < tela - 50){
      card.classList.add('aparecer');
    }
  });
});

// EFEITO NA FOTO
const foto = document.getElementById('img-perfil');

foto.addEventListener('mouseover', () => {
  foto.style.transform = 'scale(1.1)';
});

foto.addEventListener('mouseout', () => {
  foto.style.transform = 'scale(1)';
});