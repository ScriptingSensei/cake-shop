
// criando as variaveis para as funções
const wrapper = document.querySelector('.wrapper');                             
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


// função para deixar ativo
registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');

});


// função para desativar após deixar ativo.
loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');

});

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');

});

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active');

});