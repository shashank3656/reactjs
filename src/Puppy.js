import puppyImage from "./puppy.jpg"
import "./Puppy.css"

const Puppy = props => {
  // this component expects to receive 'name', 'breed', and 'handleClick' values passed as arguments to it
  // react automatically bundles these arguments into an object called props
  return (
    <article className="Puppy" onClick={props.handleClick}>
      <img className="Puppy-img" src={puppyImage} alt="Puppy" />
      <div className="Puppy-details">
        <h1>{props.name}</h1>
        <p>{props.breed}</p>
      </div>
    </article>
  )
}

export default Puppy
