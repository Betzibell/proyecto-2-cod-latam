
var toggle = document.getElementById('container');
var body = document.querySelector('body');


toggle.onclick= function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    
}

const burguer = document.querySelector ('#burguer');
const menu = document.querySelector ('#menu-mobile div:nth-child(2)');
burguer.addEventListener('click', e=>{
    burguer.classList.toggle('active');
    menu.classList.toggle('open');



})