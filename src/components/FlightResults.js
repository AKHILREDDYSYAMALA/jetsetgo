import React from 'react';

const formatDate = (dateTimeString) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  };

  return new Date(dateTimeString).toLocaleString('en-US', options);
};

const FlightResults = ({ flights }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Flight Results</h2>
      {flights.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flights.map((flight) => (
            <li key={flight.id} className="border rounded p-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {flight.displayData.airlines[0].airlineName}
                </h3>
                <p>
                  Flight {flight.displayData.airlines[0].flightNumber} -{' '}
                  {flight.displayData.stopInfo}
                </p>
                <p>
                  Source: {flight.displayData.source.airport.cityName} (
                  {flight.displayData.source.airport.airportCode})
                </p>
                <p>
                  Departure Time: {formatDate(flight.displayData.source.depTime)}
                </p>
                <p>
                  Destination: {flight.displayData.destination.airport.cityName} (
                  {flight.displayData.destination.airport.airportCode})
                </p>
                <p>
                  Arrival Time: {formatDate(flight.displayData.destination.arrTime)}
                </p>
                <p>Total Duration: {flight.displayData.totalDuration}</p>
                <p className="mt-2">Fare: ${flight.fare}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg">No flights available.</p>
      )}
    </div>
  );
};

export default FlightResults;

