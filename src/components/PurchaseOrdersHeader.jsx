// src/components/PurchaseOrdersHeader.jsx
import React, { useRef, useState, useEffect } from "react";

// Three dots icon
const DotsVerticalIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" className="ml-2 cursor-pointer">
    <circle cx="14" cy="8" r="1.5" />
    <circle cx="14" cy="14" r="1.5" />
    <circle cx="14" cy="20" r="1.5" />
  </svg>
);

// Feedback popover
const FeedbackPopover = ({ open, setOpen, anchorRef }) => {
  useEffect(() => {
    function handleClick(e) {
      if (anchorRef.current && !anchorRef.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, setOpen, anchorRef]);

  if (!open) return null;
  return (
    <div className="absolute right-0 mt-2 w-56 rounded shadow-lg bg-white border z-50">
      <div className="flex items-center px-4 py-3">
        <svg width="22" height="22" fill="none" stroke="#0e7490" className="mr-2">
          <rect width="18" height="14" x="2" y="4" rx="2" fill="#e0f2fe"/>
          <rect width="14" height="2" x="5" y="12" rx="1" fill="#bae6fd"/>
        </svg>
        <span className="font-medium text-gray-800">Leave feedback</span>
      </div>
    </div>
  );
};

const PurchaseOrdersHeader = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const dotsRef = useRef(null);

  return (
    <div className="flex items-center justify-between px-4 py-3 relative">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-lg">Purchase Orders</span>
        <span className="ml-1 text-gray-400" title="Info">ⓘ</span>
      </div>
      <div className="relative" ref={dotsRef}>
        <button onClick={() => setPopoverOpen((prev) => !prev)}>
          <DotsVerticalIcon />
        </button>
        <FeedbackPopover open={popoverOpen} setOpen={setPopoverOpen} anchorRef={dotsRef} />
      </div>
    </div>
  );
};

export default PurchaseOrdersHeader;
