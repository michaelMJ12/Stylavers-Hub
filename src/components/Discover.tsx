import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import DiscoverSection from './DiscoverSection';
import AnnouncementBanner from './AnnouncementBanner';


const Discover: React.FC = () => {
  return (
    <>
     <NavBar />
     <div style={{ paddingTop: '70px' }}>
      <AnnouncementBanner />
    </div>
     <DiscoverSection/>
     <Footer/>
    </>
  );
};

export default Discover;
