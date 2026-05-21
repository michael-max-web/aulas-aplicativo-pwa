import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { useAppContext } from "../../contexto/AppContext";
import { adicionarCliente, atualizarCliente, buscarClientePeloId } from "../../servicos/clientes";
import formatarComMascara, { MASCARA_CELULAR, MASCARA_CPF } from "../../utils/formatarComMascara";
import validarCPF from "../../utils/validarCPF";
import validarEmail from "../../utils/validarEmail";

function CadastroCliente() {
  const navigate = useNavigate();
  const params = useParams();
  const { usuarioLogado } = useAppContext();

  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    celular: "",
    email: "",
    cidade: "",
    foto: null,
  });

  useEffect(() => {
    if (params.clienteId) {
      const clienteEncontrado = buscarClientePeloId(params.clienteId);

      if (clienteEncontrado) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCliente(clienteEncontrado);
      }
    }
  }, [params]);

  const salvar = () => {
    if (!cliente.nome?.trim() || !cliente.cpf?.trim()) {
      toast.error("Nome e CPF são obrigatórios!");
      return;
    }

    if (!validarCPF(cliente.cpf)) {
      toast.error("CPF inválido!");
      return;
    }

    if (cliente.email?.trim() && !validarEmail(cliente.email)) {
      toast.error("Email inválido!");
      return;
    }

    if (cliente.id) {
      atualizarCliente(cliente);
    } else {
      adicionarCliente(cliente, usuarioLogado.id);
    }

    toast.success("Cliente salvo com sucesso!");
    navigate("/lista-clientes");
  };

  const titulo = cliente.id ? "Editar Cliente" : "Novo Cliente";

  return (
    <Principal titulo={titulo} voltarPara="/lista-clientes">
      <CampoCustomizado
        label="Nome"
        value={cliente.nome}
        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
        obrigatorio
      />
      <CampoCustomizado
        label="CPF"
        value={cliente.cpf}
        onChange={(e) =>
          setCliente({ ...cliente, cpf: formatarComMascara(e.target.value, MASCARA_CPF) })
        }
        onBlur={(e) => {
          if (e.target.value.trim() && !validarCPF(e.target.value)) {
            toast.error("CPF inválido!");
          }
        }}
        obrigatorio
      />

      <CampoCustomizado
        label="Cidade"
        opcoes={[
          { valor: "1", label: "Florianópolis" },
          { valor: "2", label: "São José" },
          { valor: "3", label: "Palhoça" },
          { valor: "4", label: "Biguaçu" },
        ]}
        value={cliente.cidade}
        onChange={(e) => setCliente({ ...cliente, cidade: e.target.value })}
      />

      <CampoCustomizado
        type="date"
        label="Data Nascimento"
        value={cliente.dataNascimento}
        onChange={(e) => setCliente({ ...cliente, dataNascimento: e.target.value })}
      />
      <CampoCustomizado
        type="tel"
        label="Celular"
        value={cliente.celular}
        onChange={(e) =>
          setCliente({ ...cliente, celular: formatarComMascara(e.target.value, MASCARA_CELULAR) })
        }
      />
      <CampoCustomizado
        type="email"
        label="Email"
        value={cliente.email}
        onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
        onBlur={(e) => {
          if (e.target.value.trim() && !validarEmail(e.target.value)) {
            toast.error("Email inválido!");
          }
        }}
      />

      <CampoCustomizado
        type="file"
        accept="image/*"
        label="Foto"
        onChange={(e) => {
          const imagem = e.target.files[0];
          if (imagem) {
            const reader = new FileReader();
            reader.onload = (event) => {
              setCliente({ ...cliente, foto: event.target.result });
            };
            reader.readAsDataURL(imagem);
          }
        }}
      />

      {cliente.foto && (
        <div style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
          <img
            src={cliente.foto}
            alt="Foto do Cliente"
            style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      )}
      <BotaoCustomizado tipo="primario" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default CadastroCliente;
