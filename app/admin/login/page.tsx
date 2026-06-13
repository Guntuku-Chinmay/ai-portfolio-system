"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (
      username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      sessionStorage.setItem("admin-auth", "true");

      router.push("/admin");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-3xl">
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>

        <div className="grid gap-4">
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 rounded-xl bg-black border border-white/10"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-xl bg-black border border-white/10"
          />

          <button onClick={login} className="bg-blue-500 py-3 rounded-xl">
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
