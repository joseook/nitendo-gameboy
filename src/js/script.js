const gameboy = document.getElementById('gameboy');
const mario = document.getElementById('mario');
const patopokemon = document.getElementById('patopokemon');
const pokemonagua = document.getElementById('pokemonagua');
const pokemoon = document.getElementById('pokemoon');
const coin = document.getElementById('coin');

let is3D = false;

gameboy.addEventListener('click', () => {
    if (is3D) {
        gameboy.style.transform = 'rotateY(0deg)';
        mario.style.opacity = '0';
        patopokemon.style.opacity = '0';
        pokemonagua.style.opacity = '0';
        pokemoon.style.opacity = '0';
        coin.style.opacity = '0';

        mario.classList.remove('moving');
        patopokemon.classList.remove('moving');
        pokemonagua.classList.remove('moving');
        pokemoon.classList.remove('moving');
        coin.classList.remove('moving');
    } else {
        gameboy.style.transform = 'rotateY(180deg)';
        mario.style.opacity = '1';
        patopokemon.style.opacity = '1';
        pokemonagua.style.opacity = '1';
        pokemoon.style.opacity = '1';
        coin.style.opacity = '1';

        mario.classList.add('moving');
        patopokemon.classList.add('moving');
        pokemonagua.classList.add('moving');
        pokemoon.classList.add('moving');
        coin.classList.add('moving');
    }
    is3D = !is3D;
});
