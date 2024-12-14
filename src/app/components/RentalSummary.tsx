'use client';
import React, { useState } from 'react';
import Image from 'next/image';


const RentalSummary: React.FC = () => {
  const [promoCode, setPromoCode] = useState('');
  const [totalPrice, setTotalPrice] = useState(80.0); 
  const applyPromoCode = () => {
    if (promoCode === 'DISCOUNT10') {
      setTotalPrice((prevPrice) => prevPrice - 10); 
    } else {
      alert('Invalid promo code!');
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-6 max-w-md mx-auto">
      
      <h2 className="font-bold text-lg">Rental Summary</h2>
      <p className="text-gray-500 mt-2 text-sm">
        Prices may change depending on the length of the rental and the price of your rental car.
      </p>

     
      <div className="flex items-center mt-4 border border-gray-200 rounded-lg p-4">
      <Image src="/gtr.avif" alt="description" width={150} height={150} />
        <div className="ml-4">
          <p className="font-bold">Nissan GT-R</p>
          <div className="flex items-center text-sm text-gray-500 mt-1">
           
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-orange-400">★</span>
            ))}
            <span className="text-gray-300">★</span>
            <span className="ml-2 text-gray-500">440+ Reviewers</span>
          </div>
        </div>
      </div>

      
      <div className="mt-6">
        <div className="flex justify-between text-sm text-gray-500">
          <p>Subtotal</p>
          <p>$80.00</p>
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <p>Tax</p>
          <p>$0</p>
        </div>
      </div>

    
      <div className="mt-4">
        <div className="flex items-center border border-gray-200 rounded-lg p-2">
          <input
            type="text"
            placeholder="Apply promo code"
            className="flex-1 outline-none text-sm p-1"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button
            onClick={applyPromoCode}
            className="ml-2 text-sm text-black font-semibold hover:underline"
          >
            Apply now
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-bold text-md">Total Rental Price</h3>
        <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
          <p>Overall price and includes rental discount</p>
          <p className="font-bold text-lg">${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default RentalSummary;
