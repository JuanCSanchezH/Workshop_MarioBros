import { createPj, getPj, savePj, deletePj } from "./crud.js";

let showItems = document.querySelector('.grid-elementos');

export const getElementos = async () => {
    showItems.innerHTML = '';
    //Query:
    const data = await getPj();
    console.log(data);
    data.forEach(element => {
        //Desestructuración
        const {name, genero, img} = element;
        //Estrutura de visualización dinámica
        showItems.innerHTML += `
        <div class="col elementos">
            <a href="#" class="enlace-detalle-elemento">
                <div class="card bg-dark text-white gradiente">       
                    <img src="${img}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${name}</h5>
                        <p class="card-text body2Regular">${genero}</p>
                    </div>
                </div>
            </a>
        </div>`
    });
}

