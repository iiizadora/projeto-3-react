import { useState, useEffect } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import Header from "../../components/Header/Header";
import image from "../../assets/project.svg";
import axios from "axios";

import "./portfolio.css";

const list = [
  {
    id: 1,
    nome: "Meu diário Reprograma",
    descricao:
      "Uma aplicação em react",
    conteudo: "Feito com html, css e js.",
    imagem: "https://media.giphy.com/media/kobRpM0Lmo3btq5pRD/giphy.gif",
    link: "https://meudiarioizadora.netlify.app/",
  },
  {
    id: 2,
    nome: "TODO list",
    descricao: "Uma aplicação em Javascript ",
    conteudo: "React hooks e testar os componente com testing library.",
    imagem: "https://media.giphy.com/media/MX9rYAOFyZPrMZppQQ/giphy.gif",
    link: "https://todolist-reprograma.netlify.app/",
  },
];

function Portfolio() {
  const [repos, setRepos] = useState([]);
  const baseURL = "https://api.github.com/users/iiizadora/repos";

  useEffect(() => {
    axios.get(baseURL).then((response) => setRepos(response.data));
  }, []);

  return (
    <>
      <Header image={image} description="ilustracao mulher com site">
        Meus Projetos
      </Header>

      <div className="cartao-container">
        {list.map((projeto) => {
          return (
            <div className="cartao" key={projeto.id}>
              <h1>{projeto.nome}</h1>
              <img
                src={projeto.imagem}
                alt={"gif do projeto " + projeto.nome}
              />
              <p>{projeto.descricao}</p>
              <a href={projeto.link} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#111" />
              </a>
            </div>
          );
        })}
      </div>
      <h2 className="titulo">Outros Projetos no meu Github</h2>
      <div className="card-container">
        {repos.map((repo) => {
          return (
            <div className="card" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={repo.html_url} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#fff" />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Portfolio;
