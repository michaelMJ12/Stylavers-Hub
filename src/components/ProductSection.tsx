import React from "react";
import "../styles/ProductSection.css";

const ProductSection: React.FC = () => {
  return (
    <section id="products">
      <div className="product-section-container">
        <div className="product-section-inner">
          <div className="product-images-column">
            <div className="product-image-group">
              <div className="product-item small animate-delay-65">
                <div className="product-image-wrapper">
                  <img
                    src="https://spring-site.in.amaze.co/wp-content/uploads/2021/01/Apparel-Products_v2-1.png"
                    alt="Apparel Products"
                    
                  />
                  <div className="product-label">Apparel</div>
                </div>
              </div>
              <div className="product-item small animate-delay-50">
                <div className="product-image-wrapper">
                  <img
                    src="https://spring-site.in.amaze.co/wp-content/uploads/2021/01/Accessories-Products_v2.png"
                    alt="Accessories Products"
                  
                  />
                  <div className="product-label">Accessories</div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-content-column">
            <h2>Create physical and digital products</h2>
            <h4>
             Effortlessly customize a wide range of over 180 premium physical products with StyleVerse for Creators. Seamlessly offer digital downloads or design bespoke products tailored to your vision. You focus on creation—we’ll handle the fulfillment, logistics, and deliver a seamless, end-to-end experience for your fans.
            </h4>
            <a href="https://teespring.com/signup?cta=start_creating">
              <button type="button" className="product-start-button">Start creating</button>
            </a>
            <div className="product-item large">
                <div className="product-image-wrapper">
                  <img
                    src="https://spring-site.in.amaze.co/wp-content/uploads/2020/12/digital-product.png"
                    alt="Digital Products"
                  
                  />
                  <div className="product-label">Digital products</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
