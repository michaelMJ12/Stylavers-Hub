import React from 'react';
import '../styles/VideoSection.css';

const VideoSection: React.FC = () => {
  return (
    <section className="creators-section">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/zIzD1lCyhss"
          title="StyleVerse for Creators"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
