import { createPj, getPj, savePj, deletePj } from "./crud.js";

let showItems = document.querySelector('.grid-elementos');
const formulario = document.getElementById('formulario');
const btnGuardar = document.getElementById('btnGuardar');
const btnEditar = document.getElementById('btnEditar');
let ID = "";

// LISTAR (MOSTRAR) PERSONAJES
export const getElements = async () => {
    showItems.innerHTML = '';
    //Query:
    const data = await getPj();
    console.log(data);
    data.forEach(element => {
        //Desestructuración
        const {name, genero, img, id} = element;
        //Estrutura de visualización dinámica
        showItems.innerHTML += `
        <div class="col elementos">
            <div class="card bg-dark text-white gradiente">
                <figure><img src="${img}" class="card-img" alt="..."></figure>    
                <div class="card-img-overlay">
                    <h5 class="card-title body2Bold">${name}</h5>
                    <p class="card-text body2Regular">${genero}</p>
                </div>
                <div class="conteBotones">
                    <button id="btnEditar" type="button" class="btn btn-secondary" onclick="searchElement(${id})" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                    <button id="btnEliminar" type="button" class="btn btn-secondary" onclick="deleteElement(${id})">Eliminar</button>
                </div>
            </div>
        </div>`
    });
}

// CREAR PERSONAJE
async function createItem(){
    const name = document.getElementById('name').value;
    const genero = document.getElementById('genero').value;
    const img = document.getElementById('img').value;

    const character = {
        name: name,
        genero: genero,
        img: img
    }
    await createPj(character);
}

formulario.addEventListener('submit', async ()=> {
    await createItem();
})

// EDITAR PERSONAJE
window.searchElement = async function searchElement(CharId) {
    btnGuardar.style.display = 'none';
    btnEditar.style.display = 'block';

    const Elements = await getPj();
    const Element = Elements.find(p => p.id === CharId);
    if (Element) {
        document.getElementById('name').value = Element.name;
        document.getElementById('genero').value = Element.genero;
        document.getElementById('img').value = Element.img;
        ID = Element.id;
    }
}

window.editElement = async function editElement(){
    const name = document.getElementById('name').value;
    const genero = document.getElementById('genero').value;
    const img = document.getElementById('img').value;
    const elemento = {
        name: name,
        genero: genero,
        img: img,
        id: ID
    }
    await savePj(elemento);
}

//BORRAR PERSONAJES
window.deleteElement = async function deleteElement(id) {
    deletePj(id)
}
