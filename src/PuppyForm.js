import { useState, useEffect } from "react"
import axios from "axios"
import "./PuppyForm.css"

const PuppyForm = props => {
  // create state variables and their setters so everytime thier value changes, the component updates them in the browser
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")

  useEffect(() => {
    // this function runs once when the component first loads and again whenever the value of the breed variable changes
    // check your browser's Developer Tools -> Javascript Console to see this printed when the component first loads and anytime the breed value changes
    console.log("hello world from within PuppyForm.js!")
  }, [breed]) // the variable name in the array here is what causes this function to re-run any time the value of breed changes

  // a function that will be run whenever the user submits the form
  const handleSubmit = e => {
    e.preventDefault() // prevent the default browser form submission stuff

    // send the data of the new puppy to a server
    // this server doesn't exist, so we will see an error in the console
    // axios' get() and post() methods return a promise, so we can use our javascript Promise or async/await expertise here to deal with the resolution or rejection of the request
    axios
      .post("https://someserversomehwere.com/puppy/save", {
        name: name,
        breed: breed,
      })
      .then(response => {
        // success
        console.log(`Received server response: ${response.data}`)
      })
      .catch(err => {
        // failure
        console.log(`Received server error: ${err}`)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* conditional logic within JSX, using type coercion */}
        {breed && name && (
          <p>
            {/* if both breed and name have values */}
            You are creating a {breed} with the name {name}.
          </p>
        )}
        {breed && !name && (
          <p>
            {/* if only breed has a value */}
            You are creating a {breed}.
          </p>
        )}
        {!breed && name && (
          <p>
            {/* if only name has a value */}
            You are naming a dog {name}.
          </p>
        )}

        <div>
          <label for="name_field">Name of the puppy:</label>
          <input
            id="name_field"
            type="text"
            placeholder="Puppy name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label for="breed_field">Breed of the puppy:</label>
          <input
            id="breed_field"
            type="text"
            placeholder="Puppy breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Save puppy!" />
        </div>
      </form>
    </>
  )
}

export default PuppyForm
