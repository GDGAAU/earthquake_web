import axios from 'axios';

export async function fetchEarthquakeData(radius) {
  console.log('Fetching earthquake data...');
  
  // Wrap geolocation in a Promise
  const getUserLocation = () =>
    new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation not supported'));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position.coords),
          (error) => reject(error)
        );
      }
    });

  let userLat = 22;
  let userLon = 179;
  try {
    const coords = await getUserLocation();
    userLat = coords.latitude;
    userLon = coords.longitude;
    console.log('Geolocation success:', coords);
  } catch (error) {
    console.error('Geolocation error, using fallback coordinates:', error);
  }

  try {
    const response = await axios.get(
      `http://localhost:5000/api/earthquakes/earthquakes-in-radius?userLat=${userLat}&userLon=${userLon}&radius=${radius ? radius : 1000}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching earthquake data:', error);
    return [];
  }
}