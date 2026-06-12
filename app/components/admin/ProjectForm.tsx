"use client";

import { useState } from "react";

export default function ProjectForm() {
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [impact, setImpact] = useState("");

  const submitProject = async () => {
    try {
      const response = await fetch(
        "https://z08luhsnk8.execute-api.ap-south-1.amazonaws.com/prod/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            problem,
            solution,
            impact,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Project Added Successfully!");

        setTitle("");
        setProblem("");
        setSolution("");
        setImpact("");

        window.location.reload();
      } else {
        alert(data.message || "Failed to add project");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding project");
    }
  };

  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
      <h2 className="text-2xl font-bold mb-6">Add Project</h2>

      <div className="grid gap-4">
        <input
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 rounded-xl bg-black border border-white/10"
        />

        <textarea
          placeholder="Problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className="p-3 rounded-xl bg-black border border-white/10"
        />

        <textarea
          placeholder="Solution"
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          className="p-3 rounded-xl bg-black border border-white/10"
        />

        <textarea
          placeholder="Impact"
          value={impact}
          onChange={(e) => setImpact(e.target.value)}
          className="p-3 rounded-xl bg-black border border-white/10"
        />

        <button
          onClick={submitProject}
          className="bg-blue-500 hover:bg-blue-600 rounded-xl py-3 text-white font-medium"
        >
          Add Project
        </button>
      </div>
    </div>
  );
}
