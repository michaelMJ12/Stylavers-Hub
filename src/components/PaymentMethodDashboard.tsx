
import React from 'react';
import Sidebar from './Sidebar';
import PaymentMethod from './PaymentMethod';




const PaymentMethodDashboard: React.FC = () => {
  return (
    <>
     <Sidebar/>
     <PaymentMethod/>
    </>
  );
};

export default PaymentMethodDashboard;
