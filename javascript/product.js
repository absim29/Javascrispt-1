
const product = document.querySelector(".containproduct")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

export const ProdUrl = `https://api.noroff.dev/api/v1/square-eyes/${id}`;

async function fetchMovie() {
        const response = await fetch(ProdUrl);
        const results = await response.json();
        const movie = results;

        console.log({results});
    for (let i = 0; i < movie.length; i++) {
        product.innerHTML += `<div>
                            <h1>${movie[i].title}</h2>
                            </div>`;
    }

}

fetchMovie();