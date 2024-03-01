import React, { useEffect, useState } from "react";

const FilterModal = ({ isOpen, onClose, onApply }) => {
  const [selectedAirlines, setSelectedAirlines] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleApplyFilter = () => {
    onApply(selectedAirlines, sortBy);
    //onClose();
  };

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-content bg-white p-4 rounded-md mt-10 flex justify-center w-full fixed op-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <label className="m-2 text-lg font-bold">Filter by Airlines :</label>
        <select
          value={selectedAirlines}
          onChange={(e) => setSelectedAirlines(e.target.value)}
          className="m-1 w-40 h-10 mr-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="select">--select--</option>
          <option value="JetSpice">JetSpice</option>
          <option value="AirIndia">Air India</option>
          {/* Add more airline options if needed */}
        </select>

        <label className="m-2 text-lg font-bold">Sort by :</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="m-1 w-40 h-10 mr-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="select" className="mt-6 ml-10">
            --select--
          </option>
          <option value="price" className="py-2 ml-10">
            Price
          </option>
          {/* Add more sorting options if needed */}
        </select>
        <button
          onClick={handleApplyFilter}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 m-[1.5] ml-4 mr-10 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

const FlightRequestForm = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    source: "",
    destination: "",
    sortBy: "select",
    selectedAirlines: "select",
  });

  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const handleFilterIconClick = () => {
    setFilterModalOpen(!isFilterModalOpen);
  };

  const handleCloseModal = () => {
    setFilterModalOpen(false);
  };

  const handleApplyFilter = (selectedAirlines, sortBy) => {
    console.log("Selected Airlines:", selectedAirlines);
    console.log("Sort By:", sortBy);
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        selectedAirlines,
        sortBy,
      };
    });
    onSearch(filters);
  };
  // useEffect(() => {
  //   onSearch(filters);
  // }, [filters]);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="text-center h-48 flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <div className="flex justify-center space-x-4 mb-4">
          <label className="text-lg font-bold">
            Source Airport:
            <input
              type="text"
              name="source"
              value={filters.source}
              onChange={handleChange}
              className="border border-gray-500 rounded m-2 p-2"
            />
          </label>
          <label className="text-lg font-bold">
            Destination Airport:
            <input
              type="text"
              name="destination"
              value={filters.destination}
              onChange={handleChange}
              className="border border-gray-500 rounded m-2 p-2"
            />
          </label>

          {/* Filter icon */}
          <div>
            <span className="cursor-pointer">
              <img
                onClick={handleFilterIconClick}
                src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/filter-512.png"
                alt="Filter Icon"
                className="w-12 h-12 ml-5 mt-1"
              />
            </span>
          </div>

          {/* Sort by dropdown */}
          {/* <label className="text-lg font-bold">
          Sort by:
          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleChange}
            className="m-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="select">--select--</option>
            <option value="price" className="py-2">
              Price
            </option>
            {/* Add more sorting options if needed */}
          {/* </select>
        </label> */}

          {/* Search button */}
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 m-3 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            >
              Search Flights
            </button>
          </div>
        </div>

        {/* Filter Modal */}
        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={handleCloseModal}
          onApply={handleApplyFilter}
        />
      </form>
    </div>
  );
};

export default FlightRequestForm;
