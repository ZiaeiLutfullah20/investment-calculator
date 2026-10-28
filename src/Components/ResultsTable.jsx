import { formatter } from "../util/investment";

export default function ResultsTable({
  results,
  initialInvestment,
  annualInvestment,
}) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>
              {formatter.format(
                result.valueEndOfYear -
                  initialInvestment -
                  annualInvestment * result.year,
              )}
            </td>
            <td>
              {formatter.format(
                initialInvestment + annualInvestment * result.year,
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
