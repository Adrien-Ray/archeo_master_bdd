const nav = document.createElement('header');
nav.id = 'nav';

document.body.prepend(nav);

const queryString = window.location.search;
console.log('queryString', queryString);

document.getElementById('nav').innerHTML = `
    <a href="./">new data</a>
    <a href="./portail.html">overview</a>
`;