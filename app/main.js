// Definição da lista de livros como array vazio
let livros = [];

// URL da API que contém os dados dos livros
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

// Função assíncrona para buscar os livros da API
async function getBuscarLivrosDaAPI() {
    try {
        // Fazendo uma requisição para a API e esperando a resposta
        const res = await fetch(endpointDaAPI);

        // Convertendo a resposta para JSON
        livros = await res.json();

        // Exibindo os livros na console como tabela (para depuração)
        console.table(livros);

        let livrosComDesconto = aplicarDesconto(livros);

        // Chamando a função para exibir os livros com desconto na tela
        exibirOsLivrosNaTela(livrosComDesconto);

    } catch (error) {
        console.error('Erro ao buscar livros:', error);
    }
}

// Chamada inicial para buscar os livros da API assim que o script é carregado
getBuscarLivrosDaAPI();
