import React from "react";
import "../styles/HowItWorks.css";

const HowItWorks: React.FC = () => {
  return (
    <section id="howitworks">
      <div className="howitworks-container">
        <div className="howitworks-inner">
          <h2>How it works</h2>
          <div className="howitworks-columns">
            {/* Create */}
            <div className="howitworks-column">
              <h4>Create</h4>
              <p>
                Design products and create a custom store instantly for free with StyleVerse.
              </p>
              <div className="image-container">
                <img
                  src="https://spring-site.in.amaze.co/wp-content/uploads/2020/12/Create-1.png"
                  alt="Create"
                />
              </div>
            </div>

            {/* Share */}
            <div className="howitworks-column">
              <h4>Share</h4>
              <p>
                Connect your social accounts, promote your launch, and share your products with your community.
              </p>
              <div className="image-container">
                <img
                  src="https://spring-site.in.amaze.co/wp-content/uploads/2020/12/Share-e1607647191590.png"
                  alt="Share"
                />
              </div>
            </div>

            {/* Earn */}
            <div className="howitworks-column">
              <h4>Earn</h4>
              <p>
                Get the profit you deserve while we handle production, shipping, and customer support for you.
              </p>
              <div className="image-container">
                <img
                  src="https://spring-site.in.amaze.co/wp-content/uploads/2021/01/Earn-scaled-e1607647280561.jpg"
                  alt="Earn"
                />
              </div>
            </div>
          </div>

          <a href="https://teespring.com/signup?cta=start_creating">
            <button className="start-button" type="button">
              Start creating
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
