/*
"import" serve para manipular os dados transportados da pagina de "export".

"document.getElementById" está resgatando a "div-songs" do HTML.

"data" é o nome do "array" que transporta os dados da base criada.

"map" está repetindo os dados da base.

Sintaxe: array.map(() => {}).

"innerHTML" é para criar elementos dentro da div "divSongs".

"+=" é para criar mais de 1 elemento.

Se usa a crase não aspas para conseguir misturar HTML e JS.
Exemplo: `${element.nome}`.

Explicacão: 
O que é map ? é um método usado para criar um novo array a partir de um array existente, 
aplicando uma função a cada um dos elementos do array original. 
A função que você passa para o map é chamada de "função de callback".
*/

import { data } from "./data.js";

const divSongs = document.getElementById("div-songs");

data.map((e) =>(divSongs.innerHTML += `
    <div class="container">    
        <img src="${e.cover}" alt="cover">
            <div class="text-audio">
                <h5>${e.name}</h5>
                <p>${e.song}</p>
                <audio controls>
                <source src="${e.audio}" type="audio/mpeg">
            </div>
    </div>
`));
