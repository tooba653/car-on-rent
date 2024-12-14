import React from 'react';
import Image from 'next/image';


interface CarCardProps {
  carName: string;
  carType: string;
  carImage: string;
  fuel: string;
  transmission: string;
  capacity: string;
  price: string;
}

const CarCard: React.FC<CarCardProps> = ({
  carName,
  carType,
  carImage,
  fuel,
  transmission,
  capacity,
  price,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 max-w-xs">
     
      <h3 className="font-bold text-lg">{carName}</h3>
      <p className="text-gray-500">{carType}</p>

     
      <img src={carImage} alt={`${carName} Image`} className="w-full h-40 object-cover mt-4 rounded-lg" />

      <div className="flex justify-between items-center mt-4">
     
        <div className="flex items-center">
         <Image src="/fuel.png" alt="description" width={30} height={30} />
          <span className="ml-2 text-sm">{fuel}</span>
        </div>

        
        <div className="flex items-center">
         <Image src="/manual.png" alt="description" width={30} height={30} />
          <span className="ml-2 text-sm">{transmission}</span>
        </div>

       
        <div className="flex items-center">
        <Image src="/people.png" alt="description" width={30} height={30} />
          <span className="ml-2 text-sm">{capacity}</span>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="font-bold text-lg">{price}</p>
          <p className="text-gray-500 text-sm">/day</p>
        </div>
        <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
