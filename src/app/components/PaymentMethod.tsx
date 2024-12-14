'use client';
import { useState } from 'react';
import Image from 'next/image';

const PaymentMethod = () => {
  
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [isVisaSelected, setIsVisaSelected] = useState(false);
  const [isPaypalSelected, setIsPaypalSelected] = useState(false);
  const [isBitcoinSelected, setIsBitcoinSelected] = useState(false);

  
  const handleCardHolderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardHolder(event.target.value);
  };

  const handleExpirationDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate(event.target.value);
  };

  const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(event.target.value);
  };

  
  const handleVisaSelect = () => setIsVisaSelected(!isVisaSelected);
  const handlePaypalSelect = () => setIsPaypalSelected(!isPaypalSelected);
  const handleBitcoinSelect = () => setIsBitcoinSelected(!isBitcoinSelected);

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <h2 className="font-bold text-2xl">Payment Method</h2>
      <p className="text-gray-500">Please enter your payment method</p>

      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <div
            className={`w-6 h-6 border rounded-full flex items-center justify-center cursor-pointer ${isVisaSelected ? 'bg-blue-500' : ''}`}
            onClick={handleVisaSelect}
          >
            {isVisaSelected && <div className="w-4 h-4 bg-white rounded-full"></div>}
          </div>
          <div className="font-bold text-black-500 flex items-center space-x-2">
            <Image src="/visa.png" alt="VISA" width={50} height={50} />
            <span>CreditCard</span>
          </div>
        </div>

        <div className="border p-2 text-gray-500">
          <input
            type="text"
            value={cardHolder}
            onChange={handleCardHolderChange}
            placeholder="Card Holder"
            className="w-full"
          />
        </div>

     
        <div className="border p-2 text-gray-500">
          <input
            type="text"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            placeholder="DD/MM/YY"
            className="w-full"
          />
        </div>

        <div className="border p-2 text-gray-500">
          <input
            type="text"
            value={cvc}
            onChange={handleCvcChange}
            placeholder="CVC"
            className="w-full"
          />
        </div>
      </div>

      
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <div
            className={`w-6 h-6 border rounded-full flex items-center justify-center cursor-pointer ${isPaypalSelected ? 'bg-sky-500' : ''}`}
            onClick={handlePaypalSelect}
          >
            {isPaypalSelected && <div className="w-4 h-4 bg-white rounded-full"></div>}
          </div>
          <div className="font-bold text-sky-500 flex items-center space-x-2">
            <Image src="/paypal.png" alt="PayPal" width={24} height={24} />
            <span>PayPal</span>
          </div>
        </div>
      </div>

      
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <div
            className={`w-6 h-6 border rounded-full flex items-center justify-center cursor-pointer ${isBitcoinSelected ? 'bg-gray-700' : ''}`}
            onClick={handleBitcoinSelect}
          >
            {isBitcoinSelected && <div className="w-4 h-4 bg-white rounded-full"></div>}
          </div>
          <div className="font-bold text-gray-700 flex items-center space-x-2">
            <Image src="/bitcoin.png" alt="Bitcoin" width={24} height={24} />
            <span>Bitcoin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
