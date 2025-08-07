
import React from 'react';
import Sidebar from './Sidebar';
import DashboardBanners from './DashboardBanners';


const Dashboard: React.FC = () => {
  return (
    <>
     <Sidebar/>
     <DashboardBanners/>
    </>
  );
};

export default Dashboard;
