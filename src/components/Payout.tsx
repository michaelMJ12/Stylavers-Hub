import React, { useState } from 'react';
import '../styles/Payout.css';
import { Link } from 'react-router-dom';

const payoutData = Array.from({ length: 23 }).map((_, index) => ({
  date: `2025-08-${(index + 1).toString().padStart(2, '0')}`,
  event: `Event ${index + 1}`,
  amount: `$${(Math.random() * 1000).toFixed(2)}`
}));

const Payout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(payoutData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = payoutData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="payout-container">
      {/* Top Buttons Section */}
      <div className="top-buttons-container">
        <button className="start-btn">Start Creating</button>
        <button className="login-btn">Login</button>
      </div>

      {/* Payout Summary Section */}
      <div className="payout-summary">
        <h2>Current Payout: <span>$12,750.50</span></h2>
       <Link to="/payment" >
       <button className="payout-process-btn">
          Proceed to initiate your next earnings release
        </button>
       </Link>  
      </div>

      {/* Payout Table Section */}
      <div className="payout-table">
        <h3>Transaction History</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.event}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? 'active' : ''}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payout;
