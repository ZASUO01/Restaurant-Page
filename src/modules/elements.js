const createDomElement = (tag, id, classList, content) => {
    const element = document.createElement(tag);
    if(id) element.id = id;
    if(classList){
        classList.forEach(divClass => {
            element.classList.add(divClass);
        });
    }
    if(content) element.textContent = content;

    return element;
}

const appendElements = (parent, elList) => {
    elList.forEach(el => {
        parent.appendChild(el)
    })
}



export {createDomElement, appendElements};