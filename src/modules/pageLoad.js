import {createDomElement, appendElements} from './elements';

const pageLoad = () => {
    const content = document.querySelector('#content');

    
    const tabsContainer = createDomElement('div', null, ['tabs-container'], null);
    const tabsUl = document.createElement('ul');
    const homeLi = createDomElement('li', null, ['active-tab'], 'Home');
    const menuLi = createDomElement('li', null, null, 'Menu');
    const contactLi = createDomElement('li', null, null, 'Contact');
    appendElements(tabsUl, [homeLi, menuLi, contactLi]);
    tabsContainer.appendChild(tabsUl);

    const pageDisplay = createDomElement('div', 'page-display', ['page-display'], null);

    const footer = document.createElement('footer');
    const footerH1 = createDomElement('h1', null, null, 'Made by ZASUO');
    footer.appendChild(footerH1);

    appendElements(content, [tabsContainer, pageDisplay, footer]);
}

export {pageLoad};