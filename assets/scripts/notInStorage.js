import { automaticSetup } from "./automaticSetup.js";
import { csvToStorage } from "./csvToStorage.js";

function automateStorage() {
    if (localStorage.getItem('jsonMateriels') && localStorage.getItem('jsonLieux')) {
        console.log('is ok');
    } else {
        console.log('not ok');
        csvToStorage(automaticSetup.lieux, automaticSetup.materiels);
    }
}
automateStorage();