import { useState } from "react";
import { formatter } from "../util/investment";

export default function ResultsTable({
  results,
  initialInvestment,
  annualInvestment,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(results.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleResults = results.slice(startIndex, startIndex + itemsPerPage);

  function handlePreviousPage() {
    setCurrentPage((previousPage) => previousPage - 1);
  }
  function handleNextPage() {
    setCurrentPage((previousPage) => previousPage + 1);
  }
  return (
    <>
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
          {visibleResults.map((result) => (
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
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            PREVIOUS
          </button>
          <span>
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            NEXT
          </button>
        </div>
      )}
    </>
  );
}
