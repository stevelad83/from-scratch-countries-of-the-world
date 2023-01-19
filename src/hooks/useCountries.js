import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/countries.js';

export default function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCountries();
      setCountries(response);
    };
    fetchData();
  }, []);
  return countries;
}
