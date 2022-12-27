import { csvToJson } from "./csvToJson.js";
import { saveInLocalStorage } from "./saveInLocalStorage.js";

document.getElementById('enterCsv').addEventListener('click', () => {
    const jsonLieux = csvToJson(document.getElementById('inputCsvLieux').value);
    const jsonMateriels = csvToJson(document.getElementById('inputCsvMateriels').value);
    // console.log(jsonLieux, jsonMateriels);
    const tockenToLocalStorage = saveInLocalStorage(jsonLieux, jsonMateriels);
    if (tockenToLocalStorage === true) {
        alert('vos données sont enregistrer temporairement');
        location.href = './portail.html';
    } else {
        alert('un problème est survenu');
    }
    // console.log(JSON.parse(localStorage.getItem('jsonLieux')));
    // console.log(JSON.parse(localStorage.getItem('jsonMateriels')));
    /* document.getElementById('viewData').style.display = 'block';
    document.getElementById('viewData').addEventListener('click', () => {
        location.href = './portail.html';
    }); */
})