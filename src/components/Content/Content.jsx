import './content.css'

function Content(props){
  return(<>
    <div className="container_text_definition">
      <p className="text_subtitle">{props.subtitle}</p>
      <img className="picture_gif" src={props.image} alt="Gif de Greys Anatomy" />
      <p className="text">{props.text}  </p>
    </div>
 
</> 
  )
}

export default Content