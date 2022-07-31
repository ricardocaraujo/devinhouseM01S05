class Pedido {
    constructor(numeroPedido, dataPedido, estaPago, listaProdutos, nomeCliente) {
        this.numeroPedido;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente;
    }
}