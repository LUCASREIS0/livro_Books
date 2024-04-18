// Definição da lista de livros como array vazio
let livros = [];

// URL da API que contém os dados dos livros
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

// Elemento onde os livros serão inseridos na interface HTML
const elementoParaInserirLivros = document.getElementById('livros');

// Função assíncrona para buscar os livros da API
async function getBuscarLivrosDaAPI() {
    try {
        // Fazendo uma requisição para a API e esperando a resposta
        const res = await fetch(endpointDaAPI);

        // Convertendo a resposta para JSON
        livros = await res.json();

        // Exibindo os livros na console como tabela (para depuração)
        console.table(livros);

        // Chamando a função para exibir os livros na tela
        exibirOsLivrosNaTela(livros);
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
    }
}

// Função para exibir os livros na tela
function exibirOsLivrosNaTela(listaDeLivros) {
    // Itera sobre cada livro na lista e cria o HTML correspondente para exibição
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">${livro.titulo}</h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `;
    });
}

// Chamada inicial para buscar os livros da API assim que o script é carregado
getBuscarLivrosDaAPI();
