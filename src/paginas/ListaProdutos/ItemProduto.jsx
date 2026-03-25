import "./ItemProduto.css";

function ItemProduto({ produto }) {
    return (
        <div className="item-produto_root">
            <span>{produto.nome}</span>
            <span>{produto.preco}</span>

            <div className="item-produto_cores">
                {produto.cores.map((aquarela, contagem) => {
                    return (
                        <div key={contagem} className="item-produto_cor" style={{ backgroundColor: aquarela }} />
                    );
                })}
            </div>
        </div>
    );
}

export default ItemProduto;