// get id url params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = parseFloat(urlParams.get('id'));
console.log(id);

const jsonLieux = JSON.parse(localStorage.getItem('jsonLieux'));
const jsonMateriels = JSON.parse(localStorage.getItem('jsonMateriels'));
console.log(jsonLieux);
console.log(jsonMateriels);

const thisLieu = jsonLieux.find(o => o.id === id);
jsonMaterielsForThis = jsonMateriels.filter(o => o.id_site === id);
thisLieu.materiels = jsonMaterielsForThis;
console.log(thisLieu);

// display data in template
document.getElementById('title').innerText = `Site: ${thisLieu.sites}`;
document.getElementById('commune').innerText = `Commune: ${thisLieu.commune}`;
document.getElementById('region').innerText = `Region: ${thisLieu.region}`;
document.getElementById('date').innerText = `Datation: ${thisLieu.datation}`;
document.getElementById('nmi').innerText = `Nombre minimum d'individus: ${thisLieu.NMI}`;
document.getElementById('geoloc').innerText = `coordonnes: latitude: ${thisLieu.latitude} longitude: ${thisLieu.longitude}`;
document.getElementById('page').innerText = `page: ${thisLieu.pages}`;
document.getElementById('src').innerText = `source(s): ${thisLieu.sources}`;
document.getElementById('typeObjects').innerText = `Types d'objets retrouvées: ${thisLieu.type_objet_retrouves}`;

let materielsDom = '';
for (const materiel of thisLieu.materiels) {
    materielsDom = materielsDom + `
        <li>types: ${materiel.types}
            <ul>
                <li>matériaux: ${materiel.materiaux}</li>
                <li>observations: ${materiel.observations}</li>
                <li>structures: ${materiel.structures}</li>
            </ul>
        </li>
    `;
}

document.getElementById('materiels').innerHTML = materielsDom;
