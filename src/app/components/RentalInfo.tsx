'use client';
import React, { useState } from "react";



const RentalInfo: React.FC = () => {
  const [pickupCity, setPickupCity] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffCity, setDropoffCity] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupCity || !pickupTime || !pickupDate || !dropoffCity || !dropoffTime || !dropoffDate) {
      alert("All fields are required!");
      return;
    }
    console.log({
      pickupCity,
      pickupTime,
      pickupDate,
      dropoffCity,
      dropoffTime,
      dropoffDate,
    });
    alert("Rental Info Submitted Successfully!");
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-6 max-w-lg mx-auto mt-8">
      
      <h2 className="font-bold text-lg text-black">Rental Info</h2>
      <p className="text-gray-500 mt-2 text-sm">Please select your rental date</p>

      <form onSubmit={handleSubmit}>

        <div className="mt-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <p className="font-semibold text-black">Pick-Up</p>
          </div>

      
          <div className="mt-4">
            <label htmlFor="pickupCity" className="block text-sm font-semibold text-black">
              Location
            </label>
            <select
              id="pickupCity"
              name="pickupCity"
              className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 text-gray-500"
              value={pickupCity}
              onChange={(e) => setPickupCity(e.target.value)}
              aria-label="Select your pickup city"
            >
              <option value="" disabled>Select your city</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
          </div>

     
          <div className="mt-4">
            <label htmlFor="pickupTime" className="block text-sm font-semibold text-black">
              Time
            </label>
            <select
              id="pickupTime"
              name="pickupTime"
              className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 text-gray-500"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              aria-label="Select your pickup time"
            >
              <option value="" disabled>Select your time</option>
              <option value="08:00 AM">08:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="pickupDate" className="block text-sm font-semibold text-black">
              Date
            </label>
            <input
              id="pickupDate"
              name="pickupDate"
              type="date"
              className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 text-gray-500"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              aria-label="Select your pickup date"
            />
          </div>
        </div>

       
        <div className="mt-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <p className="font-semibold text-black">Drop-Off</p>
          </div>

          
          <div className="mt-4">
            <label htmlFor="dropoffCity" className="block text-sm font-semibold text-black">
              Location
            </label>
            <select
              id="dropoffCity"
              name="dropoffCity"
              className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 text-gray-500"
              value={dropoffCity}
              onChange={(e) => setDropoffCity(e.target.value)}
              aria-label="Select your drop-off city"
            >
              <option value="" disabled>Select your city</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
          </div>

  
          <div className="mt-4">
            <label htmlFor="dropoffTime" className="block text-sm font-semibold text-black">
              Time
            </label>
            <select
              id="dropoffTime"
              name="dropoffTime"
              className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 text-gray-500"
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
              aria-label="Select your drop-off time"
            >
              <option value="" disabled>Select your time</option>
              <option value="08:00 AM">08:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="06:00 PM">06:00 PM</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="dropoffDate" className="block text-sm font-semibold text-black">
              Date
            </label>
            <input
              id="dropoffDate"
              name="dropoffDate"
              type="date"
              className="border border-gray-300 rounded-md w-full px-4 py-2 mt-2 text-gray-500"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              aria-label="Select your drop-off date"
            />
          </div>
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

export default RentalInfo;
