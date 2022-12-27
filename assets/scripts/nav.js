const nav = document.createElement('header');
nav.id = 'nav';

document.body.prepend(nav);

document.getElementById('nav').innerHTML = `
    <a href="./">new data</a>
    <a href="./portail.html">overview</a>
`;