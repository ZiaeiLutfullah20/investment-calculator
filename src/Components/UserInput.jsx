import { useState } from "react";
export default function UserInput({ onChange, userInput }) {
  const [durationError, setDurationError] = useState("");

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            min="1"
            max="100"
            value={userInput.duration}
            onChange={(event) => {
              const value =
                event.target.value === "" ? "" : Number(event.target.value);
              if (
                value < 1 ||
                value > 100 ||
                !Number.isFinite(value) ||
                !Number.isInteger(value)
              ) {
                setDurationError("Enter a whole number between 1 and 100");
              } else {
                setDurationError("");
              }
              onChange("duration", value);
            }}
          />
          {durationError && <p className="error-message">{durationError}</p>}
        </p>
      </div>
    </section>
  );
}
