async function getPokemons(page = 0) {
    const pokeList = document.querySelector('.section-area-main');
    pokeList.innerHTML = '<div>Carregando Pokémons...</div>';
    const limit = 20;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit * page}`);
    const json = await response.json();
    const pages = Math.ceil(json.count / limit);
    return json;
}

let page = 0

function temAnterior(page) {
    const btnAnt = document.querySelector('.btn-ant');
    if (page === 0) 
        btnAnt.style.visibility = 'hidden';
    if (page >= 1)
        btnAnt.style.visibility = 'visible';
}


function btnProx() {
    const btnProx = document.querySelector('.btn-prox');
    btnProx.onclick = async() => {
        
        const response = await getPokemons(page += 1);
        
        listaPokemons(response.results);
        temAnterior(page);
        
    }
    
}





function listaPokemons(pokemonsApi) {
    const pokeList = document.querySelector('.section-area-main');
    pokeList.innerHTML = '';
    const pokemons = pokemonsApi.map((pokemon) => new Pokemon(pokemon.name, pokemon.url));

    pokemons.forEach((pokemon) =>{
        const html = pokemon.html();
        pokeList.appendChild(html)
});
}



window.onload = async () => {

    const response = await getPokemons(page);
    listaPokemons(response.results);
    btnProx();
    

};

