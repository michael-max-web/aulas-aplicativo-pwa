import "./CadastroCliente.css"
import Principal from "../Principal/Principal";
import CampoCustomizado from "../CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import { TiSocialVimeoCircular } from "react-icons/ti";

function CadastroCliente() {
    const [cliente, setCliente] = useState({
        nome: "",
        cpf: "",
        dataNascimento: "",
        celular: "",
        email: "",
    });

    const salvar = () => {
       console.log("Cliente salvo:", cliente)
    }

    return (
        <Principal voltarPara={"/lista-clientes"} titulo="Novo de Cliente">
            <CampoCustomizado label="Nome" value={cliente.nome} onChange={(e) => setCliente({...cliente,  nome: e.target.value})} />
            <CampoCustomizado label="CPF" />
            <CampoCustomizado type="date" label="Data Nascimento" />
            <CampoCustomizado type="tel" label="Celular" />
            <CampoCustomizado type="email" label="Email" />
            <BotaoCustomizado tipo="primario" aoClicar={salvargi}>Salvar</BotaoCustomizado>
        </Principal>
    );
}

export default CadastroCliente;
