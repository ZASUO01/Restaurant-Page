import '@fortawesome/fontawesome-free/js/all.js';
import './scss/main.scss';

import {pageLoad} from './modules/pageLoad';
import {homeLoad} from './modules/home';
import {aboutLoad} from './modules/about';
import {menuLoad} from './modules/menu';
import {contactLoad} from './modules/contact';

pageLoad();
homeLoad();

const lis = document.querySelectorAll('li');
const checkBtn = document.querySelector('#check-it')

lis.forEach(tab => {
    tab.addEventListener('click', () => {
        lis.forEach(t => {t.classList.remove('active-tab')});
        if(tab.textContent == 'Home') homeLoad();
        else if(tab.textContent == 'About') aboutLoad();
        else if(tab.textContent == 'Menu') menuLoad();
        else if(tab.textContent == 'Contact') contactLoad();
        tab.classList.add('active-tab')
    })
});

