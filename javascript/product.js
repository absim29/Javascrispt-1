
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const ProdUrl = `https://api.noroff.dev/api/v1/square-eyes?id=${id}`;


const product = document.querySelector(".container");


async function getMovie() {

    try {
        const answer = await fetch(ProdUrl);
        const result = await answer.json();
        const movie = result;
        // product.innerHTML = "";
        // product.innerHTML += `<div>
        //                       <h1>${movie[title]}</h1>
        //                       <p>${movie.description}</p>
        //                       </div>`;
        // for (let i = 0; i < movie.length; i++) {
        //     // console.log(movies[i].id);
        //     product.innerHTML += `<div>
        //                           <h1>${movie[i].title}</h1>
        //                           </div>`;
        // }
        createHtml(movie);
        console.log(movie);
    }

    catch(error) {
        console.log(error);
        // product.innerHTML = message("error", error);
    }

    // product.innerHTML = "";

    function createHtml(movie) {
        product.innerHTML = `<div class="containproduct">
                            <h1>${movie.title}</h1>
                            <p>${movie.description}</p>
                            </div>`;
    }
}

getMovie();


