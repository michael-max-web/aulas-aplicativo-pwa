import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css";

function PaginaInicial() {
    return (
        <Principal>
            <BotaoCustomizado tipo="primario">Salvar</BotaoCustomizado>

            <BotaoCustomizado tipo="secundario">Cancelar</BotaoCustomizado>
        </Principal>
    )
}

export default PaginaInicial;
