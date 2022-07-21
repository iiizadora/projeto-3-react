import "./about.css";

function About(props) {
  return (
    <div className="background">
    <div className="container_about">
      <img src={props.image} alt={props.description} className="profile" />
      <div className="container_profile">
        <h2 className="title_presentation">Prazer, Izadora </h2>
        <p className="textAbout">
          Ex- eng civil que decidiu fazer a migração de carreira depois dos 30 e
          atualmente trabalha como estagiária de QA na empresa Thomson Reuters.
          Sou aluna da turma ON17 da Reprograma e uma mulher apaixonada por
          tecnologia e pela área de front-end!
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;
