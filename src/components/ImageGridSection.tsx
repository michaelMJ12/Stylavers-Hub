import React from 'react';
import '../styles/ImageGridSection.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image3.png';
import image8 from '../assets/image2.png';


const images = [
  {
    src: image8,
    name: 'Design One',
    description: 'Creative and Bold',
  },
  {
    src: image7,
    name: 'Design Two',
    description: 'Clean and Modern',
  },
  {
    src: image6,
    name: 'Design Three',
    description: 'Elegant and Minimal',
  },
  {
    src: image5,
    name: 'Design Four',
    description: 'Vibrant and Energetic',
  },
   {
    src: image4,
    name: 'Design Four',
    description: 'Vibrant and Energetic',
  },
   {
    src: image3,
    name: 'Design Four',
    description: 'Vibrant and Energetic',
  },
  {
    src: image2,
    name: 'Design Four',
    description: 'Vibrant and Energetic',
  },
  {
    src: image1,
    name: 'Design Four',
    description: 'Vibrant and Energetic',
  },
];

const ImageGridSection: React.FC = () => {
  return (
    <section className="image-grid-section">
        <h1>featured creators</h1>
      <div className="image-grid">
        {images.map((img, index) => (
          <div key={index} className="image-card">
            <a href='#'><img src={img.src} alt={img.name} className="card-img" /></a>
            <h4 className="card-title">{img.name}</h4>
            <p className="card-desc">{img.description}</p>
          </div>
        ))}
      </div><br/><br/>
      <a href="#" id='link'>See What Other Creators Designs Look Like with StylaVerse -{'>'} </a>
    </section>
  );
};

export default ImageGridSection;
