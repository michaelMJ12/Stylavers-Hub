import React from 'react';
import '../styles/Store.css';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic3.png';


const Store: React.FC = () => {
  return (
    <div className="store-page">
      {/* Hero Section */}
      <section className="hero">
        <h1 className='ok'>Welcome to Our Store</h1>
        <p>Discover our collection of products.</p>
        <button className="btn">Shop Now</button>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2 className='ok'>Featured Products</h2>
        <div className="product-list">
          <div className="product">
            <img src={pic1} alt="Product 1" />
            <p className="name">Product 1</p>
            <p className="price">$23.99</p>
          </div>
          <div className="product">
            <img src={pic2} alt="Product 2" />
            <p className="name">Product 2</p>
            <p className="price">$43.99</p>
          </div>
          <div className="product">
            <img src={pic3} alt="Product 3" />
            <p className="name">Product 3</p>
            <p className="price">$99.99</p>
          </div>
          <div className="product">
            <img src={pic4} alt="Product 4" />
            <p className="name">Product 4</p>
            <p className="price">$19.99</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-us">
        <div className="text">
          <h2 className='ok'>About Us</h2>
        </div>
        <div className="description">
          <p>
            Provide a short site or other convenient mission and provide a mission to drive the thousands
            of our core values.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-posts">
        <h2>Latest Blog Posts</h2>
        <div className="posts">
          <div className="post">
            <img src={pic1} alt="Post 1" />
            <p className="title">Post Title</p>
            <p className="date">April 1, 2024</p>
          </div>
          <div className="post">
            <img src={pic3} alt="Post 2" />
            <p className="title">Post Title</p>
            <p className="date">April 1, 2024</p>
          </div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="footer">
        <p>&copy; 2025 Your Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Store;
