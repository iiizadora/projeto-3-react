import About from '../../components/About/About';
import img from "../../assets/profile.jpg";
import Content from '../../components/Content/Content';
import './sobre.css'

function Sobre() {
  return (
    <>
<About
image ={img}
/>
<div className="container_learning">

 <div className="text_learning">
   <h2 className="title_presentation">4 aprendizados na reprograma</h2>
 </div>

 <Content
   subtitle="GIT"
   image="https://c.tenor.com/AvPphRa36aIAAAAd/greys-anatomy-cristina-yang.gif"
   text="Git é um sistema de controle de versões, criado pelo mesmo desenvolvedor do linux (Linus Torvalds), usado principalmente no desenvolvimento de software para versionar código e registrar o histórico de edições dos arquivos.Com ele conseguimos desenvolver projetos colaborativos, no qual muitas pessoas podem trabalhar simultaneamente no mesmo código, adicionando e removendo conteúdos e novos arquivos. Também podemos consultar o histórico do que e quando foi modificado e até restaurar versões anteriores"
 />

 <Content
   subtitle="HTML"
   image="https://c.tenor.com/Ed3QQSLJeKkAAAAC/greys-greys-anatomy.gif"
   text="Sigla para HyperText Markup Language(Linguagem de Marcação de Hipertexto) ,
o HTML é o componente base da web. Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos. O HTML usa marcação para anotar texto, imagem e outros conteúdos para exibição em um navegador da Web"
 />

 <Content
   subtitle="CSS"
   image="https://c.tenor.com/H8A3BS3dN6IAAAAC/greysanatomy-christinayang.gif"
   text="Cascading Style Sheet (Folha de Estilo em Cascatas).Ele funciona estipulando regras de estilo para o HTML, podendo passar propriedades de maneira generalizada ou de maneira mais específica, por meio de declarações que mencionam atributos com seus respectivos valores."
 />

 <Content
   subtitle="JAVASCRIPT"
   image="https://c.tenor.com/axc2cI9yFNcAAAAM/greys-anatomy-meredith-grey.gif"
   text="É uma linguagem de programação que permite a você criar conteúdo que se atualiza dinamicamente, controlar múltimídias, imagens animadas, e tudo o mais que há de intessante. O JavaScript é uma das mais importantes tecnologias voltadas para o front-end e, unindo-se ao  HTML e CSS, formam um grupo de linguagens que abrangem praticamente todas as exigências do desenvolvimento de uma página completa, dinâmica e com boa performance."
 />
</div>
    </>
  );
}

export default Sobre;
