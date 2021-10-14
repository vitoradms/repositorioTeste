const { calendarFormat } = require("moment");

const fs = require('fs');    //chamei o modulo FS, e com ele, usei o comando abaixo p/ ler e retornar o conteudo do arquivo catalogo.json, convertendo dps em JS.
const catalogoEmJSON = fs.readFileSync("C:/Users/vitor/Desktop/Estudos JS/CINEHOUSE EXERCICIOS/cinehouse - Adamis/database/catalogo.json", 'utf8');
let catalogo = JSON.parse(catalogoEmJSON);



function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
    catalogo.push({codigo, titulo, duracao, atores, anoDeLancamento, emCartaz});
};

//adicionarFilme(3, "Avengers Endgame", 2.5, ["Scarlet Johanson", "Robert Downey Jr"], 2020, true);


function buscarFilme(codigoIdentificador) {
    for(let i = 0; i < catalogo.length; i++) {
        if(codigoIdentificador == catalogo[i].codigo) {
            console.log("O filme de código " + catalogo[i].codigo + " se chama " + catalogo[i].titulo + ", sua duração é de " + catalogo[i].duracao + 
            " horas. Dentre os atores, se encontram " + catalogo[i].atores + ", e o filme foi lançado em " + catalogo[i].anoDeLancamento + "!");
            break;
        } 
    } 
}

//buscarFilme(2);             

/* SOLUÇAO COM CALLBACK
function getMovieById(id){
    catalogo.find(movie => movie.codigo === id);
}
*/



let alterarStatusEmCartaz = id => {
    for (let filme of catalogo){
        id != filme.codigo ? '' : filme.emCartaz == true ? filme.emCartaz = false : filme.emCartaz = true; 
    };
};

//alterarStatusEmCartaz(2);  
     


let listarTodosOsFilmes = () => {
    for (let filme of catalogo){
        return console.log("O filme de código " + filme.codigo + " se chama " + filme.titulo + ", sua duração é de " + filme.duracao + 
        " horas. Dentre os atores, se encontram " + filme.atores + ", e o filme foi lançado em " + filme.anoDeLancamento + "!");
    }
}

//listarTodosOsFilmes();



let listarFilmesEmCartaz = () => {
    for (let filme of catalogo){
        if (filme.emCartaz == true){
            console.log("O filme de código " + filme.codigo + " se chama " + filme.titulo + ", sua duração é de " + filme.duracao + 
            " horas. Dentre os atores, se encontram " + filme.atores + ", e o filme foi lançado em " + filme.anoDeLancamento + " e está em cartaz!!")
        }
    }    
}

//listarFilmesEmCartaz();



module.exports = {catalogo, adicionarFilme, buscarFilme, alterarStatusEmCartaz, listarTodosOsFilmes, listarFilmesEmCartaz};

/* pegar a forma JSON p/ arquivo de catalogo.json
let catalogoJson = JSON.stringify(catalogo);
console.log(catalogoJson);   
*/


