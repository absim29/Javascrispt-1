
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const ProdUrl = `https://api.noroff.dev/api/v1/square-eyes/${id}`;


const product = document.querySelector(".container");


async function getMovie() {
    try {
        const answer = await fetch(ProdUrl);
        const result = await answer.json();
        return result;
    }
    catch(error) {
        console.error({error:'An error has occurred in the fetch api'})
    }

}

getMovie();


async function createHtml() {
    const movie = await getMovie();
    console.log({movie});
    product.innerHTML = '';
    product.innerHTML +=
        `<section class="container">
            <div class="containproduct">
                <h1>${movie.title}</h1>
                <p class="prod-text">${movie.description}</p>     
                <p>Release date: ${movie.released}</p>
                <p>Rated: ${movie.rating}</p>
                <p>Genre: ${movie.genre}</p>
                <h2 id="price"></h2>
                <h3 id="sale"></h3>
            </div>
            <div class="contain-item">
                <img src="${movie.image}" alt="Cover image of the movie" class="img">
                <a href="cart.html" class="cta" id="ctaproduct">BUY NOW</a>
            </div>
        </section>`;

    document.title = movie.title;

    if (movie.onSale === true){

        document.getElementById('sale').innerHTML += `<h3 id="sale">$ ${movie.discountedPrice}</h3>`;
        document.getElementById('price').innerHTML += `<h2 id="reduced-price">$ ${movie.price}</h2>`;
    }

    else {
        document.getElementById('price').innerHTML += `<h2>$ ${movie.price}</h2>`;
        document.getElementById('sale').innerHTML = ``;
    }

}

createHtml();

// function Sale() {
//     if (movie.onSale === true){
//         product.innerHTML.replace = `<h3 id="sale">$ ${movie.discountedPrice}</h3>`
//     }
// }


