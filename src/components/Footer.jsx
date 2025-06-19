import React from 'react';
import logo from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a19] py-12 mt-0">
      <div className="section-container pt-0 flex flex-col items-start text-left">
        <div className="flex items-center mb-4">
          <img src={logo} alt="ENMEDIA Logo" className="h-10 mr-3 invert" />
          <span className="text-white text-3xl font-bold tracking-widest"></span>
        </div>
        <p className="text-gray-200 text-lg">
          Copyrights 2024. <span className="font-bold">테스트</span> All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;