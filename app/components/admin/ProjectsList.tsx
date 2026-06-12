"use client";

import { useEffect, useState } from "react";

const API_URL = "https://z08luhsnk8.execute-api.ap-south-1.amazonaws.com/prod";

interface Project {
  projectId: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
}

export default function ProjectsList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<any>(null);

  const loadProjects = async () => {
    const response = await fetch(`${API_URL}/projects`);
    const data = await response.json();
    setProjects(data);
  };

  const deleteProject = async (projectId: string) => {
    await fetch(`${API_URL}/projects/${projectId}`, {
      method: "DELETE",
    });

    loadProjects();
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const updateProject = async () => {
    if (!editingProject) return;

    await fetch(`${API_URL}/projects/${editingProject.projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: editingProject.title,
        problem: editingProject.problem,
        solution: editingProject.solution,
        impact: editingProject.impact,
      }),
    });

    alert("Project Updated");

    setEditingProject(null);

    loadProjects();
  };

  return (
    <>
      {editingProject && (
        <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Edit Project</h2>

          <div className="grid gap-4">
            <input
              value={editingProject.title}
              onChange={(e) =>
                setEditingProject({
                  ...editingProject,
                  title: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-black border border-white/10"
            />

            <textarea
              value={editingProject.problem}
              onChange={(e) =>
                setEditingProject({
                  ...editingProject,
                  problem: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-black border border-white/10"
            />

            <textarea
              value={editingProject.solution}
              onChange={(e) =>
                setEditingProject({
                  ...editingProject,
                  solution: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-black border border-white/10"
            />

            <textarea
              value={editingProject.impact}
              onChange={(e) =>
                setEditingProject({
                  ...editingProject,
                  impact: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-black border border-white/10"
            />

            <div className="flex gap-4">
              <button
                onClick={updateProject}
                className="bg-green-500 px-4 py-3 rounded-xl"
              >
                Save Changes
              </button>

              <button
                onClick={() => setEditingProject(null)}
                className="bg-gray-600 px-4 py-3 rounded-xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.projectId}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

            <p className="mb-2">
              <strong>Problem:</strong> {project.problem}
            </p>

            <p className="mb-2">
              <strong>Solution:</strong> {project.solution}
            </p>

            <p className="mb-4">
              <strong>Impact:</strong> {project.impact}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => setEditingProject(project)}
                className="bg-yellow-500 px-4 py-2 rounded-lg"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProject(project.projectId)}
                className="bg-red-500 px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
