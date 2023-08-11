import { getElements } from "../script/script.js";

let divForm = document.querySelector('.container-fluid');
let btnCategory1 = document.getElementById('btnCategory1');
let btnCategory2 = document.getElementById('btnCategory2');
const btnGuardar = document.getElementById('btnGuardar');
const btnEditar = document.getElementById('btnEditar');

btnCategory1.addEventListener('click', () => {
    divForm.style.display = 'block'
    getElements();
})

btnCategory2.addEventListener('click', () => {
    divForm.style.display = 'none';
})

document.addEventListener('click', (event)=>{
    if(event.target.classList.contains("a_hongomalo")){
        btnGuardar.style.display = 'block';
        btnEditar.style.display = 'none';
    }
})
