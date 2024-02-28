import React, { useState } from "react";

const FilterModal = ({ isOpen, onClose, onApply }) => {
  const [selectedAirlines, setSelectedAirlines] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleApplyFilter = () => {
    onApply(selectedAirlines, sortBy);
    onClose();
  };

  

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-content bg-white p-4 rounded-md flex justify-center">
       
        <label className="text-lg font-bold">
          Filter by Airlines
        </label>
          <select
            
            value={selectedAirlines}
            onChange={(e) => setSelectedAirlines(e.target.value)}
            className="m-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="select">--select--</option>
            <option value="JetSpice">JetSpice</option>
            <option value="AirIndia">Air India</option>
            {/* Add more airline options if needed */}
          </select>
        
        

       
        <label className="text-lg font-bold">
          Sort by
          </label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}  className="m-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            <option value="select">--select--</option>
            <option value="price">Price</option>
            {/* Add more sorting options if needed */}
          </select>
          <button onClick={handleApplyFilter}>Apply</button>
        
      </div>
    </div>
  );
};

const FlightRequestForm = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    source: "",
    destination: "",
    sortBy: "select",
    selectedAirlines : "select",
  });

  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  const handleFilterIconClick = () => {
    setFilterModalOpen(!isFilterModalOpen);
  };

  const handleCloseModal = () => {
    setFilterModalOpen(false);
  };

  const handleApplyFilter = (selectedAirlines,sortBy) => {
    // ... (unchanged)
    console.log("Selected Airlines:", selectedAirlines);
    console.log("Sort By:", sortBy);
    const newFilters = {
      ...filters,
      selectedAirlines,
      sortBy,
    };
    onSearch(newFilters);

  };

  

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
    <div className="bg-gray-200 text-center h-48 flex items-center justify-center mt-12">
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
        <span  className="cursor-pointer p-2">
          <img
            onClick={handleFilterIconClick}
            src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/filter-512.png"
            alt="Filter Icon"
            className="w-10 h-10 m-2"
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
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 m-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
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
