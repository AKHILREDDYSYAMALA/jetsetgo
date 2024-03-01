import React from "react";

const FlightCard = ({ flight }) => {
  const formatDuration = (durationString) => {
    const parts = durationString.split(" ");
    const hours = parts[0];
    const minutes = parts.length === 4 ? parts[2] : null;

    if (minutes) {
      return `${hours} h ${minutes} m`;
    } else {
      return `${hours} h`;
    }
  };

  const formatDate = (dateTimeString) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateTimeString).toLocaleTimeString("en-US", options);
  };

  const getAirlineImage = (airlineName) => {
    // Define the image sources based on airline names
    const airlineImages = {
      indigo:
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=18",
      airindia:
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18",
      spicejet:
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=18",
      vistara:
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=18",
      goair:
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=18",
      airasia:
        "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/QP.png?v=18",

      // Add more airlines as needed
    };

    // Convert the airline name to lowercase for case-insensitive matching
    //const lowercaseAirline = airlineName.toLowerCase();

    // Check if there is a corresponding image for the airline
    return airlineImages[airlineName] || "default-image-url";
  };

  return (
    <div className="w-90 mx-auto bg-white shadow-md rounded-md mb-8 p-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2">
            {/* <img
              src={
                flight.displayData.airlines[0].airlineName === "JetSpice"
                  ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=18"
                  : "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=18"
              }
              alt="Airline Logo"
              className="w-12 h-12"
            /> */}
            <img
              src={getAirlineImage(
                flight.airline.toLowerCase().replace(/\s/g, "")
              )}
              alt="Airline Logo"
              className="w-12 h-12"
            />
          </div>
          <div className="mr-6 pr-2 w-32">
            <h3 className="text-lg font-semibold ">{flight.airline}</h3>
            <p>{flight.flightNumber}</p>
          </div>
          <div className="mr-6 w-28">
            <p>{formatDate(flight.departureTime)}</p>
            <p className="text-sm font-bold">{flight.origin}</p>
          </div>
          <div className="mr-6 w-28">
            <p className="text-xs">
              Duration: {formatDuration(flight.duration)}
            </p>
            {/* <p className="text-xs">Stops: {flight.displayData.stopInfo}</p> */}
          </div>
          <div className="mr-6 w-28">
            <p>{formatDate(flight.arrivalTime)}</p>
            <p className="text-sm font-bold">{flight.destination}</p>
          </div>

          <div className="mr-6">
            <p className="text-lg font-semibold">₹ {flight.price}</p>
            <p className="text-xs">per adult</p>
          </div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              BOOK NOW
            </button>
            <p className="text-xs">seats available:{flight.seatsAvailable}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
