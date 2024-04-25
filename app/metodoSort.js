// Selecionando o botão na página HTML com o id 'btnOrdenarPorPreco'
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

// Adicionando um evento de clique ao botão selecionado
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

// Definindo a função que será chamada quando o botão for clicado
function ordenarLivrosPorPreco() {
    // Ordenando o array de livros do menor para o maior preço => (a - b)
    // ('livros' é um array de objetos com a propriedade 'preco') 
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    // Chamando uma função para exibir os livros ordenados na tela
    exibirOsLivrosNaTela(livrosOrdenados);
}
