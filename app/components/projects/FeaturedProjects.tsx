"use client";

import { useEffect, useState } from "react";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://z08luhsnk8.execute-api.ap-south-1.amazonaws.com/prod/projects"
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="mb-16">
        <p className="text-blue-400 mb-2">Selected Work</p>

        <h2 className="text-5xl font-bold">Featured Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.projectId}
            className="bg-white/5 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

            <p className="text-gray-400 mb-4">{project.problem}</p>

            <p className="text-green-400">{project.impact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
