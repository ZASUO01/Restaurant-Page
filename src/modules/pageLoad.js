const pageLoad = () => {
    const content = document.querySelector('#content');

    //Tabs tags
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tabs-container');
    const tabsUl = document.createElement('ul');
    const homeLi = document.createElement('li');
    homeLi.textContent = 'Home';
    homeLi.classList.add('active-tab');
    const menuLi = document.createElement('li');
    menuLi.textContent = 'Menu';
    const contactLi = document.createElement('li');
    contactLi.textContent = 'Contact';
    tabsUl.appendChild(homeLi);
    tabsUl.appendChild(menuLi);
    tabsUl.appendChild(contactLi);
    tabsContainer.appendChild(tabsUl);

    //page display tags
    const pageDisplay = document.createElement('div');
    pageDisplay.setAttribute('id', 'page-display');
    pageDisplay.classList.add('page-display');

    //footer tags
    const footer = document.createElement('footer');
    const footerH1 = document.createElement('h1');
    footerH1.textContent = 'Made by ZASUO';
    footer.appendChild(footerH1);

    content.appendChild(tabsContainer);
    content.appendChild(pageDisplay);
    content.appendChild(footer);
}

export {pageLoad};