// src/components/PageNavBar.jsx
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";

const PageNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Home icon links:
  // On retail-analytics page, go to /
  // On all other pages, go to /retail-analytics
  const isRetailAnalytics = location.pathname === "/retail-analytics";
  const handleHomeClick = () => {
    navigate(isRetailAnalytics ? "/" : "/retail-analytics");
  };

  return (
    <nav className="flex items-center gap-8 border-b px-6 py-4 bg-white">
      <div
        className="flex items-center gap-2 text-teal-700 font-bold text-lg cursor-pointer"
        onClick={handleHomeClick}
      >
        <AiOutlineHome className="text-xl" />
        <span>Home</span>
      </div>
      <div className={`font-semibold text-base pb-1 cursor-pointer ${location.pathname === "/shipped-revenue" ? "text-black border-b-2 border-teal-700" : "text-gray-700 hover:text-teal-700"}`} onClick={() => navigate("/shipped-revenue")}>
        Sales
      </div>
      <div className={`font-semibold text-base pb-1 cursor-pointer ${location.pathname === "/inventory" ? "text-black border-b-2 border-teal-700" : "text-gray-700 hover:text-teal-700"}`} onClick={() => navigate("/inventory")}>
        Inventory
      </div>
      <div className={`font-semibold text-base pb-1 cursor-pointer ${location.pathname === "/catalog" ? "text-black border-b-2 border-teal-700" : "text-gray-700 hover:text-teal-700"}`} onClick={() => navigate("/catalog")}>
        Catalog
      </div>
    </nav>
  );
};

export default PageNavBar;
