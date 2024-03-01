import React, { useState, useEffect } from "react";
import FlightRequestForm from "./components/FlightRequestForm";
import FlightResults from "./components/FlightResults";

const App = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    // Fetch flights from the API
    fetch("https://api.npoint.io/378e02e8e732bb1ac55b")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFlights(data);
        setFilteredFlights(data);
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
    let filteredResults = [...flights];

    if (filters.sortBy === "select") {
      console.log("in select");
      console.log(flights);
      filteredResults = [...flights];
    }
    if (filters.selectedAirlines && filters.selectedAirlines !== "select") {
      filteredResults = filteredResults.filter(
        (flight) => filters.selectedAirlines === flight.airline
      );
    }

    // Apply filters

    if (filters.source) {
      console.log("in source");
      const sourceCity = filters.source.toLowerCase();
      filteredResults = filteredResults.filter(
        (flight) => flight.origin.toLowerCase() === sourceCity
      );
    }
    console.log(filteredResults);
    if (filters.destination) {
      const destinationCity = filters.destination.toLowerCase();
      filteredResults = filteredResults.filter(
        (flight) => flight.destination.toLowerCase() === destinationCity
      );
    }

    // Apply sorting
    if (filters.sortBy === "price") {
      filteredResults.sort((a, b) => a.price - b.price);
    }

    //console.log(filteredResults);
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
