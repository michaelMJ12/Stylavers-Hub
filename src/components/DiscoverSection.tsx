import React from "react";
import "../styles/DiscoverSection.css"; // Create this CSS file for styling

interface Creator {
  name: string;
  image: string;
  alt: string;
  link: string;
}

const creatorColumns: Creator[][] = [
  [
    {
      name: "Not Your Average Therapist",
      image: "https://spring-site.in.amaze.co/wp-content/uploads/2024/08/NotYourAverageTherapist.png",
      alt: "NotYourAverageTherapist",
      link: "https://notyouraveragethrpst.creator-spring.com/",
    },
    {
      name: "Eric Bishoff",
      image: "https://spring-site.in.amaze.co/wp-content/uploads/2024/08/EricB.png",
      alt: "EricB",
      link: "https://eric-bischoff.creator-spring.com",
    },
    {
      name: "Yogi Bryan",
      image: "https://spring-site.in.amaze.co/wp-content/uploads/2024/08/YogiBryan.png",
      alt: "YogiBryan",
      link: "https://www.yogibryanshop.com/",
    },
    {
      name: "Cool Math Games",
      image: "https://spring-site.in.amaze.co/wp-content/uploads/2024/08/Math.png",
      alt: "Math",
      link: "https://merch.coolmathgames.com/",
    },
  ],
  [
    {
      name: "Max Randolph",
      image: "https://spring-site.in.amaze.co/wp-content/uploads/2024/08/MaxRandolph.png",
      alt: "MaxRandolph",
      link: "https://maxrandolphmerch.creator-spring.com/",
    },
    {
      name: "Jon Taffer",
      image: "https://spring-site.in.amaze.co/wp-content/uploads/2024/08/JonTaffer.png",
      alt: "JonTaffer",
      link: "https://jon-taffer.creator-spring.com",
    },
    {
      name: "Cats and Metal",
      image: "https://spring-site.in.amaze.co/wp-content/uploads/2024/08/CatsandMetal.png",
      alt: "CatsandMetal",
      link: "https://www.catsandmetal.store/",
    },
  ],
  [
    {
      name: "Epic History",
      image: "https://spring-site.in.amaze.co/wp-content/uploads/2024/08/EpicHistory.png",
      alt: "EpicHistory",
      link: "https://epic-history-tv-merch-shop.creator-spring.com/",
    },
    {
      name: "Saco River Wildlife Center",
      image: "https://spring-site.in.amaze.co/wp-content/uploads/2024/08/SacoRiver.png",
      alt: "SacoRiver",
      link: "https://sacoriverwildlifecenter.creator-spring.com/",
    },
    {
      name: "Goji Center",
      image: "https://spring-site.in.amaze.co/wp-content/uploads/2024/08/Goji.png",
      alt: "Goji",
      link: "https://gojicenter.creator-spring.com/",
    },
  ],
];

const DiscoverSection: React.FC = () => {
  return (
    <section>
      <div className="discover-section">
        <div className="discover-container">
          <h6 className="discover-title">Discover</h6>
          <h2 className="discover-subtitle">Check Out these Creators</h2>
          <div className="discover-gallery">
            {creatorColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="gallery-column">
                {column.map((creator, index) => (
                  <a key={index} href={creator.link} target="_blank" rel="noreferrer">
                    <div className="image-wrapper">
                      <div style={{ paddingTop: "96.4361%" }}></div>
                      <img
                        src={creator.image}
                        alt={creator.alt}
                        className="creator-image"
                        width="954"
                        height="920"
                      />
                    </div>
                    <h5 className="caption">{creator.name}</h5>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
