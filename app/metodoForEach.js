// Elemento onde os livros serão inseridos na interface HTML
const elementoParaInserirLivros = document.getElementById('livros');

// Função para exibir os livros na tela
function exibirOsLivrosNaTela(listaDeLivros) {

    //Sempre que clicarmos, o conteúdo será apagado e apenas os livros correspondentes à categoria selecionada serão exibidos.
    elementoParaInserirLivros.innerHTML = ''
    
    // Itera sobre cada livro na lista e cria o HTML correspondente para exibição
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
                <h2 class="livro__titulo">${livro.titulo}</h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `;
        //livro.preco.toFixed(2) retorna uma string que representa o preço do livro formatado com duas casas decimais, o que é útil para exibir preços com uma precisão específica ao trabalhar com valores monetários.
    });
}
