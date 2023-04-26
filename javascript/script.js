// import { ProdUrl } from "./product.js";

const baseUrl = `https://api.noroff.dev/api/v1`;
const url = `${baseUrl}/square-eyes/`;


const movieList = document.querySelector(".movie-container");



async function getData() {
    const response = await fetch(url);
    const results = await response.json();
    const movies = results;

    movieList.innerHTML = "";

    for (let i = 0; i < movies.length; i++) {
        // console.log(movies[i].id);
        movieList.innerHTML += `<div>
                                <a href="../product.html?id=${movies[i].id}"><img class="item" id="img" src="${movies[i].image}"></a>
                                </div>`;
    }
    
    console.log({movies});
    // return movieList;
   
}

getData();


// function renderData({title, description}) {
//     const divWrapper = document.createElement(`div`);
//     divWrapper.classList.add(`item`);
//     const heading = document.createElement(`h2`);
//     const paragraph = document.createElement(`p`);
//     heading.textContent = title;
//     paragraph.textContent = description;
//     divWrapper.append(heading, paragraph);
//     return divWrapper;
// }

// renderData();

// async function renderHtml() {
//     const data = await fetchData();
//     console.log({data});
//     const movieContainer = document.querySelector(`.movie-container`);
//     movieContainer.append(JSON.stringify(data));
// }

// renderHtml();

