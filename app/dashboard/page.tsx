"use client";

import { useState } from "react";

export default function Dashboard() {

    interface User {
        id: string;
        name: string;
    }

    const API_PATH = "https://api.admin.4000.uz/get_users";

    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        const response = await fetch(API_PATH, {
            method: "GET",
            credentials: "include",
        });
        const data = await response.json();
        console.log(data);
        setUsers(data);
        // return data;
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>This is the dashboard page.</p>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <button onClick={fetchUsers}>Fetch Users</button>
        </div>
    );
}