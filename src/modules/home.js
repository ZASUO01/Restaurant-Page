import {createDomElement, appendElements} from './elements';

const homeLoad = () => {
    
    const pageDisplay = document.querySelector('#page-display');
    pageDisplay.innerHTML = '';

    const homeContent = createDomElement('div', null, ['home-content', 'fade-in'], null);
    const homeH1 = createDomElement('h1', null, null, 'Wellcome to');
    const homeH2 = createDomElement('h2', null, null, 'Zasuo\'s Coder Cafe');
    const i = createDomElement('i', null, ['fas','fa-coffee'], null);
    homeH2.appendChild(i);
    const homeP = createDomElement('p', null, null, 'Here you can code while eating some good stuff');
    const homeBtn = createDomElement('button', 'check-out', null, 'Check our menu');
    
    appendElements(homeContent, [homeH1, homeH2, homeP, homeBtn]);
    pageDisplay.appendChild(homeContent);
}

export {homeLoad};