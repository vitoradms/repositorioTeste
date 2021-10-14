const {catalogo, adicionarFilme, buscarFilme, alterarStatusEmCartaz} = require('./cinema/cinema') 
//O nome do módulo é o nome do diretorio

const moment = require('moment')
//console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

adicionarFilme(4, "Naruto", 3, ["Naruto", "Sasuke"], 2002, true);

buscarFilme(4);

alterarStatusEmCartaz(4)

console.log(catalogo);