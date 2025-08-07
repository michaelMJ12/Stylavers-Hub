import React from 'react';
import '../styles/VideoBackground.css';

const VideoBackground: React.FC = () => {
    return (
        <section className="video-section">
            {/* Desktop Video */}
            <video
                className="video-bg desktop-only"
                src="https://spring-site.in.amaze.co/wp-content/uploads/2024/03/Teespring_Desktop_P1_1920x1080_mar2024.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Mobile Video */}
            <video
                className="video-bg mobile-only"
                src="https://spring-site.in.amaze.co/wp-content/uploads/2024/03/TeeSpring_Social_P1_1078x1728_mar2024.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Optional overlay content */}
            <div className="video-overlay">
                <div className="overlay-content">
                    <ul className="headline-list">
                        <li>Create products.</li>
                        <li>Engage fans.</li>
                        <li>Make money.</li>
                    </ul>
                    
                    <button className="cta-button">Get Started, its free. </button>

                    <p className="subtext">
                        Turn your ideas into physical and digital products that your fans will love.
                    </p>

                    <div className="neumorphic-box-wrapper">
                        <div className="neumorphic-box">
                            <a href='#' ><div className="box-item">Sell on your Social Channels</div></a>
                        </div>
                        <div className="neumorphic-box">
                              <a href='#' ><div className="box-item">Launch a free store</div></a>
                        </div>
                        <div className="neumorphic-box">
                              <a href='#' ><div className="box-item">Create physical and Digital products</div></a>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default VideoBackground;


