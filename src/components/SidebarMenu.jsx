import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function SidebarMenu({ onClose }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  const menuItems = [
    {
      title: "Orders",
      subItems: [
        "Purchase Orders",
        "Direct Fulfillment Orders",
        "Purchase Order Forecasts",
        "Supply Chain Programs",
      ],
    },
    {
      title: "Items",
      subItems: [
        "Catalog",
        "Improve Listing Quality",
        "Add Products",
        "Bulk product submissions",
        "Upload Images",
        "Upload and Manage Videos",
        "Amazon Packaging Certification",
        "Manage case packs",
        "Product Certificates",
        "Manage Product Compliance",
        "Manage catalog feeds",
      ],
    },
    {
      title: "Merchandising",
      subItems: ["Manage Your Experiments", "Business Discounts"],
    },
    {
      title: "Growth",
      subItems: [
        "Add Prime to your site",
        "Sustainability Solutions Hub",
        "Multi-Channel Fulfillment (MCF)",
        "Direct Fulfillment",
        "Growth Opportunities",
      ],
    },
    {
      title: "Reports",
      subItems: [
        "Retail Analytics",
        "Brand Analytics",
        "Voice of the Customer",
        "Product Prep and Packaging",
        "Concession Hub",
      ],
    },
    // Removed Learn from here
  ];

  const learnMenu = {
    title: "Learn",
    subItems: ["Learning Hub", "Webinars"],
  };

  return (
    <div className="fixed top-0 left-0 w-72 h-full bg-white z-50 shadow-lg overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <span className="font-bold text-lg">Menu</span>
        <button onClick={onClose} className="text-2xl font-semibold">
          ×
        </button>
      </div>

      {/* Main Menus */}
      <div className="p-4 font-medium text-gray-900 space-y-2">
        {menuItems.map(({ title, subItems }) => (
          <div key={title}>
            <button
              className="w-full flex items-center justify-between text-left px-2 py-2 rounded hover:text-blue-700"
              onClick={() => toggleMenu(title)}
            >
              <span>{title}</span>
              {openMenu === title ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {openMenu === title && (
              <div className="pl-4 space-y-1 text-sm text-gray-700">
                {subItems.map((item, idx) => (
                  <div key={idx} className="hover:text-teal-700 cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Payments Section */}
        <div>
          <button
            className="w-full flex items-center justify-between text-left px-2 py-2 rounded hover:text-blue-700"
            onClick={() => toggleMenu("Payments")}
          >
            <span>Payments</span>
            {openMenu === "Payments" ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          {openMenu === "Payments" && (
            <div className="pl-4 space-y-1 text-sm">
              <Link
                to="/invoice-management"
                className="block text-grey-700 hover:underline"
              >
                Invoices
              </Link>
              <Link
                to="/remittance-payments"
                className="block text-grey-700 hover:underline"
              >
                Remittances
              </Link>
            </div>
          )}
        </div>

        {/* Learn Section at the bottom */}
        <div>
          <button
            className="w-full flex items-center justify-between text-left px-2 py-2 rounded hover:text-blue-700"
            onClick={() => toggleMenu(learnMenu.title)}
          >
            <span>{learnMenu.title}</span>
            {openMenu === learnMenu.title ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          {openMenu === learnMenu.title && (
            <div className="pl-4 space-y-1 text-sm text-gray-700">
              {learnMenu.subItems.map((item, idx) => (
                <div key={idx} className="hover:text-teal-700 cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
