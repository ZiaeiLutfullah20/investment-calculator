import { useState } from "react";
export default function UserInput({
  onInitialInvestment,
  onAnnualInvestment,
  onExpectedReturn,
  onDuration,
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const [durationError, setDurationError] = useState("");
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={initialInvestment}
            onChange={(e) =>
              onInitialInvestment(
                e.target.value === "" ? "" : Number(e.target.value),
              )
            }
          />
        </div>
        <div>
          <label>Annual Contribution</label>
          <input
            type="number"
            required
            value={annualInvestment}
            onChange={(e) =>
              onAnnualInvestment(
                e.target.value === "" ? "" : Number(e.target.value),
              )
            }
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={expectedReturn}
            onChange={(e) =>
              onExpectedReturn(
                e.target.value === "" ? "" : Number(e.target.value),
              )
            }
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            required
            min="1"
            max="100"
            value={duration}
            onChange={(e) => {
              const value = e.target.value === "" ? "" : Number(e.target.value);
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
              onDuration(value);
            }}
          />
          {durationError && <p className="error-message">{durationError}</p>}
        </div>
      </div>
    </section>
  );
}
