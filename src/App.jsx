import { useState } from "react";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });
  const inputIsValid =
    userInput.initialInvestment > 0 &&
    userInput.annualInvestment >= 0 &&
    userInput.expectedReturn > 0 &&
    userInput.duration > 0 &&
    userInput.duration <= 100 &&
    Number.isInteger(userInput.duration);

  function handleChange(inputName, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputName]: newValue === "" ? "" : +newValue,
      };
    });
  }

  return (
    <>
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="error-message" style={{ textAlign: "center" }}>
          Please enter valid positive values in all four fields!
        </p>
      )}
    </>
  );
}

export default App;
