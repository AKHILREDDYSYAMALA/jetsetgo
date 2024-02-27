import React from "react";
import FlightCard from "./FlightCard";

const FlightResults = ({ flights }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Flight Results</h2>
        {flights.length > 0 ? (
          flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))
        ) : (
          <p className="text-gray-600">No flights available.</p>
        )}
      </div>
    </div>
  );
};

export default FlightResults;
