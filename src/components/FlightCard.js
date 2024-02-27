import React from "react";

const FlightCard = ({ flight }) => {
  const formatDate = (dateTimeString) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateTimeString).toLocaleTimeString("en-US", options);
  };

  return (
    <div className="w-90 mx-auto bg-white shadow-md rounded-md mb-8 p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            <img
              src={
                flight.displayData.airlines[0].airlineName == "JetSpice"
                  ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=18"
                  : "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18"
              }
              alt="Airline Logo"
              className="w-12 h-12"
            />
          </div>
          <div className="mr-6">
            <h3 className="text-lg font-semibold">
              {flight.displayData.airlines[0].airlineName}
            </h3>
            <p>
              {flight.displayData.airlines
                .map((airline) => airline.flightNumber)
                .join(", ")}
            </p>
          </div>
          <div className="mr-6">
            <p>{formatDate(flight.displayData.source.depTime)}</p>
            <p className="text-sm font-bold">
              {flight.displayData.source.airport.cityName}
            </p>
          </div>
          <div className="mr-6">
            <p className="text-xs">
              Journey Time: {flight.displayData.totalDuration}
            </p>
            <p className="text-xs">Stops: {flight.displayData.stopInfo}</p>
          </div>
          <div className="mr-6">
            <p>{formatDate(flight.displayData.destination.arrTime)}</p>
            <p className="text-sm font-bold">
              {flight.displayData.destination.airport.cityName}
            </p>
          </div>

          <div className="mr-6">
            <p className="text-lg font-semibold">₹ {flight.fare}</p>
            <p className="text-xs">per adult</p>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
