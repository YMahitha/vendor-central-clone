// src/components/TabBar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const tabs = [
  { label: "Home", path: "/retail-analytics" },
  { label: "Sales", path: "/shipped-revenue" },
  { label: "Inventory", path: "/inventory" },
  { label: "Catalog", path: "/catalog" },
];

export default function TabBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex items-center gap-8 bg-white border-b px-8 py-3">
      {tabs.map((tab) => (
        <div
          key={tab.path}
          className={`
            font-semibold text-base cursor-pointer pb-1
            ${location.pathname === tab.path
              ? "text-teal-700 border-b-2 border-teal-700"
              : "text-gray-700 hover:text-teal-700"}
          `}
          onClick={() => navigate(tab.path)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}
