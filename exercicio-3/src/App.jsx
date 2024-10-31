import Button from "./components/Button";
import Card from "./components/Card";
import Profile from "./components/Profile";

export default function App() {

  return (
    <Card>
		<Profile imgSrc="/profile-pic.jpg" name="Alan Reis" />
		<hr />
		<p>  
			Eu sou um estudante de <strong>Ciência da Computação</strong> que atualmente se encontra no <strong>6o período</strong>. Além da minha jornada acadêmica, atualmente me encontro estudando sobre o <strong>Lavavel</strong>, framework para <strong>PHP</strong>; <strong>Java</strong>, por conta da faculdade; e <strong>SQL</strong>, pois é uma ferramenta que eu uso muito no trabalho. Hoje, estou tentando criar uma base profissional que me deixe flexível independentemente de qual stack eu atue. Por isso, tenho conhecimentos tanto no back-end, quanto no front-end. Ou seja, além de eu conseguir criar websites, eu almejo estar disposto também para desenvolver <strong>APIs RESTful</strong>, sites que usam a arquitetura <strong>MVC</strong>, <strong>SPAs</strong>; ou até mesmo, aplicações <strong>CLI</strong>, <strong>sistemas embarcados</strong>, <strong>microsserviços</strong>, e mais: Eu sou novo e tenho um longo caminho a percorrer!
		</p>
		<hr />
		<Button href="https://github.com/Hoyasumii">Github</Button>
		<Button href="mailto:alanreisanjo@gmail.com">Email</Button>
    </Card>
  )
}

