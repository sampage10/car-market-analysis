type Listing = {
  id: number
  make: string
  model: string
  year: number
  price: number
  metro: string
}

const mockListings: Listing[] = [
  { id: 1, make: "Honda", model: "Civic", year: 2019, price: 18500, metro: "Atlanta, GA" },
  { id: 2, make: "Honda", model: "Civic", year: 2019, price: 15200, metro: "Memphis, TN" },
  { id: 3, make: "Honda", model: "Civic", year: 2019, price: 19800, metro: "Los Angeles, CA" },
  { id: 4, make: "Honda", model: "Civic", year: 2019, price: 16100, metro: "Dallas, TX" },
]

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Car Market Tracker</h1>
      <p>Find out if a car is overpriced or underpriced in your market</p>

      <div>
        <input
          type="text"
          placeholder="e.g. 2019 Honda Civic"
          style={{ padding: '8px', width: '300px', marginRight: '8px' }}
        />
        <button style={{ padding: '8px 16px' }}>Search</button>
      </div>

      <h2 style={{ marginTop: '40px' }}>Listings</h2>
      <ul>
        {mockListings.map((listing) => (
          <li key={listing.id}>
            {listing.year} {listing.make} {listing.model} — ${listing.price.toLocaleString()} in {listing.metro}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App