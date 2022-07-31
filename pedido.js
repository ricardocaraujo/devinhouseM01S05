import {Produto} from "./produtos.js"

class Pedido {
    constructor(numeroPedido, dataPedido, estaPago, listaProdutos, nomeCliente) {
        this.numeroPedido;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente;
    }

    adicionarProduto(produto) {
        if(produto instanceof Produto) {
            this.listaProdutos.push(produto)
        }
    }

    calcularTotal() {
        this.listaProdutos.map(produto => {
            return produto.preco * produto.quantidade;
        })
    }
}