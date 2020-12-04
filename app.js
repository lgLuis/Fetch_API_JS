/*
const $pokemon =document.querySelector('#pokemon')
function renderPokemon(image){
    $pokemon.setAttribute('src', image)
}
*/

//const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
const urll = "https://pokeapi.co/api/v2/pokemon/10/"

fetch(urll)
.then((response)=> response.json())
.then((data)=>{
    let element =document.querySelector(".aqui");
    element.innerHTML=`
    <img src="${data.sprites.front_default}"> </img>
    <p>NOMBRE: ${data.name}</p>
    <p>NRO DE ID: ${data.id}</p>
    <p>EXPERIENCIA: ${data.base_experience}</p>
    <p>ALTURA: ${data.height}</p>
    <p>PESO: ${data.weight}</p>
    <p>MOVIMIENTO: ${data.moves[2].move.name}</p>
    <p>STATS: ${data.stats[1].stat.name}</p>
    <br>
    `
})