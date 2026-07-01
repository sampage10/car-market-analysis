type MarketSummary = {
  metro: string
  avgPrice: number
  priceLastMonth: number
  priceLastYear: number
  verdict: "undervalued" | "overvalued" | "fair"
}

const mockData: MarketSummary[] = [
  { metro: "Memphis, TN",      avgPrice: 15200, priceLastMonth: 15800, priceLastYear: 17000, verdict: "undervalued" },
  { metro: "Atlanta, GA",      avgPrice: 18500, priceLastMonth: 18200, priceLastYear: 17800, verdict: "fair" },
  { metro: "Los Angeles, CA",  avgPrice: 22900, priceLastMonth: 22500, priceLastYear: 20000, verdict: "overvalued" },
  { metro: "Dallas, TX",       avgPrice: 16100, priceLastMonth: 16400, priceLastYear: 17200, verdict: "undervalued" },
]

const verdictColor: Record<string, string> = {
  undervalued: "green",
  overvalued:  "red",
  fair:        "gray",
}

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Car Market Tracker</h1>
      <p>Search a car to see if it's overvalued or undervalued across US markets</p>

      <div>
        <input
          type="text"
          placeholder="e.g. 2019 Honda Civic"
          style={{ padding: '8px', width: '300px', marginRight: '8px' }}
        />
        <button style={{ padding: '8px 16px' }}>Search</button>
      </div>

      <h2 style={{ marginTop: '40px' }}>2019 Honda Civic — Market Analysis</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '2px solid #ccc' }}>
            <th style={{ padding: '8px' }}>Market</th>
            <th style={{ padding: '8px' }}>Avg Price</th>
            <th style={{ padding: '8px' }}>Last Month</th>
            <th style={{ padding: '8px' }}>Last Year</th>
            <th style={{ padding: '8px' }}>Verdict</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((row) => (
            <tr key={row.metro} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>{row.metro}</td>
              <td style={{ padding: '8px' }}>${row.avgPrice.toLocaleString()}</td>
              <td style={{ padding: '8px' }}>${row.priceLastMonth.toLocaleString()}</td>
              <td style={{ padding: '8px' }}>${row.priceLastYear.toLocaleString()}</td>
              <td style={{ padding: '8px', color: verdictColor[row.verdict], fontWeight: 'bold', textTransform: 'capitalize' }}>
                {row.verdict}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App