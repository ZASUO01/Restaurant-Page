import {createDomElement, appendElements} from './elements';
import {aboutLoad} from './about';

const homeLoad = () => {
    
    const pageDisplay = document.querySelector('#page-display');
    const lis = document.querySelectorAll('li');
    pageDisplay.innerHTML = '';

    const homeContent = createDomElement('div', null, ['home-content', 'fade-in'], null);
    const homeH1 = createDomElement('h1', null, null, 'Wellcome to');
    const homeH2 = createDomElement('h2', null, null, 'Zasuo\'s Coder Cafe');
    const i = createDomElement('i', null, ['fas','fa-coffee'], null);
    homeH2.appendChild(i);
    const homeP = createDomElement('p', null, null, 'Here you can code while eating some good stuff');
    const homeBtn = createDomElement('button', 'check-it', null, 'Check it out');
    homeBtn.addEventListener('click', () => {
        lis.forEach(li => {
            li.classList.remove('active-tab');
            if(li.textContent == 'About') li.classList.add('active-tab');
        });
        aboutLoad()
    });

    appendElements(homeContent, [homeH1, homeH2, homeP, homeBtn]);
    pageDisplay.appendChild(homeContent);
}

export {homeLoad};