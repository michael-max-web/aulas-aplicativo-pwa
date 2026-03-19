import Principal from "../../componentes/Principal/Principal";
import "./ListaProdutos.css";

function ListaProdutos() {
    const produtos = [
        {
            nome: 'Smartphone Samsung',
            preco: 2999,
            cores: ['#29d8d5', '#252a34', '#fc3766'],
        },
        {
            nome: 'Notebook Acer',
            preco: 4999,
            cores: ['#ffd045', '#d4394b', '#f37c59'],
        },
        {
            nome: 'Tablet Asus',
            preco: 1499,
            cores: ['#365069', '#47c1c8', '#f95786'],
        },
    ];

    return (
        <Principal>
            <h2>Lista de Proutos</h2>

            {produtos.map((itemProduto, index) => {
                return (
                    <div key={index} className="lista-produtos_item">
                        <span>{itemProduto.nome}</span>
                        <span>R$ {itemProduto.preco}</span>
                    </div>
                );
            })}
        </Principal>
    );
}

export default ListaProdutos;
