'use client';
import React, { useState } from "react";
import Image from 'next/image';


const Confirmation: React.FC = () => {
  const [marketingAgreed, setMarketingAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!marketingAgreed || !termsAgreed) {
      alert("Please agree to all terms before submitting!");
      return;
    }
    alert("Rental Confirmed!");
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-6 max-w-lg mx-auto mt-8">
      <h2 className="font-bold text-lg text-black">Confirmation</h2>
      <p className="text-gray-500 mt-2 text-sm">We are getting to the end. Just a few clicks and your rental is ready!</p>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="marketing"
            checked={marketingAgreed}
            onChange={() => setMarketingAgreed(!marketingAgreed)}
            className="w-5 h-5 border rounded-md mr-3"
          />
          <label htmlFor="marketing" className="text-sm text-gray-600">
            I agree with sending marketing and newsletter emails. No spam, promised!
          </label>
        </div>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="terms"
            checked={termsAgreed}
            onChange={() => setTermsAgreed(!termsAgreed)}
            className="w-5 h-5 border rounded-md mr-3"
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree with our terms and conditions and privacy policy.
          </label>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 w-full"
          >
            Rent Now
          </button>
        </div>
        <div className="flex items-center mt-6">
          
        <Image src="/verify.png" alt="description" width={30} height={30} />
          <p className="font-semibold">All your data are safe</p>
        </div>
        <p className="text-gray-500 mt-2 text-sm">
          We are using the most advanced security to provide you the best experience ever.
        </p>
      </form>
    </div>
  );
};

export default Confirmation;
