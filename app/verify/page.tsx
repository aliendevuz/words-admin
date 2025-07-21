"use client";

import { useState } from "react";

export default function Verify() {
  const API_PATH =
    "https://api.4000.uz/verify";

  const [pinCode, setPinCode] = useState("");

  const handleVerify = () => {
    fetch(API_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ pin: pinCode }),
    })
      .then((response) => {
        if (response.status === 200) {
          setTimeout(() => (window.location.href = "/dashboard"), 10000);
        } else {
          console.warn("Login failed:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <div>
      <h1>Verify</h1>
      <p>Enter pin code that bot send to you</p>
      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Enter pin code"
          onChange={(e) => setPinCode(e.target.value)}
        />
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={handleVerify}
        >
          Verify
        </button>
      </div>
    </div>
  );
}
