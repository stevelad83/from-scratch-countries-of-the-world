import React from 'react';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <h3 className="name">{name}</h3>
      <img src={`https://flagcdn.com/120x90/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
