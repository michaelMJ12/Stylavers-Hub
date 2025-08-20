import React, { useState } from "react";
import "../styles/Purchase.css";

const Purchase: React.FC = () => {
  const [activeTab, setActiveTab] = useState("purchase-history");
  const [showModal, setShowModal] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "payment-method":
        return (
          <div className="content-container">
            <h3>Payment Method</h3>
            <p>Add your preferred payment method for future purchases.</p>
            <button
              className="primary-btn"
              onClick={() => setShowModal(true)}
            >
              Add Payment Method
            </button>
          </div>
        );

      case "subscription":
        return (
          <div className="content-container">
            <h3>Active Subscriptions</h3>
            <p>Review your subscription below:</p>
            <ul className="list">
              <li>Netflix – Premium Plan</li>
              <li>Spotify – Family Plan</li>
              <li>Amazon Prime – Monthly</li>
            </ul>
            <p className="help-text">
              If you have any questions about your subscriptions, contact us{" "}
              <a href="#">here</a>.
            </p>
          </div>
        );

      case "purchase-history":
        return (
          <div className="content-container dual-section">
            <div className="section gray-bg">
              <h4>Purchase History</h4>
              <ul className="list">
                <li>Netflix – Premium – $15.99</li>
                <li>Spotify – Family – $14.99</li>
              </ul>
            </div>
            <div className="section">
              <h4>Orders History</h4>
              <ul className="list">
                <li>Order #12345 – Shipped</li>
                <li>Order #67890 – Processing</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="purchase-page">
      <header>
        <h1>Payments</h1>
        <p>
          Review your subscription, purchases, and manage your preferred payment method.
        </p>
      </header>

      <nav className="nav-tabs">
        <button
          onClick={() => setActiveTab("purchase-history")}
          className={activeTab === "purchase-history" ? "active" : ""}
        >
          Purchase History
        </button>
        <button
          onClick={() => setActiveTab("subscription")}
          className={activeTab === "subscription" ? "active" : ""}
        >
          Subscription
        </button>
        <button
          onClick={() => setActiveTab("payment-method")}
          className={activeTab === "payment-method" ? "active" : ""}
        >
          Payment Method
        </button>
      </nav>

      {renderContent()}

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            {/* <span className="close-icon" onClick={() => setShowModal(false)}>
              &times;
            </span> */}
            <h2>Add a Payment Method</h2>
            <hr />
            <h4>Card Details</h4>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Card Name" />
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>
                Cancel Transaction
              </button>
              <button className="process-btn">Process Transaction</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchase;
