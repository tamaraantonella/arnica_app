import React from 'react';
import img from '../../assets/giphy.gif';

export const Loader = () => {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <div className="w-52">
        <img src={img} alt="" className="w-full object-cover object-center" />
      </div>
    </div>
  );
};
