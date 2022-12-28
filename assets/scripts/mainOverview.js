const jsonLieux = JSON.parse(localStorage.getItem('jsonLieux'));
const jsonMateriels = JSON.parse(localStorage.getItem('jsonMateriels'));
console.log(jsonLieux);
console.log(jsonMateriels);
let overviewTableDom = '<tr><td>Site</td><td>Region</td><td>commune</td><td>datation</td></tr>';
for (let index = 0; index < jsonLieux.length; index++) {
    const lieu = jsonLieux[index];
    overviewTableDom = overviewTableDom + `<tr>
        <td><a href="./site.html?id=${lieu.id}">${lieu.sites}</a></td>
        <td>${lieu.region}</td>
        <td>${lieu.commune}</td>
        <td>${lieu.datation}</td>
    </tr>`;
}
document.getElementById('overviewTable').innerHTML = overviewTableDom;