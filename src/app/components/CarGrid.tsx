import React from 'react';
import CarCard from './CarCard';



const carData = [
  {
    carName: 'CR-V',
    carType: 'SUV',
    carImage: '/crv.avif',
    fuel: '80L',
    transmission: 'Manual',
    capacity: '6 people',
    price: '$80.00',
  },
  {
    carName: 'Accord',
    carType: 'Sedan',
    carImage: '/accord.avif',
    fuel: '70L',
    transmission: 'Automatic',
    capacity: '5 people',
    price: '$90.00',
  },
  {
    carName: 'Civic',
    carType: 'Sedan',
    carImage: '/civic.avif',
    fuel: '70L',
    transmission: 'Automatic',
    capacity: '5 people',
    price: '$90.00',
  }, {
    carName: 'Odyssey',
    carType: 'Minivan',
    carImage: '/Odyssey.jpg',
    fuel: '80L',
    transmission: 'Automatic',
    capacity: '5 people',
    price: '$90.00',
  }, {
    carName: 'Pilot',
    carType: 'Sedan',
    carImage: '/pilot.jpg',
    fuel: '40L',
    transmission: 'Automatic',
    capacity: '5 people',
    price: '$90.00',
  },
   {
    carName: 'Fit',
    carType: 'Bethchman',
    carImage: 'fit.png',
    fuel: '90L',
    transmission: 'Automatic',
    capacity: '5 people',
    price: '$90.00',
  },
];

const CarGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {carData.map((car, index) => (
        <CarCard key={index} {...car} />
      ))}
    </div>
  );
};

export default CarGrid;
