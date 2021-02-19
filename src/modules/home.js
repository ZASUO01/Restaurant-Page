const homeLoad = () => {
    
    const pageDisplay = document.querySelector('#page-display');
    
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    homeContent.classList.add('fade-in');

    const homeH1 = document.createElement('h1');
    homeH1.textContent = 'Welcome to';
    const homeH2 = document.createElement('h2');
    homeH2.textContent = 'Zasuo\'s Coder Cafe';
    const i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-coffee');
    homeH2.appendChild(i);
    const homeP = document.createElement('p');
    homeP.textContent = 'Here you can code while eating some good stuff.';
    const homeBtn = document.createElement('button');
    homeBtn.setAttribute('id','check-out');
    homeBtn.textContent = 'Check our menu';

    homeContent.appendChild(homeH1);
    homeContent.appendChild(homeH2);
    homeContent.appendChild(homeP);
    homeContent.appendChild(homeBtn);

    pageDisplay.appendChild(homeContent);
}

export {homeLoad};