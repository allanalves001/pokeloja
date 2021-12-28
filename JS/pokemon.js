class Pokemon {
    constructor(nome, url) {
        this.nome = nome;
        this.url = url;
        this.id = this.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
        this.imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.id}.png`;
        this.preco = Math.floor(Math.random() * 100);
    }
    html () {
        const pokeDiv = document.createElement('div');
        pokeDiv.className = 'section-area-main-card';
        pokeDiv.innerHTML = `
            <img class="pokemon-img " src="${this.imagem}" alt="${this.nome}" />
            <h2 class="title">${this.nome}</h2>
            <p class="crossed-price">R$ ${(this.preco).toFixed(2)}</p>
            <p class="price">R$ ${(this.preco * 0.8).toFixed(2)}</p>
            <button class="buy-button">Comprar</button>
        `;

        return pokeDiv;
    }
};