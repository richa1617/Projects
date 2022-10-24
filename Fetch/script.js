
let image=document.querySelector("#image-container")

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response=>response.json())
    .then(function (data) {
        
        image.innerHTML=`<img src="${data.message}"/>`
    })