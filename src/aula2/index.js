// Criando uma função para salvar o nosso arquivo fisicamente

function salvar() {
    // variavel responsável por armazenar os textos digitados
    let texto = document.getElementById("texto").value;

    // variavel criada para receber o nome do arquivo a ser criado
    let titulo = document.getElementById("titulo").value;

    //variável de armazenamento
    let blob = new Blob([texto], { 
        type:"text/plain; charset=utf-8"
    });

    saveAs(blob, titulo + ".txt");
}