import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import TopNav from "./components/TopNav";
import VendorDashboard from "./components/VendorDashboard";
import RetailAnalyticsPage from "./components/RetailAnalyticsPage";
import InventoryPage from "./components/InventoryPage";
import ShippedRevenuePage from "./components/ShippedRevenuePage";
import CatalogPage from "./components/CatalogPage";
import MenuBar from "./components/MenuBar";
import LoginPage from "./components/LoginPage"; // You must create this component
import InvoiceTable from "./components/InvoiceTable";


// Layout for pages with TopNav & Side Menu
function AppLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <TopNav onMenuClick={() => setMenuOpen(true)} />
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setMenuOpen(false)}
          />
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
      {children}
    </div>
  );
}

// Simple authentication check for demo (uses localStorage)
function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("vc_logged_in") === "true";
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Login page always visible */}
      <Route path="/login" element={<LoginPage />} />
      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout><Outlet /></AppLayout>}>
          <Route path="/" element={<VendorDashboard />} />
          <Route path="/retail-analytics" element={<RetailAnalyticsPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/shipped-revenue" element={<ShippedRevenuePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/invoice-management" element={<InvoiceTable />} /> 
        </Route>
      </Route>
      {/* Catch-all: redirect to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
