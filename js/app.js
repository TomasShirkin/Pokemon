console.log('_____________________________')

const listaPokemones = (id) => new Promise((resolve,reject) => {

    const api = "https://pokeapi.co/api/v2/pokemon-species/?limit=20&offset=20";

    const xhr = new XMLHttpRequest();

    xhr.open('GET',api,true);

    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve (JSON.parse(xhr.responseText).results);
        } else {
             reject(Error(xhr.statusText));
        } 
    };   
    xhr.send();
});

let listaPoke = [1,2,3,4,5]
listaPoke.forEach(id =>{
    verPokemon(id).then(
        pokemon => imprimirHTML(pokemon, id),
        error => console.log(
            new Error('Hubo un error',error)
        )
    )
})


function imprimirHTML(pokemones){
    let html = "";
    pokemones.forEach(pokemon => {
        html +=`
         <h2> ${pokemon.name} </h2>
         <p> ${pokemon.weight}</p>
         <p> ${pokemon.height}</p>
         
         `;
        
    });


//___________________________________________________


listapokemones().then(
    pokemones => imprimirHTML(pokemones),
    error => console.log(
        new error("hubo un error",error)
    )
);


    const contenedorAPP= document.querySelector("#listapokemones");
    contenedorAPP.innerHTML = html;
}
