'use client';
import React, { useState } from 'react';



const BillingInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    city: '',
  });

  const [error, setError] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!formData.name || !formData.address || !formData.phone || !formData.city) {
      setError('All fields are required.');
      return;
    }
    setError('');

    console.log('Billing Info Submitted:', formData);
    alert('Billing Info Submitted Successfully!');
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-6 max-w-lg mx-auto mt-8">
      
      <h2 className="font-bold text-lg text-black">Billing Info</h2>
      <p className="text-gray-500 mt-2 text-sm">Please enter your Billing info</p>
      {error && <p className="text-red-500 mt-4">{error}</p>}

 
      <form onSubmit={handleSubmit}>
       
        <div className="mt-6">
          <label htmlFor="name" className="block font-semibold text-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 text-gray-500"
          />
        </div>

        
        <div className="mt-4">
          <label htmlFor="address" className="block font-semibold text-black">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 text-gray-500"
          />
        </div>

   
        <div className="mt-4">
          <label htmlFor="phone" className="block font-semibold text-black">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 text-gray-500"
          />
        </div>

   
        <div className="mt-4">
          <label htmlFor="city" className="block font-semibold text-black">
            Town/City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Town/City"
            className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 text-gray-500"
          />
        </div>

        
        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingInfo;
