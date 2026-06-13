"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ProjectForm from "../components/admin/ProjectForm";
import ProjectsList from "../components/admin/ProjectsList";
import MessagesList from "../components/admin/MessagesList";

export default function AdminPage() {
  const router = useRouter();

  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");

    if (auth === "true") {
      setAuthorized(true);
    } else {
      router.push("/admin/login");
    }
  }, [router]);

  if (!authorized) {
    return null;
  }

  return (
    <main className="min-h-screen p-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-5xl font-bold">Portfolio Admin Dashboard</h1>

        <button
          onClick={() => {
            localStorage.removeItem("admin-auth");
            router.push("/admin/login");
          }}
          className="bg-red-500 px-5 py-2 rounded-xl"
        >
          Logout
        </button>
      </div>

      <ProjectForm />

      <div className="mt-10">
        <ProjectsList />
      </div>

      <div className="mt-10">
        <MessagesList />
      </div>
    </main>
  );
}
