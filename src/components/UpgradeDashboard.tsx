import React, { useEffect, useRef, useState } from 'react';
import '../styles/UpgradeDashboard.css';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import last from '../assets/last.png';
import profileImg from '../assets/pic1.png';
import { startInfiniteScroll } from '../utils/infiniteScroll';

interface UpgradeCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl?: string;
  iconUrl?: string;
  iconTitle: string;
  iconSubtitle: string;
  external?: boolean;
  backgroundImage?: string;
}

const UpgradeCard: React.FC<UpgradeCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  iconUrl,
  iconTitle,
  iconSubtitle,
  external = false,
  backgroundImage,
}) => {
  return (
    <div
      className="upgrade-card"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <a
        href={buttonLink}
        target={external ? '_blank' : '_self'}
        rel="noreferrer"
        className="upgrade-link"
      >
        <div className="upgrade-main">
          <div className="upgrade-text">
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            <button className="upgrade-button">{buttonText}</button>
          </div>
          {imageUrl && (
            <img src={imageUrl} alt="Upgrade" className="upgrade-image" />
          )}
        </div>
      </a>
      <a
        href={buttonLink}
        target={external ? '_blank' : '_self'}
        rel="noreferrer"
        className="upgrade-icon-link"
      >
        <div className="upgrade-icon-wrapper">
          {iconUrl && (
            <img src={iconUrl} alt={iconTitle} className="upgrade-icon" />
          )}
          <div>
            <h6 className="icon-title">{iconTitle}</h6>
            <h6 className="icon-subtitle">{iconSubtitle}</h6>
          </div>
        </div>
      </a>
    </div>
  );
};

const UpgradeDashboard: React.FC = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startInfiniteScroll('integration-shelf', 'integration-item');

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  return (
    <div>
       {/* Top Bar with Profile */}
      <div className="top-bar">
        <div className="profile-container" ref={dropdownRef}>
          <img
            src={profileImg}
            alt="Profile"
            className="profile-image"
            onClick={() => setDropdownOpen(prev => !prev)}
          />
          {dropdownOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Policies</li>
                <li>Sign Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    <div className="main-content">
      <div className="upgrades-background">
        <div className="upgrades-page">
          <UpgradeCard
            title="Ready to level up?"
            description="See if you qualify to unlock custom stores, special drops, and marketing campaigns—Plus a dedicated growth manager, all free!"
            buttonText="Take the quiz"
            buttonLink="https://share.hsforms.com/1Kxlj5mOSRMigaF9SL7HpYAe19c5"
            iconUrl="https://teespring-ass.s3.amazonaws.com/upgrades/dt_upgrades_icon.png"
            iconTitle="Ignite Program"
            iconSubtitle="Apply now and see if you're qualified to unlock special perks!"
            backgroundImage={pic1}
            external
          />
          <UpgradeCard
            title="Purchase a custom domain in minutes."
            description=""
            buttonText="Buy now"
            buttonLink="/stores/purchase-domain"
            imageUrl="https://teespring-ass.s3.amazonaws.com/upgrades/content-space.png"
            iconUrl="https://teespring-ass.s3.amazonaws.com/upgrades/purchase.png"
            iconTitle="Purchase a domain"
            iconSubtitle="Buy a domain for your Spring store"
            backgroundImage={pic2}
          />
          <UpgradeCard
            title="Have a domain? Connect it today to drive more sales."
            description=""
            buttonText="Connect now"
            buttonLink="/tools/c1236644-2cec-11ec-8d3d-0242ac130003"
            iconUrl="https://teespring-ass.s3.amazonaws.com/upgrades/connect.png"
            iconTitle="Connect a domain"
            iconSubtitle="Connect your existing domain"
            backgroundImage={pic3}
          />
          <UpgradeCard
            title="Drag. Drop. Launch."
            description="Use Studio by Amaze to build custom, on-brand pages and connect them to your store in minutes—no code needed."
            buttonText="Learn More"
            buttonLink="https://www.amaze.co/studio"
            iconUrl="https://teespring-ass.s3.us-east-1.amazonaws.com/upgrades/upgrade-amaze-icon.png"
            iconTitle="Studio by Amaze"
            iconSubtitle="Start creating your custom pages."
            backgroundImage={last}
            external
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default UpgradeDashboard;
