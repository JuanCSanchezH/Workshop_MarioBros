import { getElementos } from "../script/script.js";

let divForm = document.querySelector('.container-fluid');
let btnCategory1 = document.getElementById('btnCategory1');
let btnCategory2 = document.getElementById('btnCategory2');

btnCategory1.addEventListener('click', () => {
    divForm.style.display = 'block'
    getElementos();
})

btnCategory2.addEventListener('click', () => {
    divForm.style.display = 'none';
})