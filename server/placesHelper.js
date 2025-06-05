const axios = require('axios');

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

async function searchHVACCompanies(zip) {
  const query = `HVAC near ${zip}`;
  const url = `${BASE_URL}?query=${encodeURIComponent(query)}&key=${GOOGLE_PLACES_API_KEY}`;

  try {
    const response = await axios.get(url);
    const results = response.data.results || [];

    return results.slice(0, 3).map((place) => ({
      name: place.name,
      address: place.formatted_address,
      rating: place.rating || 'N/A',
      website: place.website || null,
    }));
  } catch (error) {
    console.error('Google Places Error:', error.response?.data || error.message);
    return [];
  }
}

module.exports = { searchHVACCompanies };
