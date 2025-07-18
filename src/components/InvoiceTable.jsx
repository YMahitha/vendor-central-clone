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
          transformHeader: (header) =>
            header.toLowerCase().trim().replace(/[^a-z0-9 ]/gi, ""),
          complete: (results) => setData(results.data),
        });
      });
  }, []);

  // Filtering logic
  useEffect(() => {
    const search = filter.toLowerCase();
    setFiltered(
      data.filter((row) => {
        const vendor = row["vendor"]?.toLowerCase() || "";
        const po = row["purchase order"]?.toLowerCase() || "";
        const terms = row["terms"]?.toLowerCase() || "";
        return (
          vendor.includes(search) || po.includes(search) || terms.includes(search)
        );
      })
    );
  }, [data, filter]);

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-6xl mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Invoice Table</h2>
        <input
          type="text"
          placeholder="Search Vendor, PO, Terms..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-3 py-2 text-sm"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Vendor</th>
              <th className="p-2 border">Order Date</th>
              <th className="p-2 border">Purchase Order</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Terms</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-2 border">{row["vendor"] || "-"}</td>
                  <td className="p-2 border">{row["order date"] || "-"}</td>
                  <td className="p-2 border">{row["purchase order"] || "-"}</td>
                  <td className="p-2 border">${row["amount"] || "0.00"}</td>
                  <td className="p-2 border">{row["terms"] || "-"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center text-gray-400 p-4">
                  No records found.
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
