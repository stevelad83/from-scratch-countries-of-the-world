import React from 'react';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <h3 className="name">{name}</h3>
      {/* <img className="flag">{iso2}</img> */}
    </div>
  );
}
