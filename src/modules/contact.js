import {createDomElement, appendElements} from './elements';

const contactLoad = () => {
    const pageDisplay = document.querySelector('#page-display');
    pageDisplay.innerHTML = '';

    const contactContent = createDomElement('div', null, ['contact-content', 'fade-in'], 'Im in contact page');
    contactContent.style.color= 'white';

    pageDisplay.appendChild(contactContent)
}


export {contactLoad};