import React from 'react';
import AnnouncementBanner from '../components/AnnouncementBanner';
import VideoBackground from '../components/VideoBackground';
import ImageGridSection from '../components/ImageGridSection';
import SocialConnectSection from '../components/SocialConnectSection';
import LaunchStoreSection from '../components/LaunchStoreSection';
import ProductSection from '../components/ProductSection';
import VideoSection from '../components/VideoSection';
import HowItWorks from '../components/HowItWorks';
import ResourcesSection from '../components/ResourcesSection';
import Footer from '../components/Footer';
import NavBar from './NavBar';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
    <div style={{ paddingTop: '70px' }}>
      <AnnouncementBanner />
    </div>
    <VideoBackground />
    <ImageGridSection />
    <SocialConnectSection/>
    <LaunchStoreSection/>
    <ProductSection/>
    <VideoSection />
    <HowItWorks />
    <ResourcesSection/>
    <Footer/>
    </>
  );
};

export default Home;
