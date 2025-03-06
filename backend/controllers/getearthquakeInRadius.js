const axios = require("axios");

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in kilometers
}

const getEarthquakesInRadius = async (req, res) => {
  const { userLat, userLon, radius } = req.query;

  if (!userLat || !userLon || !radius) {
    return res.status(400).json({ error: "Missing parameters: userLat, userLon, and radius are required." });
  }

  try {
    const response = await axios.get(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=15&minmagnitude=2&maxradiuskm=${radius}&latitude=${userLat}&longitude=${userLon}`
    );

    console.log(response.data); // Log API response to check data

    // Process earthquake data
    let earthquakesInRadius = response.data.features.map((quake) => {
      const quakeLat = quake.geometry.coordinates[1];
      const quakeLon = quake.geometry.coordinates[0];
      const distance = calculateDistance(userLat, userLon, quakeLat, quakeLon).toFixed(2);

      return {
        magnitude: quake.properties.mag,
        location: quake.properties.place, // Location of the earthquake
        latitude: quakeLat,
        longitude: quakeLon,
        distance: parseFloat(distance), // Convert back to number for sorting
        time: new Date(quake.properties.time).toLocaleString(), // Convert timestamp to readable format
      };
    });

    // Sort earthquakes by distance (nearest first)
    earthquakesInRadius.sort((a, b) => a.distance - b.distance);

    // If no earthquakes are found within the radius, return a message
    if (earthquakesInRadius.length === 0) {
      return res.status(200).json({
        message: "No recent earthquakes were found within your selected radius."
      });
    }

    console.log(earthquakesInRadius); // Log sorted earthquakes
    res.json(earthquakesInRadius);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch earthquake data" });
  }
};

module.exports = { getEarthquakesInRadius };
