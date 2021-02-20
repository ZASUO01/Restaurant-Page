import '@fortawesome/fontawesome-free/js/all.js';
import './scss/main.scss';

import {pageLoad} from './modules/pageLoad';
import {homeLoad} from './modules/home';
import {menuLoad} from './modules/menu';
import {contactLoad} from './modules/contact';

pageLoad();
homeLoad();
//contactLoad()


const lis = document.querySelectorAll('li');

lis.forEach(tab => {
    tab.addEventListener('click', () => {
        if(tab.textContent == 'Home') homeLoad();
        else if(tab.textContent == 'Menu') menuLoad();
        else if(tab.textContent == 'Contact') contactLoad();
    })
})




const key = 'AIzaSyAn5MkC2usYYNK-WuBwLgxkDml97M9G6Yc';