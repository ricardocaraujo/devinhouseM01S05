import {Produto} from "./produtos.js"

export default class Pedido {
    constructor(numeroPedido, dataPedido, estaPago, listaProdutos, nomeCliente) {
        this.numeroPedido = numeroPedido;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = nomeCliente;
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