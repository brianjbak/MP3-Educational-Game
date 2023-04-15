import "./styles.css";
import { useState } from "react";

const countries = [
  {
    name: "Canada",
    flagURL: "https://www.worldatlas.com/r/w1000-q80/img/flag/ca-flag.jpg",
    hint: "Contrary to popular belief, Toronto is not the nation's capital."
  },
  {
    name: "Mexico",
    flagURL: "https://www.worldatlas.com/r/w1000-q80/img/flag/mx-flag.jpg",
    hint:
      "This country boasts one of the most famous artists in the world: Frida Kahlo."
  },
  {
    name: "Argentina",
    flagURL: "https://www.worldatlas.com/r/w1000-q80/img/flag/ar-flag.jpg",
    hint: "The men's national soccer team recently won a World Cup."
  },
  {
    name: "South Korea",
    flagURL: "https://www.worldatlas.com/r/w1000-q80/img/flag/kr-flag.jpg",
    hint: "It is the birthplace of my parents. "
  },
  {
    name: "Spain",
    flagURL: "https://www.worldatlas.com/r/w1000-q80/img/flag/es-flag.jpg",
    hint: "I heard they like to take naps during the middle of the day here. "
  },
  {
    name: "Nigeria",
    flagURL: "https://www.worldatlas.com/r/w1000-q80/img/flag/ng-flag.jpg",
    hint:
      "Although there are over 500 distinct languages spoken in this West African nation, English is its official language. "
  },
  {
    name: "Australia",
    flagURL: "https://www.worldatlas.com/r/w1000-q80/img/flag/au-flag.jpg",
    hint:
      "A nation part of the Commonwealth, clownfish Nemo was found nearby this country. "
  },
  {
    name: "Brazil",
    flagURL: "https://www.worldatlas.com/r/w1000-q80/img/flag/br-flag.jpg",
    hint:
      "Citizens of this country tend to spam the comment sections of their favorite music artists to perform here. "
  },
  {
    name: "Iran",
    flagURL: "https://www.worldatlas.com/r/w1000-q80/img/flag/ir-flag.jpg",
    hint:
      "There was a nationwide revolution in this country in 1979 that led to the overthrowing of the Pahlavi dynasty. "
  },
  {
    name: "Vietnam",
    flagURL: "https://www.worldatlas.com/r/w1000-q80/img/flag/vn-flag.jpg",
    hint:
      "You may know this country's largest city by it's former name: Saigon. "
  }
  // Add more countries to this array
];

export default function flagGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);

  const currentCountry = countries[currentIndex];

  const submit = (event) => {
    event.preventDefault();
    if (guess.toLowerCase() === currentCountry.name.toLowerCase()) {
      setScore(score + 1);
      setGuess("");
      setCurrentIndex(currentIndex + 1);
    } else {
      setGuess("");
    }
  };

  const goBack = (event) => {
    setCurrentIndex(currentIndex - 1);
    setGuess("");
  };

  const skip = (event) => {
    setCurrentIndex(currentIndex + 1);
    setGuess("");
  };

  return (
    <div>
      {currentIndex < countries.length ? (
        <div>
          <h2> Guess the Country's Name! </h2>
          <h6> Click Submit or Press 'Enter' to answer. </h6>
          <h6> If you skip, you cannot go back to answer. </h6>
          <img src={currentCountry.flagURL} alt="" />
          <form onSubmit={submit}>
            <p> Hint: {currentCountry.hint} </p>
            <input
              type="text"
              value={guess}
              onChange={(event) => setGuess(event.target.value)}
            />
            <button type="submit"> Submit </button>
            <button onClick={() => setCurrentIndex(currentIndex + 1)}>
              {" "}
              Skip{" "}
            </button>
          </form>
        </div>
      ) : (
        <p> You have reached the end. Thanks for playing! </p>
      )}
      <p> Your score is: {score}/10 </p>
    </div>
  );
}
