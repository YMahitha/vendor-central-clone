// src/components/VendorDashboard.js
import React, { useState } from "react";
import TopNav from "./TopNav";
import InfoBanner from "./InfoBanner";
import Sidebar from "./Sidebar";
import BusinessSnapshot from "./BusinessSnapshot";
import PurchaseOrders from "./PurchaseOrders";
import Recommendations from "./Recommendations";
import MenuBar from "./MenuBar";

const VendorDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      

      {/* InfoBanner only here, not global */}
      <InfoBanner />

      {/* Menu Drawer */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="fixed top-0 left-0 h-full w-[320px] bg-white shadow-lg z-50 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <MenuBar />
          </div>
        </>
      )}

      {/* Main layout */}
      <main className="flex gap-6 p-6">
        <aside className="w-[340px] flex-shrink-0">
          <Sidebar />
        </aside>
        <section className="flex-1 space-y-6">
          <BusinessSnapshot />
          <PurchaseOrders />
          <Recommendations />
        </section>
      </main>
    </div>
  );
};

export default VendorDashboard;
