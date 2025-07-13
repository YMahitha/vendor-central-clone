import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const menuItems = [
  {
    label: "Orders",
    subItems: [
      "Purchase Orders",
      "Direct Fulfillment Orders",
      "Purchase Order Forecasts",
      "Supply Chain Programs",
    ],
  },
  {
    label: "Items",
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
    label: "Merchandising",
    subItems: ["Manage Your Experiments", "Business Discounts"],
  },
  {
    label: "Growth",
    subItems: [
      "Add Prime to your site",
      "Sustainability Solutions Hub",
      "Multi-Channel Fulfillment (MCF)",
      "Direct Fulfillment",
      "Growth Opportunities",
    ],
  },
  {
    label: "Reports",
    subItems: [
      "Retail Analytics",
      "Brand Analytics",
      "Voice of the Customer",
      "Product Prep and Packaging",
      "Concession Hub",
    ],
  },
  {
    label: "Payments",
    subItems: [
      { label: "Invoice", path: "/invoice-management" },
      { label: "Remittance Payments", path: "/remittance-payments" },
    ],
  },
  {
    label: "Learn",
    subItems: ["Learning Hub", "Webinars"],
  },
];

const MenuBar = ({ onLinkClick }) => {

  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() => setHovered(item.label)}
            onMouseLeave={() => setHovered(null)}
          >
            <button
              className="flex justify-between items-center w-full text-left text-base font-medium text-gray-800 hover:text-blue-600 py-2 px-2 rounded"
              tabIndex={0}
              type="button"
            >
              {item.label}
              <FaChevronRight className="ml-2" />
            </button>

            {hovered === item.label && item.subItems && (
              <ul className="absolute top-0 left-full ml-1 bg-white border shadow-xl rounded min-w-[260px] z-30">
                {item.subItems.map((sub, idx) =>
                  typeof sub === "string" ? (
                    <li
                      key={idx}
                      className="px-6 py-3 text-base text-gray-800 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                    >
                      {sub}
                    </li>
                  ) : (
                    <li key={idx}>
                      <Link
                        to={sub.path}
                        onClick={onLinkClick}
                        className="block px-6 py-3 text-base text-gray-800 hover:bg-gray-100 whitespace-nowrap"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
