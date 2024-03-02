// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//
import React, { useState, useEffect } from "react";

const GeolocationTracing = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const successHandler = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
      console.log(`https://www.google.com/maps?q=${latitude},${longitude}`);
    };

    const errorHandler = (err) => {
      setError(err.message);
    };

    // Check if geolocation is supported
    if ("geolocation" in navigator) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    } else {
      setError("Geolocation is not supported in this browser");
    }
  }, []);

  const ffff = (position) => {
    window.open("https://www.google.com/maps?q=16.5518,81.5243");
  };

  return (
    <div>
      {location ? (
        <div>
          <h2>Your current location:</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Loading...</p>
      )}
      <>
        <button onClick={ffff}>vk</button>
      </>
    </div>
  );
};

export default GeolocationTracing;
