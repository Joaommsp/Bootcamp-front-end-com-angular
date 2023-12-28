//OBJETO

//Objeto sem previsibilidade
let produto: object = {
  name: "João",
  cidade: "Itabuna BA",
  idade: 20,
};

// criando um obj da forma correta
// objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "tenis",
  preco: 1500,
  unidades: 5
}
