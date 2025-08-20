import React, { useState } from "react";
import "../styles/Settings.css";

type CountryData = {
  name: string;
  states: {
    name: string;
    cities: string[];
  }[];
};

const countries: CountryData[] = [
  {
    name: "Nigeria",
    states: [
      { name: "Lagos", cities: ["Ikeja", "Lekki", "Yaba"] },
      { name: "Abuja", cities: ["Garki", "Wuse", "Maitama"] },
    ],
  },
  {
    name: "South Africa",
    states: [
      { name: "Gauteng", cities: ["Johannesburg", "Pretoria"] },
      { name: "Western Cape", cities: ["Cape Town", "Stellenbosch"] },
    ],
  },
];

const Settings: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  const states =
    countries.find((c) => c.name === selectedCountry)?.states || [];
  const cities =
    states.find((s) => s.name === selectedState)?.cities || [];

  return (
    <div className="settings-container">
      <h1 className="page-title">Profile</h1>

      {/* Change Your Info */}
      <div className="section">
        <h2>Change your info</h2>
        <hr />
        <form className="form-grid">
          <div className="form-row">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" />
          </div>
          <div className="form-row">
            <label>Display Name</label>
            <input type="text" placeholder="Enter display name" />
          </div>
          <div className="form-row">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone number" />
          </div>

          <h3>Change your default address</h3>
          <div className="form-row">
            <label>Street</label>
            <input type="text" placeholder="Street" />
          </div>
          <div className="form-row">
            <label>Apartment / Suite</label>
            <input type="text" placeholder="Apartment / Suite" />
          </div>
          <div className="form-row">
            <label>Country</label>
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedState("");
              }}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <label>State</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              disabled={!selectedCountry}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <label>City</label>
            <select disabled={!selectedState}>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="form-row">
            <label>Zip</label>
            <input type="text" placeholder="Zip code" />
          </div>

          {/* Advanced Settings */}
          <h3>Advanced Settings</h3>
          <div className="checkbox-group">
            <input type="checkbox" id="shareOption" />
            <label htmlFor="shareOption">
              Display share option after launching
            </label>
          </div>
          <div className="form-row">
            <label>Product listing display preferences</label>
            <select>
              <option>Do not show count at all</option>
              <option>Show total sales all the time</option>
              <option>Show sales for current listing running only</option>
            </select>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="boostedNetwork" />
            <label htmlFor="boostedNetwork">
              Feature my listings in Spring's Boosted Network
            </label>
          </div>
          <div className="form-row">
            <label>Default Time Zone</label>
            <select>
              <option>GMT+1 (West Africa Time)</option>
              <option>GMT+2 (Central Africa Time)</option>
              <option>GMT+3 (East Africa Time)</option>
            </select>
          </div>
          <div className="form-row">
            <label>Default Currency</label>
            <select>
              <option>Nigerian Naira (NGN)</option>
              <option>South African Rand (ZAR)</option>
              <option>Kenyan Shilling (KES)</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Update Info
          </button>
        </form>
      </div>

      {/* Change Password */}
      <div className="section">
        <h2>Change your password</h2>
        <hr />
        <form className="form-grid">
          <div className="form-row">
            <label>New Password</label>
            <input type="password" placeholder="Enter new password" />
          </div>
          <div className="form-row">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
          </div>
          <button type="submit" className="submit-btn">
            Update Password
          </button>
        </form>
      </div>

      {/* Connected Accounts */}
      <div className="section">
        <h2>Connected Accounts</h2>
        <hr />
        <ul>
          <li>PayPal - john.doe@example.com</li>
          <li>Stripe - jane.doe@example.com</li>
          <li>Google - johnny@example.com</li>
        </ul>
      </div>

      {/* Bank Details */}
      <div className="section">
        <h2>Bank Details</h2>
        <hr />
        <form className="form-grid">
          <div className="form-row">
            <label>Account Name*</label>
            <input type="text" placeholder="Account Name" required />
          </div>
          <div className="form-row">
            <label>Account Number*</label>
            <input type="text" placeholder="Account Number" required />
          </div>
          <div className="form-row">
            <label>Bank Name*</label>
            <input type="text" placeholder="Bank Name" required />
          </div>
          <button type="submit" className="submit-btn">
            Set Bank Account
          </button>
        </form>
      </div>

      {/* Two-Factor Authentication */}
      <div className="section">
        <h2>Two-Factor Authentication</h2>
        <hr />
          {/* QR Code Image */}
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=otpauth://totp/ExampleApp:user@example.com?secret=JBSWY3DPEHPK3PXP&issuer=ExampleApp"
            alt="QR Code for Google Authenticator"
            style={{
              width: "150px",
              height: "150px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "8px",
              background: "#fff",
            }}
          />
        </div>
        <p>
          1) Download Google Authenticator app on your phone via App/Play Store
        </p>
        <p>2) Scan the QR code above with Google Authenticator app</p>
        <p>3) Check the box below and click Update two-factor setting</p>
        <div className="checkbox-group">
          <input type="checkbox" id="twoFactor" />
          <label htmlFor="twoFactor">Enable two-factor authentication</label>
        </div>
        <button className="submit-btn">Update Two-Factor Setting</button>
      </div>
    </div>
  );
};

export default Settings;
