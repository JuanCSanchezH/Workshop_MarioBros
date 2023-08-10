import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
const URL = 'http://localhost:3000/mariobros';

export async function createPj(pj) {
    try {
        const response = await axios.post(URL, pj);
        console.log("response create", response.data)
        return response
    } catch (error) {
        console.error('Error creating pj:', error);
        alert('Hubo un error al crear el producto. Por favor, inténtalo de nuevo.');
    }
}

export async function getPj() {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function savePj(pj) {
    try {
        const response = await axios.put(`${URL}/${pj.id}`, {
            ...pj
        });
        return response
    } catch (error) {
        console.error('Error updating pj:', error);
        alert('Hubo un error al actualizar el producto. Por favor, inténtalo de nuevo.');
    }
}

export async function deletePj(pjID) {
    try {
        await axios.delete(`${URL}/${pjID}`);
        return true
    } catch (error) {
        console.error('Error deleting pj:', error);
        alert('Hubo un error al eliminar el producto. Por favor, inténtalo de nuevo.');
    }
}