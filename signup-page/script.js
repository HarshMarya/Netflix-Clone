const wrapper = document.querySelector('.wrapper');
const resgisterLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const navBar = document.querySelector('.nav-bar');


resgisterLink.addEventListener('click', ()=>{
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
})

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup')
})

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup')
})