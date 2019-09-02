import { data } from './index.js'

let shirtId;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if(!results) return null;
    if(!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ''));

}

function getShirt(Id) {
    let shirtObg = null;
    data.forEach(shirt => {
        if (shirt.id === id) {
            shirtObj = Object.assign({}, shirt);
        }
    })

    if (shirtObg) {
        loadShirtHtml(shirtObg);
    }
}

function loadShirtHtml(shirt) {
    const container = document.querySelector("#container");

    let element = document.createElement('div');
    element.classList.add('tile');
    element.id = shirt.id;

    let span = document.createElement('span');
    span.innerHTML = shirt.name;

    let img = document.createElement('img');
    img.src = shirt.imageUrl;

    element.appendChild(img);
    element.appendChild(span);

    container.appendChild(element);
}

document.addEventListener("DOMContentLoaded", function(){
    shirtId = parseInt(getParameterByName("id"));
    getShirt(shirtId);
})