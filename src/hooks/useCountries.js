import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/countries.js';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCountries();
        setCountries(response);
      } catch (e) {
        setError('You broke my app!');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}
