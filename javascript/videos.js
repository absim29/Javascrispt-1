const baseUrl = `https://api.noroff.dev/api/v1`;
const url = `${baseUrl}/square-eyes`;

const movieList = document.querySelector(".movie-container");

export async function getData() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        return results;
    }
    catch(error) {
        console.error({error:'An error has occurred in the fetch api'})
    }
}

async function renderHtml() {
    const movies = await getData();
    movieList.innerHTML = '';
    movies.forEach(function(element, index) {
        movieList.innerHTML += 
            `<div>
                <a href="../product.html?id=${element.id}"><img class="item" id="img" src="${element.image}"></a>
            </div>`;
    })
        
    };

renderHtml();
