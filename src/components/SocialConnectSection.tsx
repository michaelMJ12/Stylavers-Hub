import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaTiktok,
    FaLinkedinIn
} from "react-icons/fa";
import "../styles/SocialConnectSection.css";

const SocialConnectSection: React.FC = () => {
    return (
        <section className="social-section">
            {/* Left Side Content */}
            <div className="social-content">
                <h2 className="social-title">
                    Integrate Your Social Channels & Maximize Your Merch Visibility
                </h2>
                <h3 className="social-subtitle">
                    Build on StylaVerse by seamlessly linking your social platforms, enabling your audience to explore and purchase your merchandise directly from the channels they engage with most.
                </h3>

                {/* Social Media Icons */}
                <div className="social-icons">
                    <div className="facebook"><FaFacebookF /></div>
                    <div className="instagram"><FaInstagram /></div>
                    <div className="twitter"><FaTwitter /></div>
                    <div className="youtube"><FaYoutube /></div>
                    <div className="tiktok"><FaTiktok /></div>
                    <div className="linkedin"><FaLinkedinIn /></div>
                </div>

                {/* Input below icons */}
                <div className="social-connect-inputs">
                    <input
                        type="text"
                        placeholder="Enter your social profile link"
                        className="social-input"
                    />
                    <input
                        type="submit"
                        value="Connect Instantly"
                        className="social-submit"
                    />
                </div>


            </div>

            {/* Right Side Image */}
            <div className="social-image-wrapper">
                <img
                    src="https://spring-site.in.amaze.co/wp-content/uploads/2023/03/WEBSITE_INTEGRATIONS_983x400.png"
                    alt="Social Integration"
                    className="social-image"
                />
            </div>
        </section>
    );
};

export default SocialConnectSection;