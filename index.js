const data = [
    {
        "id": 1,
        "name": "Shirt One",
        "price": "$15.00",
        "colors": [
            "gray", "red", "blue"
        ],
        "imageUrl":"images/gray-shirt.jpg"
    },
]


function onLoad(){
    fetch()
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    createHtmlElements(data);
  });
  const parsedJSON = JSON.parse(data);
  createHtmlElements(data);
}

function createHtmlElements(data){
    const container = document.querySelector('#container');
    data.forEach(shirt => {
        let element = document.createElement('div');
        element.classList.add('shirt-box');
        element.id = shirt.id;
        element.onClick = function() { tileClick(shirt.id) };

        let span = document.createElement('span');
        span.innerHTML = shirt.imageUrl;

        element.appendChild(img);
        element.appendChild(span);

        ontainer.appendChild(element);
    });
}

function tileClick(id) {
    window.location.href = `details/details.html?id=${id}`;
}

document.addEventListener("DOMContentLoaded", onLoad);