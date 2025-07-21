"use client";

import { useState } from "react";

export default function Login() {

    const API_PATH = "https://api.4000.uz/login";
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Perform login logic here
        // For example, you can send a request to your backend API
        fetch(API_PATH, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password }),
        })
            .then((response) => {
                if (response.status === 200) {
                    window.location.href = "/verify";
                }
            })
            .catch((error) => {
                console.error("Error logging in:", error);
            });
    };

    return (
        <div>
            <div className="w-full h-full font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <h1>Login</h1>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}
