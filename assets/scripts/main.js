import { csvToJson } from "./csvToJson.js";
import { saveInLocalStorage } from "./saveInLocalStorage.js";
import { automaticSetup } from "./automaticSetup.js";

function csvToStorage(lieuxCsv, materielsCsv) {
    // console.log(lieuxCsv, materielsCsv);
    const jsonLieux = csvToJson(lieuxCsv);
    const jsonMateriels = csvToJson(materielsCsv);
    const tockenToLocalStorage = saveInLocalStorage(jsonLieux, jsonMateriels);
    if (tockenToLocalStorage === true) {
        alert('vos données sont enregistrer temporairement');
        location.href = './portail.html';
    } else {
        alert('un problème est survenu');
    }
}




document.getElementById('enterCsv').addEventListener('click', () => {
    csvToStorage(document.getElementById('inputCsvLieux').value, document.getElementById('inputCsvMateriels').value);
})

function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var lieux = document.getElementById('inputFileLieux').files[0]; 
    var materiels = document.getElementById('inputFileMateriels').files[0]; 
    let lieuxString = '';
    let materielsString = '';
    if (lieux && materiels) {
        var r = new FileReader();
        r.onload = function(e) { 
            lieuxString = e.target.result;
            console.log(lieuxString);
        }
        var s = new FileReader();
        s.onload = function(e) { 
            materielsString = e.target.result;
            console.log(materielsString);
        }
        r.readAsText(lieux);
        s.readAsText(materiels);
        setTimeout(() => {
            // only on file: have /n at bottom. delete it!
            const lieuxStringLenght = lieuxString.length;
            const lieuxStringLast = lieuxString.slice(0, lieuxStringLenght - 1);
            const materielsStringLenght = materielsString.length;
            const materielsStringLast = materielsString.slice(0, materielsStringLenght - 1);
            csvToStorage(lieuxStringLast, materielsStringLast);
        }, 500);
    } else { 
        alert("Failed to load file");
}
}

document.getElementById('submitFiles').addEventListener('click', readSingleFile, false);

document.getElementById('submitAutomatic').addEventListener('click', () => {
    csvToStorage(automaticSetup.lieux, automaticSetup.materiels);
})