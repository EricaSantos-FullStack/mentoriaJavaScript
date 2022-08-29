// Utilização do fetch para fazer a requisição de uma api

fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL `).then(res =>{
    //console.log(res.json());
    return res.json();
}).then(body =>{
    document.getElementById("valor").innerHTML=body.USDBRL.low;
    document.getElementById("retorno").innerHTML=body.USDBRL.name;
})

fetch(`https://api.postmon.com.br/v1/cep/09060110`).then(return_cep =>{
    //console.log(res.json());
    return return_cep.json();
}).then(cep_body =>{
    document.getElementById("cep").innerHTML=cep_body.cep;
    document.getElementById("endereco").innerHTML=cep_body.logradouro;
})

// fetch(`https://api.tvmaze.com/search/shows?q=star%20wars`).then(return_film =>{
//     //console.log(res.json());
//     return return_film.json();
// }).then(film_body =>{
//     document.getElementById("").innerHTML=film_body.;
//     document.getElementById("").innerHTML=film_body.;
// })