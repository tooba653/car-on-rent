import React from 'react';
import Image from 'next/image';

import CarGrid from './components/CarGrid';
import RentalSummary from './components/RentalSummary';
import BillingInfo from './components/BillingInfo';
import RentalInfo from './components/RentalInfo';
import PaymentMethod from './components/PaymentMethod';
import Confirmation from './components/Confirmation';
const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Car Rental</h1>
      <CarGrid />
      <RentalSummary />
      <BillingInfo />
      <RentalInfo />
      <PaymentMethod/>
      <Confirmation/>
    </div>
  );
};

export default HomePage;
