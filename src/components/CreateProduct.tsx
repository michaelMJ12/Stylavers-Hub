import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/CreateProduct.css';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic3.png';

const CreateProduct: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const bestSellers = [
        { id: 1, name: 'Product A', available: 10, colors: 3, price: '$25', image: pic1 },
        { id: 2, name: 'Product B', available: 8, colors: 2, price: '$30', image: pic2 },
        { id: 7, name: 'Product G', available: 4, colors: 2, price: '$18', image: pic3 },
        { id: 8, name: 'Product H', available: 6, colors: 3, price: '$32', image: pic3 },
    ];

    const newProducts = [
        { id: 3, name: 'Product C', available: 5, colors: 4, price: '$28', image: pic2 },
        { id: 4, name: 'Product D', available: 7, colors: 1, price: '$35', image: pic3 },
        { id: 9, name: 'Product I', available: 9, colors: 2, price: '$24', image: pic3 },
        { id: 10, name: 'Product J', available: 3, colors: 3, price: '$29', image: pic1 },
    ];

    const trendingProducts = [
        { id: 5, name: 'Product E', available: 12, colors: 5, price: '$22', image: pic3 },
        { id: 6, name: 'Product F', available: 6, colors: 2, price: '$27', image: pic2 },
        { id: 11, name: 'Product K', available: 5, colors: 4, price: '$31', image: pic4 },
        { id: 12, name: 'Product L', available: 7, colors: 3, price: '$33', image: pic1 },
    ];

    const renderProduct = (product: any) => (
        <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>Available: {product.available}</p>
            <p>Colors: {product.colors}</p>
            <div className="color-radio-group">
                {[...Array(product.colors)].map((_, idx) => (
                    <input key={idx} type="radio" name={`color-${product.id}`} />
                ))}
            </div>
            <p className="price">{product.price}</p>
        </Link>
    );

    return (
        <section className="create-product-container">
            <div className="mobile-menu-icon">
                <button onClick={toggleMenu} aria-label="Toggle menu">
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            <div className={`nav-scroll-wrapper ${menuOpen ? 'open' : ''}`}>
                <nav className={`nav-links1 ${menuOpen ? 'show' : ''}`}>
                    <Link to="/products/new" className="dropdown">New Products</Link>
                    <Link to="/products/best-sellers" className="dropdown">Best Seller</Link>
                    <div className="dropdown">
                        <span className="dropbtn">Apparel</span>
                        <div className="dropdown-content">
                            <div className="nested-dropdown">
                                <span>Men</span>
                                <div className="nested-dropdown-content">
                                    <Link to="/products/apparel/men/t-shirts">T-Shirts</Link>
                                    <Link to="/products/apparel/men/hoodies">Hoodies & Sweat Shirts</Link>
                                    <Link to="/products/apparel/men/long-sleeves">Long Sleeve Tees</Link>
                                    <Link to="/products/apparel/men/tank-tops">Tank Tops</Link>
                                    <Link to="/products/apparel/men/bottoms">Bottoms</Link>
                                    <Link to="/products/apparel/men/all-over-print">All-Over Print</Link>
                                    <Link to="/products/apparel/men/embroidery">Embroidery</Link>
                                </div>
                            </div>
                            <div className="nested-dropdown">
                                <span>Women</span>
                                <div className="nested-dropdown-content">
                                    <Link to="/products/apparel/women/t-shirts">T-Shirts</Link>
                                    <Link to="/products/apparel/women/hoodies">Hoodies & Sweat Shirts</Link>
                                    <Link to="/products/apparel/women/tank-tops">Tank Tops</Link>
                                    <Link to="/products/apparel/women/active-wear">Active Wear</Link>
                                    <Link to="/products/apparel/women/all-over-print">All-Over Print</Link>
                                    <Link to="/products/apparel/women/embroidery">Embroidery</Link>
                                </div>
                            </div>
                            <div className="nested-dropdown">
                                <span>Kids & Babies</span>
                                <div className="nested-dropdown-content">
                                    <Link to="/products/apparel/kids/t-shirts">T-Shirts</Link>
                                    <Link to="/products/apparel/kids/hoodies">Hoodies & Sweat Shirts</Link>
                                    <Link to="/products/apparel/kids/onesies">Onesies</Link>
                                </div>
                            </div>
                            <div className="nested-dropdown ">
                                <span>AS Colour Collections</span>
                                <div className="nested-dropdown-content">
                                    <Link to="/products/apparel/as-colour">View All</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/products/hats" className="dropdown">Hats</Link>
                    <div className="dropdown">
                        <span className="dropbtn">Digital</span>
                        <div className="dropdown-content">
                            <Link to="#">All</Link>
                            <Link to="#">Pet</Link>
                            <Link to="#">Business & Finance</Link>
                            <Link to="#">Entertainment</Link>
                            <Link to="#">Health & Wellness</Link>
                            <Link to="#">Political & Social & Religion</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <span className="dropbtn">Home & Decorations</span>
                        <div className="dropdown-content">
                            <Link to="#">All</Link>
                            <Link to="#">Drink Ware</Link>
                            <Link to="#">Puzzles</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <span className="dropbtn">Accessories</span>
                        <div className="dropdown-content">
                            <Link to="#">All</Link>
                            <Link to="#">Bags</Link>
                            <Link to="#">Foot Ware</Link>
                            <Link to="#">Jewelry</Link>
                            <Link to="#">Stickers & Stationery</Link>
                            <Link to="#">Sports & Outdoor</Link>
                            <Link to="#">Tech Accessories</Link>
                        </div>
                    </div>
                    <Link to="/shipping-locations" className="dropdown">More Shipping Locations</Link>
                </nav>
            </div>

            <div className="search-bar-section">
                <div className="search-bar">
                    <input type="text" placeholder="Search products..." />
                    <FaSearch className="search-icon" />
                </div>
            </div>

            <div className="image-banner">
                <img src={pic1} alt="Banner" />
            </div>

            <div className="product-section">
                <h3>Best Sellers</h3>
                <div className="product-grid">
                    {bestSellers.map(renderProduct)}
                </div>
                <Link to="/products/best-sellers" className="view-link">View All</Link>
            </div>

            <div className="product-section">
                <h3>New Products</h3>
                <div className="product-grid">
                    {newProducts.map(renderProduct)}
                </div>
                <Link to="/products/new" className="view-link">View All</Link>
            </div>

            <div className="product-section">
                <h3>Trending Products</h3>
                <div className="product-grid">
                    {trendingProducts.map(renderProduct)}
                </div>
                <Link to="/products/trending" className="view-link">View More</Link>
            </div>
        </section>
    );
};

export default CreateProduct;