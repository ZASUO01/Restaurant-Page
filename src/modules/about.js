import {createDomElement, appendElements} from './elements';

const description = 'Our main idea is to give you a perfect place to work, join with a team or even have some fun while eating tasty food. Here you can bring your own computer or use ours by paying a single value per hour. You can also choose if you want to stay among everyone or take a private room. Our clients often tell that this enviroment helps to gain more produtivity in their projects. Come here and enjoy with many other coders!'

const aboutLoad = () => {
    const pageDisplay = document.querySelector('#page-display');
    pageDisplay.innerHTML = '';
    const desc = description;

    const aboutContent = createDomElement('div', null, ['about-content','fade-in'], null);
    const aboutH1 = createDomElement('h1', null, null, 'Meet a Coder Cafe!');

    const aboutDescription = createDomElement('div',  null, ['about-description'], null);
    const aboutP = createDomElement('p', null, null,  desc);
    const aboutImg = createDomElement('img', null, null, null, [{name:"src", value:"../src/assets/photo.jpg"}]);

    appendElements(aboutDescription, [aboutP, aboutImg]);
    appendElements(aboutContent, [aboutH1, aboutDescription]);
    pageDisplay.appendChild(aboutContent);
}

export {aboutLoad};