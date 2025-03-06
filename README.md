# ShakeWatch - Real-time Earthquake Monitoring and Safety Platform

## Overview

ShakeWatch is a web application designed to provide users with real-time earthquake information and safety guidelines. It aims to increase awareness and preparedness for earthquakes, particularly for residents in earthquake-prone areas. The application fetches data from the USGS Earthquake API, allows users to customize the search radius, and provides safety guides and a Telegram channel for real-time notifications.

## Features

*   **Real-time Earthquake Data:** Fetches earthquake data from the USGS API.
*   **Customizable Search Radius:** Allows users to specify a radius (in kilometers) to search for earthquakes around their location.
*   **Earthquake Information Display:** Displays key information for each earthquake, including location, magnitude, latitude, longitude, and time of occurrence.
*   **Safety Guides Page:** Provides comprehensive safety guidelines for earthquake preparedness, actions during an earthquake, and post-earthquake procedures.
*   **Telegram Integration:** Includes a link to a Telegram channel for real-time earthquake notifications.
*   **Sources Page:** Provides links to the data sources used in the application, including the USGS Earthquake API.
*   **Dashboard:** A landing page with a welcome message, a brief description of the app, and a link to the Telegram channel.

## Technologies Used

*   **Frontend:**
    *   React
    *   Tailwind CSS
    *   Framer Motion
    *   React Router DOM
    *   Heroicons
*   **Backend:**
    *   Node.js
    *   Express
    *   Mongoose
    *   Axios
    *   Dotenv
*   **Database:**
    *   MongoDB Atlas
*   **External APIs:**
    *   USGS Earthquake API
    *   Telegram Bot API

## System Architecture

The application follows a three-tier architecture:

1.  **Frontend (React):** User interface built with React and styled with Tailwind CSS. Uses `axios` to make API requests to the backend.
2.  **Backend (Node.js with Express):** REST API built with Node.js and Express. Uses `mongoose` to interact with the MongoDB database.
3.  **Database (MongoDB):** Stores earthquake data to prevent duplicate notifications. Cloud-based MongoDB Atlas is used for scalability and reliability.

## Setup Instructions

### Prerequisites

*   Node.js and npm installed
*   MongoDB Atlas account
*   Telegram account and bot token

### Backend Setup

1.  Clone the repository:

    ```bash
    git clone https://github.com/GDGAAU/earthquake_web
    cd earthquake_web/backend
    ```
2.  Install dependencies:

    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory and add the following environment variables:

    ```
    TELEGRAM_TOKEN=<your_telegram_bot_token>
    TELEGRAM_CHAT_ID=<your_telegram_chat_id>
    MONGO_URI=<your_mongodb_atlas_uri>
    ```
4.  Run the backend server:

    ```bash
    npm run dev
    ```

### Frontend Setup

1.  Navigate to the `frontend` directory:

    ```bash
    cd ../frontend
    ```
2.  Install dependencies:

    ```bash
    npm install
    ```
3.  Create a `.env` file in the `frontend` directory (if needed for any frontend-specific environment variables).
4.  Run the frontend development server:

    ```bash
    npm run dev
    ```

## API Endpoints

*   `GET /api/earthquakes/earthquakes-in-radius`: Fetches earthquakes within a specified radius of the user's location. Requires `userLat`, `userLon`, and `radius` as query parameters.
*   `GET /api/earthquakes/magnitude`: Fetches earthquakes sorted by magnitude.

## Background Worker

The backend includes a background worker (`worker.js`) that polls the USGS API for new earthquakes and sends notifications to a Telegram channel. This worker runs every minute and checks for new earthquakes that have not been previously saved in the database.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## Future Plans

*   Implement real-time updates on the frontend using WebSockets.
*   Implement user authentication to allow users to save their preferred search radius and receive personalized notifications.
*   Integrate a map to visualize earthquake locations and user's location.
*   Enhance geolocation accuracy and provide options for users to manually set their location.
*   Include additional earthquake details such as depth, type of faulting, and links to related resources.
*   Add support for multiple languages to reach a wider audience.
*   Develop native mobile apps for iOS and Android to provide a better user experience.
*   Use machine learning to predict potential aftershocks and provide more accurate risk assessments.
*   Add community features such as forums or chat rooms for users to share information and experiences.
*   Integrate with local emergency services to provide faster and more coordinated responses to earthquakes.
