function filtrarProdutos(categoria) {

    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(function(produto) {

        const categoriaProduto = produto.dataset.categoria;

        if (categoria === "todos" || categoriaProduto === categoria) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }

    });

}
