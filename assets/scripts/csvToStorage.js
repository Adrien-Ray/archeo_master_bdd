import { csvToJson } from "./csvToJson.js";
import { saveInLocalStorage } from "./saveInLocalStorage.js";

function csvToStorage(lieuxCsv, materielsCsv) {
    // console.log(lieuxCsv, materielsCsv);
    const jsonLieux = csvToJson(lieuxCsv);
    const jsonMateriels = csvToJson(materielsCsv);
    const tockenToLocalStorage = saveInLocalStorage(jsonLieux, jsonMateriels);
    if (tockenToLocalStorage === true) {
        alert('la base de donnée est à présent chargé');
        location.href = './portail.html';
    } else {
        alert('un problème est survenu');
    }
}

export { csvToStorage };