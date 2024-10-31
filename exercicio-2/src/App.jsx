import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Card image="/image.jpg">
		<h1>Star Wars (1977)</h1>
		<p>Um poster decorativo épico do filme <strong>Star Wars</strong>, com moldura de <strong>MDF</strong> e tamanho <strong>A3</strong>. Uma ótima recoradção de um dos mais icônicos filmes de todos os tempos. Este clássico poster terrá aventura, nostalgia e a magia de <strong>Star Wars</strong> para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
		<Button text="Comprar agora" />
      </Card>
      <Card image="/image.jpg">
		<h1>Star Wars (1977)</h1>
		<p>Um poster decorativo épico do filme <strong>Star Wars</strong>, com moldura de <strong>MDF</strong> e tamanho <strong>A3</strong>. Uma ótima recoradção de um dos mais icônicos filmes de todos os tempos. Este clássico poster terrá aventura, nostalgia e a magia de <strong>Star Wars</strong> para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
		<Button text="Comprar agora" />
      </Card>
    </>
  )
}

export default App;
