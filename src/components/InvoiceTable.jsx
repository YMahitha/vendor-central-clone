import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const InvoiceTable = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Fetch and parse CSV
  useEffect(() => {
    fetch("/invoices.csv")
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => setData(results.data),
        });
      });
  }, []);

  // Filtering
  useEffect(() => {
    setFiltered(
      data.filter(
        (row) =>
          row["Invoice ID"].toLowerCase().includes(filter.toLowerCase()) ||
          row["Vendor Name"].toLowerCase().includes(filter.toLowerCase()) ||
          row["Status"].toLowerCase().includes(filter.toLowerCase()) ||
          row["PO Number"].toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [data, filter]);

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-6xl mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Invoice Management</h2>
        <input
          type="text"
          placeholder="Search Invoice, Vendor, Status..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-3 py-2 text-sm"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Invoice ID</th>
              <th className="p-2 border">Vendor Name</th>
              <th className="p-2 border">Invoice Date</th>
              <th className="p-2 border">Due Date</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">PO Number</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-2 border">{row["Invoice ID"]}</td>
                  <td className="p-2 border">{row["Vendor Name"]}</td>
                  <td className="p-2 border">{row["Invoice Date"]}</td>
                  <td className="p-2 border">{row["Due Date"]}</td>
                  <td className="p-2 border">${row["Amount"]}</td>
                  <td className="p-2 border">{row["Status"]}</td>
                  <td className="p-2 border">{row["PO Number"]}</td>
                  <td className="p-2 border">
                    <button className="text-blue-700 underline text-xs">
                      {row["Actions"] || "View"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center text-gray-400" colSpan={8}>
                  No invoices found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTable;
