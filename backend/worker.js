const axios = require("axios");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Earthquake = require("./models/earthquake");

dotenv.config();

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function pollEarthquakeData() {
  try {
    console.log("Fetching polling")
    // Fetch latest earthquake data from USGS API.
    // Sorted by time (most recent first) and with a minimum magnitude of 2
    const response = await axios.get(
      "https://earthquake.usgs.gov/fdsnws/event/1/query",
      {
        params: {
          format: "geojson",
          orderby: "time",
          limit: 5,
          minmagnitude: 2,
          latitude: 9.042516987856663,
          longitude: 38.76264465072379,
          maxradiuskm: 1000,
        },
      }
    );

    const features = response.data.features;
    for (const quake of features) {
      console.log("Checking")
      const { mag, place, time } = quake.properties;
      const [lon, lat] = quake.geometry.coordinates;
      const quakeTime = new Date(time);

      // Check if this earthquake is already saved in DB
      const exists = await Earthquake.findOne({
        time: quakeTime,
        place,
      });
      if (!exists) {
        // Save the new earthquake to MongoDB
        const newQuake = new Earthquake({
          magnitude: mag,
          place,
          time: quakeTime,
          latitude: lat,
          longitude: lon,
        });
        await newQuake.save();

        const severity = mag < 3 ? "mild" : mag < 4 ? "medium" : "high";

        // Prepare message text for Telegram
        const message = `New earthquake detected with ${severity} severity!
Location: ${place}
Magnitude: ${mag}
Time: ${quakeTime.toLocaleString()}
Coordinates: ${lat.toFixed(4)}, ${lon.toFixed(4)}`;

        // Send message to telegram channel with a custom timeout and HTTPS agent
        await axios.post(
          `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
          {
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
          },
          {
            timeout: 10000, // 10 seconds timeout
          }
        );

        console.log("New earthquake published to Telegram:", message);
      }
    }
  } catch (error) {
    console.error("Error during polling:", error.message);
    console.log(error)
  }
}

// Connect to MongoDB and then start the polling process
(async () => {
  await connectDB();
  // Start polling every minute (60000 milliseconds) after successful connection
  setInterval(pollEarthquakeData, 60000);
  // Do an initial poll immediately
  pollEarthquakeData();
})();