function deveExibirProduto(categoriaSelecionada, categoriaProduto) {
    return categoriaSelecionada === "todos" ||
           categoriaSelecionada === categoriaProduto;
}

function filtrarProdutos(categoria) {

    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(function(produto) {

        const categoriaProduto = produto.dataset.categoria;

        if (deveExibirProduto(categoria, categoriaProduto)) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }

    });

}

if (typeof module !== "undefined") {
    module.exports = { deveExibirProduto };
}
