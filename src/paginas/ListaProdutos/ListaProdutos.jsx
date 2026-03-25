import "./ListaProdutos.css";
import Principal from "../../componentes/Principal/Principal";
import ItemProduto from "./ItemProduto";

function ListaProdutos() {
  const produtos = [
    {
      nome: "Smartphone Samsung",
      preco: 2999,
      cores: ["#29d8d5", "#252a34", "#fc3766"],
    },
    {
      nome: "Notebook Acer",
      preco: 4999,
      cores: ["#ffd045", "#d4394b", "#f37c59"],
    },
    {
      nome: "Tablet Asus",
      preco: 1499,
      cores: ["#365069", "#47c1c8", "#f95786"],
    },
  ];

  return (
    <Principal>
      <h2>Lista de Produtos</h2>

      {produtos.map((itemProduto, index) => {
        return <ItemProduto key={index} produto={itemProduto} />;
      })}
    </Principal>
  );
}


export default ListaProdutos;
