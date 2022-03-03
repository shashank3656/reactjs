import { useEffect } from "react"
import "./App.css"
import Puppy from "./Puppy"
import PuppyForm from "./PuppyForm"

const App = () => {
  useEffect(() => {
    // this function runs once when the component first loads
    // pop up an annoying message in the web browser
    alert(
      "hello world from within App.js!\nPlease open your browser's Developer Tools -> Javascript Console"
    )
    // print it more discretely to the Developer Tools -> Javascript Console
    console.log("hello world from within App.js!")
  }, []) // the empty array here is what causes this to run only once

  // a function that will be run anytime a user clicks on a puppy article
  const handleClick = e => {
    alert("You clicked a puppy!")
    console.log("You clicked a puppy!")
  }

  // an array of puppy data... imagine this is fetched from a back-end server API
  // we hard-code it here so we can focus on React.js, not back-end code
  const puppies = [
    {
      name: "Spot",
      breed: "Schnauzer",
    },
    {
      name: "Tobik",
      breed: "German Shepherd",
    },
    {
      name: "Fido",
      breed: "Chihuahua",
    },
    {
      name: "Kenny",
      breed: "Beagle",
    },
  ]

  return (
    <main className="App">
      <h1>Hello to the app</h1>
      <p>Lorem ipsum dolor sit amet foo bar baz bum</p>
      <PuppyForm /> {/* show the form for adding a new puppy */}
      <section class="App-puppies">
        {/* loop through the array of puppy data, and return a component for each object therein */}
        {puppies.map((puppy, i, puppiesArray) => (
          <Puppy
            name={puppy.name}
            breed={puppy.breed}
            handleClick={handleClick}
          />
        ))}
      </section>
    </main>
  )
}

export default App
