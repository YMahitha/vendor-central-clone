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

const ShippedRevenueDropdown = () => {
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
        className="flex items-center text-sm text-gray-700 font-semibold focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
      >
        Shipped Revenue
        <ChevronDownIcon open={open} />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
          <div className="p-4">
            <div className="font-bold text-gray-800 text-base flex items-center">
              Shipped Revenue
              <span className="ml-2 text-gray-400" title="What is this?">ⓘ</span>
              <span
                className="ml-auto cursor-pointer text-gray-500"
                onClick={() => setOpen(false)}
              >
                ⋮
              </span>
            </div>
            <div className="text-gray-700 mt-2 text-sm">
              July 1, 2025 - July 9, 2025
            </div>
            <button
              className="mt-4 w-full px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded font-medium text-gray-800 transition"
              onClick={() => {
                setOpen(false);
                navigate("/shipped-revenue");
              }}
            >
              Go to Shipped Revenue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShippedRevenueDropdown;
