import { useState } from "react";
import UserInput from "./Components/UserInput";
import ResultsTable from "./Components/ResultsTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInvestment, setAnnualInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");
  const inputIsValid =
    initialInvestment > 0 &&
    annualInvestment >= 0 &&
    expectedReturn > 0 &&
    duration > 0 &&
    duration < 100 &&
    Number.isInteger(duration);

  const calculatedResults =
    inputIsValid &&
    calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });
  function handleInitialInvestmentChange(value) {
    setInitialInvestment(value);
  }
  function handleAnnualInvestmentChange(value) {
    setAnnualInvestment(value);
  }
  function handleExpectedReturnChange(value) {
    setExpectedReturn(value);
  }
  function handleDurationChange(value) {
    setDuration(value);
  }
  return (
    <>
      <UserInput
        onInitialInvestment={handleInitialInvestmentChange}
        onAnnualInvestment={handleAnnualInvestmentChange}
        onExpectedReturn={handleExpectedReturnChange}
        onDuration={handleDurationChange}
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
      {inputIsValid ? (
        <ResultsTable
          results={calculatedResults}
          initialInvestment={initialInvestment}
          annualInvestment={annualInvestment}
        />
      ) : (
        <p className="error-message" style={{ textAlign: "center" }}>
          Please enter valid values in all four fields!
        </p>
      )}
    </>
  );
}

export default App;
