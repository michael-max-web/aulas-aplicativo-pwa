import { useAppContext } from "../../contexto/AppContext";
import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";

function Cabecalho() {
  const { usuarioLogado } = useAppContext();

  return (
    <header className="cabecalho__root">
      <a href="/">
        <img src="/logo.png" height="32" alt="Logo" />
      </a>
      {usuarioLogado && (
        <a href="/meu-perfil">
          {usuarioLogado && <Avatar nome={usuarioLogado.nome} imagem={usuarioLogado.foto} />}
        </a>
      )}
    </header>
  );
}

export default Cabecalho;
