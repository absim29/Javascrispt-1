import {getData} from "./videos.js";

console.log(getData);

const carouselImg = document.querySelector(".carousel");

async function carousel() {
    const images = await getData();
    // console.log({images});
    carouselImg.innerHTML = '';
    images.forEach(function(element, index) {
        carouselImg.innerHTML += 
            `<img src="${element.image}" alt="Image of movie" class="imghome">`;
    })
        
    };
    
carousel();

