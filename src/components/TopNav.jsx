import React from 'react';
import { FiMenu, FiSettings } from 'react-icons/fi';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const TopNav = ({ onMenuClick }) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between bg-[#232f3e] text-white px-4 py-3 shadow">
      <div className="flex items-center space-x-6">
        {/* Hamburger */}
        <FiMenu className="text-xl cursor-pointer" onClick={onMenuClick} />

        {/* Logo + Title */}
        <div
          className="flex items-center space-x-2 cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          {/* Amazon Logo */}
          <img src="/amazon-dark-logo-png-transparent.png" alt="Amazon" className="h-12" />

          {/* Text */}
          <div className="text-white text-sm font-semibold">
            
            <span className="font-light">vendor central</span>
          </div>
        </div>

        {/* Business Label */}
        <div className="bg-white text-black text-xs px-2 py-1 rounded font-medium">
          US - Sportsman Supply Inc.
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-6">
        <FiSettings className="text-lg cursor-pointer" />
        <IoIosHelpCircleOutline className="text-2xl cursor-pointer" />
        <span className="text-sm">Help</span>
      </div>
    </header>
  );
};

export default TopNav;
