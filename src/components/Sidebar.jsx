// src/components/Sidebar.jsx
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 w-full">
      {/* Actions */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm max-w-[420px]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg text-gray-900">Actions</span>
            <AiOutlineInfoCircle className="text-gray-400 text-base" />
          </div>
          <span className="bg-blue-100 text-blue-700 rounded-full text-xs font-bold px-3 py-1">
            2
          </span>
        </div>

        {/* Manage Case Log */}
        <div className="flex items-center justify-between bg-gray-50 rounded-xl border border-gray-200 px-4 py-3 mb-3">
          <div>
            <div className="font-semibold text-base text-gray-800">Manage case log</div>
            <div className="text-xs text-gray-600 mt-0.5">Review support cases</div>
          </div>
          <BsThreeDotsVertical className="text-gray-400 text-lg" />
        </div>

        {/* Manage Invoices (IN-APP LINK) */}
        <div
          className="flex items-center justify-between bg-gray-50 rounded-xl border border-gray-200 px-4 py-3 hover:bg-blue-50 transition cursor-pointer"
          style={{ textDecoration: "none" }}
          onClick={() => navigate("/invoice-management")}
        >
          <div>
            <div className="font-semibold text-base text-teal-800">
              Manage your invoices
            </div>
            <div className="text-xs text-gray-600 mt-0.5">
              Submit an invoice to get paid
            </div>
          </div>
          <BsThreeDotsVertical className="text-gray-400 text-lg" />
        </div>
      </div>

      {/* Communications */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm max-w-[420px]">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold text-lg text-gray-900">Communications</span>
          <AiOutlineInfoCircle className="text-gray-400 text-base" />
        </div>
        <h3 className="font-semibold text-base text-gray-800 mb-2">News</h3>
        <ul className="space-y-3 text-sm">
          <li>
            <span className="text-blue-900 font-medium">
              Battery compliance update for vendor-fulfilled product listings{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">Read more &gt;</span>
            </span>
            <div className="text-xs text-gray-500 mt-0.5">Jun 26, 2025</div>
          </li>
          <li>
            <span className="text-blue-900 font-medium">
              Ensure compliance documentation comes from compliant labs{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">Read more &gt;</span>
            </span>
            <div className="text-xs text-gray-500 mt-0.5">Jun 24, 2025</div>
          </li>
          <li>
            <span className="text-blue-900 font-medium">
              Add new standalone ASINs to variation families{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">Read more &gt;</span>
            </span>
            <div className="text-xs text-gray-500 mt-0.5">Jun 24, 2025</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
