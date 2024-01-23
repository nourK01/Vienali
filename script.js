let marker = document.querySelector('#indicator'); 
let nav = document.querySelector('nav');
let item = document.querySelectorAll('nav a'); 
nav.onclick = function(){

 marker.classList.toggle('change'); 
}