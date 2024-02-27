import React, { useState } from 'react';

const FlightRequestForm = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    source: '',
    destination: '',
    sortBy: 'price',
  });

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
    <div className="bg-pink-{200} text-center h-24 flex items-center justify-center">
      <form onSubmit={handleSubmit}>
      <label className="text-lg font-bold">
        Source Airport:
        <input
          type="text"
          name="source"
          value={filters.source}
          onChange={handleChange}
          className='border border-gray-500 rounded m-2'
        />
      </label>
      <label className="text-lg font-bold">
        Destination Airport:
        <input
          type="text"
          name="destination"
          value={filters.destination}
          onChange={handleChange}
          className='border border-gray-500 rounded m-2'
        />
      </label>
      <label className="text-lg font-bold">
        Sort by:
        <select name="sortBy" value={filters.sortBy} onChange={handleChange}  className=" m-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
          <option value="select">--select--</option>
          <option value="price" className="py-2">Price</option>
          {/* Add more sorting options if needed */}
        </select>
      </label>
      <button type="submit">Search Flights</button>
    </form>
    </div>
  );

};

export default FlightRequestForm;
