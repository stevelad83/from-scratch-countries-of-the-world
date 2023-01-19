import React, { useState } from 'react';
import useCountries from '../../hooks/useCountries.js';
import CountryCard from '../CountryCard.js';
import './Main.css';

export default function Main() {
  const { countries, error } = useCountries();
  const [continent, setContinent] = useState('all');

  const continents = [...new Set(countries.map(({ continent }) => continent))];

  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  return (
    <main className="container">
      <h1 className="title">Flags of the World</h1>
      <select className="drop-down" onChange={(e) => setContinent(e.target.value)}>
        <option value="all">All</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
      <p>{error}</p>
      {filtered.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
