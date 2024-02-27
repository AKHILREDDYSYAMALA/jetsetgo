import React, { useState, useEffect } from "react";
import FlightRequestForm from "./components/FlightRequestForm";
import FlightResults from "./components/FlightResults";

const App = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    // Fetch flights from the API
    fetch("https://api.npoint.io/4829d4ab0e96bfab50e7")
      .then((response) => response.json())
      .then((data) => {
        setFlights(data.data.result);
        setFilteredFlights(data.data.result);
      })
      .catch((error) => console.error("Error fetching flights:", error));
  }, []);

  const handleSearch = (filters) => {
    // Ensure that flights is defined before applying filters
    console.log(filters);
    console.log(flights);
    if (!flights) {
      return;
    }

    // Apply filters
    let filteredResults = flights;

    if (filters.source) {
      const sourceCity = filters.source.toLowerCase();
      filteredResults = filteredResults.filter(
        (flight) =>
          flight.displayData.source.airport.cityName.toLowerCase() ===
          sourceCity
      );
    }
    console.log(filteredResults);
    if (filters.destination) {
      const destinationCity = filters.destination.toLowerCase();
      filteredResults = filteredResults.filter(
        (flight) =>
          flight.displayData.destination.airport.cityName.toLowerCase() ===
          destinationCity
      );
    }
    console.log(filteredResults);
    // Apply sorting
    if (filters.sortBy === "price") {
      filteredResults.sort((a, b) => a.fare - b.fare);
    }

    setFilteredFlights([...filteredResults]);
  };

  return (
    <div>
      <h1>JetSetGo - Flight Booking App</h1>
      <FlightRequestForm onSearch={handleSearch} />
      <FlightResults flights={filteredFlights} />
    </div>
  );
};

export default App;
