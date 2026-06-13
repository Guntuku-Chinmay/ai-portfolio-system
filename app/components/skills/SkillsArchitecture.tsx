export default function SkillsArchitecture() {
  const skillGroups = [
    {
      title: "Product Thinking",
      skills: [
        "Product Strategy",
        "Roadmapping",
        "User Stories",
        "Market Research",
        "Prioritization",
      ],
    },
    {
      title: "Generative AI",
      skills: [
        "Prompt Engineering",
        "LLMs",
        "RAG",
        "AI Agents",
        "Vector Databases",
      ],
    },
    {
      title: "Cloud Engineering",
      skills: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront"],
    },
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-32">
      <div className="mb-16">
        <p className="text-blue-400 mb-2">Capabilities</p>

        <h2 className="text-5xl font-bold">Skills & Expertise</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
          >
            <h3 className="text-2xl font-semibold mb-6">{group.title}</h3>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
