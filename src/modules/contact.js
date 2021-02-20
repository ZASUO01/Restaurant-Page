import {createDomElement, appendElements} from './elements';

const contactLoad = () => {
    const pageDisplay = document.querySelector('#page-display');
    pageDisplay.innerHTML = '';

    const contactContent = createDomElement('div', null, ['contact-content', 'fade-in'], null);
    const form = document.createElement('form');

    const info1 = createDomElement('div', null, ['info'], null);
    const info1P = document.createElement('p');
    const info1i = createDomElement('i', null, ['fas','fa-map-marker'], null);
    const info1span = createDomElement('span', null, null, '1233 Coder\'s Avenue');
    appendElements(info1P, [info1i, info1span]);
    const info1P2 = createDomElement('p', null, null, 'Belo Horizonte, MG');
    appendElements(info1, [info1P, info1P2]);

    const info2 = createDomElement('div', null, ['info'], null);
    const info2P = document.createElement('p');
    const info2i = createDomElement('i', null, ['fas','fa-clock'], null);
    const info2span = createDomElement('span', null, null, 'Mon-Thurs (8am - 6pm)');
    appendElements(info2P, [info2i, info2span]);
    const info2P2 = createDomElement('p', null, null, 'Fri-Sat (10am - 10pm)');
    appendElements(info2, [info2P, info2P2]);

    const info3 = createDomElement('div', null, ['info'], null);
    const info3P = document.createElement('p');
    const info3i = createDomElement('i', null, ['fas','fa-phone'], null);
    const info3span = createDomElement('span', null, null, '(12) 3344-5678');
    appendElements(info3P, [info3i, info3span]);
    info3.appendChild(info3P);    

    const msgH1 = createDomElement('h1', null, null, null);
    const msgH1i = createDomElement('i', null, ['fas','fa-envelope'], null);
    const msgH1Span = createDomElement('span', null, null, ' Message');
    appendElements(msgH1, [msgH1i, msgH1Span]);
    
    const nameInput = createDomElement('input', null, null, null, [{name: "type", value: "text"}, {name:"placeholder", value:"Name"}]);
    const emailInput = createDomElement('input', null, null, null, [{name: "type", value: "text"}, {name:"placeholder", value:"E-mail"}]);
    const textarea = createDomElement('textarea', null, null, null, [{name:"placeholder", value: "Type your message"}]);
    const sendInput = createDomElement('input', null, null, null, [{name: "type", value: "submit"}, {name:"value", value:"Send"}]);
    
    sendInput.addEventListener('click', (ev) => {ev.preventDefault()});
    appendElements(form, [info1,info2,info3,msgH1, nameInput, emailInput, textarea, sendInput])
    
    
    contactContent.appendChild(form)
    pageDisplay.appendChild(contactContent);
}


export {contactLoad};