import React from "react";

export default function RemittancePaymentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-4">Remittance payments</h1>

      {/* Alert Banners */}
      <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-900 p-4 mb-4 text-sm">
        <p>
          <strong>New Feature!</strong> From the remittances page, you can now download details regarding provisions. <br />
          Click on “Payments” → “Remittance” → “Remittance ID containing the Provision” → “Specific Provision ID” to get the report.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-900 p-4 mb-6 text-sm">
        <p>
          You are viewing information for the following vendor codes: SPT4R, SPQQ1, HON2I, I2OKY, SPTKS, SPPQ9, AECKD, ABIPD, SPPIN, APFQH, LBMU5, SPXH9, ZKUJ2, SPQB8.
        </p>
      </div>

      {/* Video & Training Block */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6 flex justify-between items-center">
        <div>
          <div className="flex gap-2 mb-1">
            <span className="bg-blue-800 text-white text-xs font-bold px-2 py-0.5 rounded">TRAINING</span>
            <span className="bg-green-600 text-white text-xs font-bold px-2 py-0.5 rounded">NEW</span>
          </div>
          <div className="font-semibold text-blue-800">Payment Remittance</div>
          <div className="text-sm text-gray-600">E-LEARNING</div>
          <div className="text-xs text-gray-500 mt-1">More training: <u>Provisions against your payments</u></div>
        </div>
        <button className="bg-white border border-gray-400 px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-200">
          ▶ Watch
        </button>
      </div>

      {/* Filters */}
      <div className="mb-4">
        <div className="flex gap-4 flex-wrap mb-2 items-end">
          <div className="flex flex-col text-sm">
            <label className="mb-1 font-medium">Search by</label>
            <select className="border px-3 py-2 rounded w-52 text-sm">
              <option>Payment Date Range</option>
            </select>
          </div>

          <select className="border px-3 py-2 rounded w-52 text-sm mt-5">
            <option>Last 15 days</option>
            <option>Last 30 days</option>
          </select>

          <div className="flex flex-col text-sm">
            <label className="mb-1">From</label>
            <input type="date" className="border px-3 py-2 rounded text-sm" defaultValue="2025-06-28" />
          </div>

          <div className="flex flex-col text-sm">
            <label className="mb-1">To</label>
            <input type="date" className="border px-3 py-2 rounded text-sm" defaultValue="2025-07-13" />
          </div>

          <label className="flex items-center text-sm mt-6 ml-2 gap-2">
            <input type="checkbox" className="accent-blue-600" />
            Year over Year
          </label>

          <button className="bg-gray-700 text-white px-5 py-2 rounded text-sm font-semibold mt-5">
            Refine Results
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2 border font-medium"> </th>
              <th className="p-2 border font-medium">Payment Number</th>
              <th className="p-2 border font-medium">Payment Date</th>
              <th className="p-2 border font-medium">Payment amount</th>
              <th className="p-2 border font-medium">Payment status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { number: "000000000", date: "6/30/2025", amount: "$1150.33", status: "Successful" },
              { number: "300002450", date: "7/3/2025", amount: "$211.34", status: "Successful" },
              { number: "300002949", date: "7/11/2025", amount: "$310.33", status: "Successful" },
            ].map((row, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2 border">
                  <input type="checkbox" className="accent-blue-600" />
                </td>
                <td className="p-2 border text-blue-600 hover:underline cursor-pointer">{row.number}</td>
                <td className="p-2 border">{row.date}</td>
                <td className="p-2 border">{row.amount}</td>
                <td className="p-2 border">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-600 mt-4">
        Report Updated: Jul 10, 2025 | Viewing Dates: Jul 1 - Jul 10, 2025
      </div>
    </div>
  );
}
