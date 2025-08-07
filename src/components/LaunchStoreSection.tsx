import React from "react";
import "../styles/LaunchStoreSection.css";

const LaunchStoreSection: React.FC = () => {
  return (
    <section className="launch-store-section">
      <div className="launch-store-container">
        {/* Left Image */}
        <div className="launch-store-image">
          <img
            src="https://spring-site.in.amaze.co/wp-content/uploads/2020/12/Desktop-1.png"
            alt="Launch Store"
          />
        </div>

        {/* Right Content */}
        <div className="launch-store-content">
          <h2>Launch a free store</h2>
          <p>
            Launch your personalized storefront with StylaVerse for Creators—engineered for high conversion and tailored to showcase your unique brand. Seamlessly connect a custom domain and start promoting your store within minutes.
          </p>
          <button className="launch-store-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default LaunchStoreSection;
