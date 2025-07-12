import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, MoreVertical, MessageSquare } from 'lucide-react';

export default function PurchaseOrders() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const moreBtnRef = useRef(null);
  const popoverRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        moreBtnRef.current &&
        !moreBtnRef.current.contains(event.target)
      ) {
        setFeedbackOpen(false);
      }
    }
    if (feedbackOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [feedbackOpen]);

  const rows = [
    {
      status: 'Unconfirmed POs',
      note: 'You have new purchase orders to confirm',
      count: 0,
      action: 'No action needed',
    },
    {
      status: 'Confirmed POs',
      note: 'Timely request transportation or FC appointment to avoid chargeback',
      count: 0,
      action: 'No action needed',
    },
    {
      status: 'Mismatched POs and ASN quantities',
      count: 0,
      action: 'No action needed',
    },
    {
      status: 'Recently Modified POs',
      count: 0,
      action: 'No action needed',
    },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 pt-4 relative">
        <div className="flex items-center gap-1 text-base font-semibold text-gray-800">
          Purchase Orders
          <span className="text-sm text-gray-500 ml-1">ⓘ</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            ref={moreBtnRef}
            className="rounded-full hover:bg-gray-100 p-1"
            onClick={() => setFeedbackOpen((v) => !v)}
          >
            <MoreVertical size={20} className="text-gray-600" />
          </button>
          <ChevronUp size={18} className="text-gray-600" />
          {/* Popover */}
          {feedbackOpen && (
            <div
              ref={popoverRef}
              className="absolute right-0 top-9 z-30 bg-white border shadow-lg rounded min-w-[190px] p-2"
            >
              <button className="flex items-center gap-2 px-2 py-1 w-full text-gray-700 hover:bg-gray-50 rounded text-sm">
                <MessageSquare size={18} /> Leave feedback
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="text-sm text-gray-500 px-4 pt-1 pb-2">
        Last updated: 9:07 PM GMT+5:30
      </div>

      <div className="grid grid-cols-3 bg-gray-50 text-sm text-gray-500 px-4 py-2 border-t border-b">
        <div className="font-medium">PO Status</div>
        <div className="font-medium">Applicable POs</div>
        <div className="font-medium">Actions</div>
      </div>

      <div className="text-sm">
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-3 px-4 py-2 border-b text-gray-800 items-start"
          >
            <div>
              <p className="font-medium leading-tight">{row.status}</p>
              {row.note && (
                <p className="text-gray-500 text-xs leading-snug mt-0.5">
                  {row.note}
                </p>
              )}
            </div>
            <div className="pt-1">{row.count}</div>
            <div className="pt-1 text-gray-700">{row.action}</div>
          </div>
        ))}
        <div className="flex justify-end px-4 py-3">
          <button className="border border-teal-700 text-teal-700 text-sm px-3 py-1.5 rounded hover:bg-teal-50">
            Go to Manage POs
          </button>
        </div>
      </div>
    </div>
  );
}
