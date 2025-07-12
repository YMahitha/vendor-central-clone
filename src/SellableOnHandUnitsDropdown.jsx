import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChevronDownIcon = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-4 w-4 ml-1 transition-transform ${open ? "rotate-180" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const SellableOnHandUnitsDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        className="flex items-center text-base font-semibold text-gray-900 focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        On Hand Units
        <ChevronDownIcon open={open} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-96 rounded-xl border border-teal-200 shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
          <div className="p-5">
            <div className="font-bold text-gray-800 text-lg flex items-center mb-1">
              Sellable On Hand Units
              <span className="ml-2 text-gray-400" title="What is this?">ⓘ</span>
              <span className="ml-auto cursor-pointer text-gray-500">⋮</span>
            </div>
            <div className="text-gray-700 mb-4 text-sm">
              July 1, 2025 - July 10, 2025
            </div>
            <button
              className="w-full px-4 py-2 text-base bg-gray-100 hover:bg-gray-200 rounded font-medium text-gray-800 transition"
              onClick={() => navigate("/inventory")}
            >
              Go to Sellable On Hand Units
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellableOnHandUnitsDropdown;
