import { useState } from "react";
import UnorderedList from "./components/UnorderedList";
import modules from "./App.module.css";

const App = () => {
  

  const [ status, setStatus ] = useState(false);

  return (
    <>
      <img src="/react.png" alt="" srcSet="" />
      <h1>React</h1>
      <p>A biblioteca para interfaces de usuário web e nativas.</p>
      <button>Aprenda React</button>
      <button>Referência da API</button>
      <hr />
      <h1>Crie interfaces de usuário de components</h1>
      <p>
        React permite que você construa interfaces de usuário a partir de
        pedaços individuais chamados componentes.
      </p>
      <hr />
      <h1>Escreva componentes com código e marcação</h1>
      <p>
        Componentes React são funções JavaScript. A sintaxe de marcação é
        chamada de JSX. É uma exteensão da sintaxe JavaScript popularizada pelo
        React.
      </p>
      <hr />
      <h1>Próximos passos</h1>
      <UnorderedList />
      <hr />
      <h1 className={ status ? modules.onState : modules.offState }>O Estado Atual é: {status ? "Ligado" : "Desligado"}</h1>
      <button onClick={() => setStatus(status ? false : true)}>Clique aqui para mudar o estado</button>
    </>
  );
};

export default App;
