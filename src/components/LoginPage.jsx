// src/components/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DUMMY_EMAIL = "tsiegmund@harvestsports.com";
const DUMMY_PASSWORD = "password123"; // Or whatever dummy password you want

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      localStorage.setItem("vc_logged_in", "true");
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <form
        className="bg-white p-8 rounded shadow max-w-sm w-full space-y-4"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Vendor Central Login</h2>
        <input
          className="border p-2 rounded w-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="border p-2 rounded w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button
          className="w-full bg-[#232f3e] text-white py-2 rounded font-semibold"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
