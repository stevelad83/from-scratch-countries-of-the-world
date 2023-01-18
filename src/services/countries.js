import { client, checkError } from './client.js';

export async function fetchCountries() {
  const response = await client.from('countries').select('*');
  console.log('response', response.data);
  return checkError(response);
}
