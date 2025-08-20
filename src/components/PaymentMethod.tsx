import React, { useState } from "react";
import "../styles/PaymentMethod.css";

const PaymentMethod: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");

  const paymentOptions = [
    "Bank Transfer",
    "PayPal",
    "Payoneer",
    "Wise",
    "Crypto Wallet"
  ];

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2 className="payout-title">Request a payout for <span>$12,750.50</span></h2>
        <p className="payment-subtitle">How do you want to be paid?</p>

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="payment-dropdown"
        >
          {paymentOptions.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="payment-info">
          <p><strong>Selected Method:</strong> {paymentMethod}</p>
          <small>Note: Processing time may vary depending on the method selected.</small>
        </div>

        <button className="payment-btn">Request Payout</button>
      </div>
    </div>
  );
};

export default PaymentMethod;
