// Definindo a função aplicarDesconto que recebe um array de livros como parâmetro
function aplicarDesconto(livros) {
    // Definindo a taxa de desconto como 30% (0.3)
    const desconto = 0.3;

    // Usando o método map() para iterar sobre cada livro no array 'livros'
    // e criar um novo array com os livros com desconto aplicado
    const livrosComDesconto = livros.map(livro => {
        // Para cada livro, criamos um novo objeto utilizando spread operator {...livro}
        // e substituímos o preço do livro pelo preço com desconto
        return {
            ...livro, // Copia todas as propriedades do livro atual
            preco: livro.preco - (livro.preco * desconto) // Aplica o desconto ao preço
        };
    });

    // Retornando o novo array de livros com desconto aplicado
    return livrosComDesconto;
}
