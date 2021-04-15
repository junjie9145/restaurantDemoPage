function createHeader (id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const logo = document.createElement('h1');
    logo.textContent = text;
    header.appendChild(logo);
    return header;
}


function createButton (id, text) {
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.classList.add('btn')
    const span = document.createElement('span');
    span.textContent = text;
    button.appendChild(span);
    return button
}

function createNav (id) {
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeBtn = createButton('home', 'home');
    const menuBtn = createButton('wines', 'wines');
    const contactBtn = createButton('contact', 'contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}

function createFooter (id, text) {
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const legalInfo = document.createElement('h3');
    legalInfo.textContent = text;
    footer.appendChild(legalInfo);
    return footer
}

function createMainContainer (id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}

function loadPage() {
    const container = document.querySelector('.content');
    const header = createHeader('header', 'Walla Squared');
    container.appendChild(header);

    const nav = createNav('nav');
    header.appendChild(nav);

    const tabs = createMainContainer('tab-content');
    container.appendChild(tabs);

    const footer = createFooter('footer', 'Walla Squared copyright 2021');
    container.appendChild(footer);
}

export default loadPage