import {createDomElement, appendElements} from './elements';
const menuData = require('./menuData.json');

const menuLoad = () => {
    const pageDisplay = document.querySelector('#page-display');
    pageDisplay.innerHTML = '';
    const obj = menuData;

    const menuContent = createDomElement('div', null , ['menu-content', 'fade-in'], null);
    const menuPaper = createDomElement('div', null, ['menu-paper'], null);
    const paperH1 = createDomElement('h1',null,['paper-title'],'Menu ');
    const i = createDomElement('i', null, ['fas', 'fa-utensils'], null);
    paperH1.appendChild(i);
    const paperContents = createDomElement('div', null, ['paper-contents'], null);
    
    for(const type in obj){
        const categorySingle = createDomElement('div', null, ['category-single'], null);
        const h1 = createDomElement('h1', null, null, `${type}`);
        categorySingle.appendChild(h1);

        obj[type].forEach(food => {
            const p = createDomElement('p',null,null, `${food.name}`);
            const span = createDomElement('span',null,null, food.price);
            p.appendChild(span);
            categorySingle.appendChild(p);
        })
        paperContents.appendChild(categorySingle)
    }
    appendElements(menuPaper, [paperH1, paperContents]);
    menuContent.appendChild(menuPaper);
    pageDisplay.appendChild(menuContent);
    
}

export {menuLoad};