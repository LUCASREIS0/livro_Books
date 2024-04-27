function calcularValorTotalDeLivrosDisponiveis(livros) {
    // Utiliza o método reduce() para iterar sobre o array de livros
    // O acumulador (acc) começa com um valor inicial de 0
    // Para cada livro, adiciona o preço do livro ao acumulador
    // Retorna o valor total acumulado de todos os preços dos livros
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}
