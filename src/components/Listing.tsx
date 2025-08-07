import React, { useState } from 'react';
import '../styles/Listing.css';
import image from '../assets/list_image.png';

const sampleData = Array.from({ length: 42 }, (_, i) => ({
  id: `user-${i + 1}`,
  unitsSold: Math.floor(Math.random() * 1000),
  nextPrint: `2025-08-${(i % 30) + 1}`,
  profit: `$${(Math.random() * 1000).toFixed(2)}`,
}));

const itemsPerPage = 10;

const Listing: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = sampleData.filter((item) =>
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="listing-container">
      <div className="listing-header">
        <button className="login-button">Login</button>
        <button className="create-button">Start Creating</button>
      </div>

      <img src={image} className="listing-banner" alt="Banner" />

      <h1 className="listing-title">Your Listings</h1>

      <div className="listing-controls">
        <input
          type="text"
          placeholder="Filter by search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <select className="dropdown">
          <option>Sort by Start Date</option>
          <option>Start Date</option>
          <option>Next Print</option>
          <option>Sales</option>
          <option>Name</option>
        </select>
        <select className="dropdown">
          <option>Show All</option>
          <option>Active</option>
          <option>Ended</option>
          <option>Relaunchable</option>
          <option>Draft</option>
          <option>All</option>
          <option>Archived</option>
          <option>Old Teespring Designer</option>
        </select>
      </div>

      <div className="listing-table-card">
        <div className="listing-card-header">
          <span className="listing-card-title">User ID</span>
        </div>

        <table className="listing-table">
          <thead>
            <tr>
              <th>Units Sold</th>
              <th>Next Print</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item, index) => (
              <tr key={index}>
                <td>{item.unitsSold}</td>
                <td>{item.nextPrint}</td>
                <td>{item.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`pagination-button ${i + 1 === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
