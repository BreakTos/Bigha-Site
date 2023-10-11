import {db} from './firebase';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { get, ref } from 'firebase/database';
import './Microfinances.css';

const CropInfo = () => {
  const [cropData, setCropData] = useState([]);

  useEffect(() => {
    // Replace 'db' with your actual Firebase Realtime Database instance
    const mfSellerRef = ref(db, 'MFSellers');

    const fetchData = async () => {
      try {
        const snapshot = await get(mfSellerRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const cropInfo = [];

          for (const mobileNumber in data) {
            for (const uniqueNode in data[mobileNumber]) {
              const cropNode = data[mobileNumber][uniqueNode];
              
              const cropPrice = cropNode.price;
              const cropWeight = cropNode.weight;
              const cropName = cropNode.crop;

              const farmerInfo = {
                mobileNumber,
                cropPrice,
                cropWeight,
                cropName,
              };

              cropInfo.push(farmerInfo);
            }
          }

          setCropData(cropInfo);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Clean up the event listener when the component unmounts
    return () => {
      // Handle any cleanup here, if necessary
    };
  }, []);

  return (
    <div className='page'>
      <div>
        <h1>Crop Information</h1>
        <ul>
          {cropData.map((crop, index) => (
            <li key={index}>
              <p>Mobile Number: {crop.mobileNumber}</p>
              <p>Crop Price: {crop.cropPrice}</p>
              <p>Crop Weight: {crop.cropWeight}</p>
              <p>Crop Name: {crop.cropName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function Microfinances() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <CropInfo />
    </div>
  );
}

export default Microfinances;
