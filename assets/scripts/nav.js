const nav = document.createElement('header');
nav.id = 'nav';

document.body.prepend(nav);

// recup path:
const path = window.location.pathname;
console.log('queryString', path);

// determine class:
let classToIndex = '';
let classToPortail = '';
if (path.search('portail.html') != -1) {
    console.log(path.search('portail.html'));
    console.log('determine class:portail.html');
    classToPortail = 'nav__thisPage';
} else if (path.search('site.html') != -1) {
    console.log('determine class:site.html');
} else {
    console.log('determine class:index.html');
    classToIndex = 'nav__thisPage';
}

document.getElementById('nav').innerHTML = `
    <a class="${classToIndex}" href="./">setup data</a>
    <a class="${classToPortail}" href="./portail.html">overview</a>
`;