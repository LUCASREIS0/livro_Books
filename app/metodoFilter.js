// Seleciona todos os elementos com a classe 'btn' e adiciona um evento de clique a cada um deles
const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// Função para filtrar livros com base na categoria associada ao botão clicado
function filtrarLivros() {
    
    // Obtém o elemento do botão que foi clicado usando 'this.id' para identificar o ID do botão
    const elementoBtn = document.getElementById(this.id)

    // Obtém o valor da propriedade 'value' do botão, que representa a categoria
    const categoria = elementoBtn.value

    // Filtra a matriz de livros com base na categoria selecionada ultilizando o operador ternário
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)

    // Exibe os livros filtrados no console como uma tabela para uma melhor vizualização 
    console.table(livrosFiltrados)

    // Chama a função para exibir os livros filtrados na tela
    exibirOsLivrosNaTela(livrosFiltrados); 

    // Exibe o valor total dos livros disponiveis 
    if (categoria == 'disponivel') {
        exibirValorTotalDosLivrosDisponiveisNaTela()
    }
}

//melhorando o escobo global do operador ternario para melhor legibilidade
//filtrando por categoria 
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

//melhorando o escobo global do operador ternario para melhor legibilidade
//filtrando por disponibilidade  
function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

//Criando a função que ira adicionar o valor disponivel no HTML 
function exibirValorTotalDosLivrosDisponiveisNaTela() {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>
    `
}