// Seleciona todos os elementos com a classe 'btn' e adiciona um evento de clique a cada um deles
const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// Função para filtrar livros com base na categoria associada ao botão clicado
function filtrarLivros() {
    // Obtém o elemento do botão que foi clicado usando 'this.id' para identificar o ID do botão
    const elementoBtn = document.getElementById(this.id)
    // Obtém o valor da propriedade 'value' do botão, que representa a categoria
    const categoria = elementoBtn.value
    // Filtra a matriz de livros com base na categoria selecionada
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    // Exibe os livros filtrados no console como uma tabela
    console.table(livrosFiltrados)

    // Chama a função para exibir os livros filtrados na tela
    exibirOsLivrosNaTela(livrosFiltrados); 
}