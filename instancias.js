import Pedido from "./pedido.js";
import { Produto } from "./produtos.js";

const produto1 = new Produto("camisa", 50.0, true, 20);
const produto2 = new Produto("calça", 80.0, true, 10);
const produto3 = new Produto("bermuda", 60.0, true, 15);
const produto4 = new Produto("boné", 20.0, true, 40);
const produto5 = new Produto("cinto", 15.0, true, 20);

const pedido1 = new Pedido('20220001');
const pedido2 = new Pedido('20220002');

pedido1.nomeCliente = "Ricardo"
pedido2.nomeCliente = "Luiza"

console.log(produto1)
console.log(produto2)
console.log(produto3)
console.log(produto4)
console.log(produto5)

console.log(pedido1)
console.log(pedido2)

pedido1.adicionarProduto(produto1)
pedido1.adicionarProduto(produto2)
pedido1.adicionarProduto(produto3)
pedido2.adicionarProduto(produto4)
pedido2.adicionarProduto(produto5)