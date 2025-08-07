import React, { useEffect, useState, useRef } from 'react';
import '../styles/DashboardBanners.css';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import last from '../assets/last.png';
import profileImg from '../assets/pic1.png'; // <-- Add a profile image
import { startInfiniteScroll } from '../utils/infiniteScroll';

const images = [img1, img2, img3];

const DashboardBanners: React.FC = () => {
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
    <div className="main__content main__content__default__bg">
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

      <div className="overview_cont">
        <div className="overview">
          <section className="overview__content">
            <div className="firstBanner">
              <section data-testid="1234">
                <a id="promo_banner_adobe_express_banner" href="https://amaze.co/_adobe-redemption/" target="_blank" rel="noopener noreferrer">
                  <picture className="promo_banner">
                    <img className="promo_banner__image" src={pic1} alt="Adobe express banner" />
                  </picture>
                </a>
                <a id="promo_banner_amaze_resource_hub" href="https://www.amaze.co/winter-25-resource-hub" target="_blank" rel="noopener noreferrer">
                  <picture className="promo_banner">
                    <img className="promo_banner__image" src={pic2} alt="amaze resource hub" />
                  </picture>
                </a>
                <a id="promo_banner_samples_increase_sales" href="https://dashboard.teespring.com/samples" target="_blank" rel="noopener noreferrer">
                  <picture className="promo_banner">
                    <img className="promo_banner__image" src={pic3} alt="samples increase sales" />
                  </picture>
                </a>
              </section>
            </div>
            <div className="secondBanner"></div>
          </section>
        </div>

        <div className="thirdBanner">
          <div className="integration-shelf__wrapper">
            <div className="integration-shelf__title">
              <h1 className="mb1" style={{ marginLeft: '30px', textAlign: 'center' }}>Sell anywhere</h1>
              <div className="spacer"></div>
            </div>

            <div id="integration-shelf" className="integration-shelf">
              {[
                'StoreDrop.png', 'youtube.png', 'linktree.png', 'discord_overview.png',
                'twitch.png', 'tiktok_overview.png', 'beacons.png', 'onlyfans_overview.png'
              ].map((filename, i) => (
                <div className="integration-item" key={i}>
                  <img src={`https://teespring-ass.s3.amazonaws.com/dashboard/${filename}`} alt="integration" />
                </div>
              ))}
            </div>
          </div>

          <h1 className="mb1" style={{ marginLeft: '30px', backgroundColor: 'transparent', textAlign: 'center' }}>Quick actions</h1>

          <div className="overview__whatsnew">
            {images.map((img, i) => (
              <img key={i} className="newImages" src={img} alt={`Image ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="fifthBanner">
          <div className="overview">
            <section data-testid="1234">
              <a id="promo_banner_discord" href="https://discord.gg/Rb2QkpSu" target="_blank" rel="noopener noreferrer">
                <picture className="promo_banner">
                  <img className="promo_banner__image" src={last} alt="discord hub" />
                </picture>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBanners;
