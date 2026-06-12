export default function JourneyTimeline() {
  const journey = [
    {
      year: "2023",
      title: "Started Engineering",
      description:
        "Began my journey in Computer Science and explored software development fundamentals.",
    },
    {
      year: "2024",
      title: "Cloud Computing",
      description:
        "Learned AWS services, Linux, networking and cloud-native architectures.",
    },
    {
      year: "2025",
      title: "Serverless Development",
      description:
        "Built projects using Lambda, DynamoDB, API Gateway and EventBridge.",
    },
    {
      year: "2026",
      title: "Generative AI",
      description:
        "Exploring LLMs, Prompt Engineering, RAG systems and AI-powered products.",
    },
    {
      year: "Future",
      title: "Product Leadership",
      description:
        "Building impactful AI products at the intersection of technology and business.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <div className="mb-16">
        <p className="text-blue-400 mb-2">My Journey</p>

        <h2 className="text-5xl font-bold">From Student to Product Builder</h2>
      </div>

      <div className="relative border-l border-white/10 ml-6">
        {journey.map((item, index) => (
          <div key={index} className="mb-16 ml-10 relative">
            <div className="absolute -left-[50px] top-2 w-4 h-4 rounded-full bg-blue-500" />

            <span className="text-sm text-blue-400">{item.year}</span>

            <h3 className="text-2xl font-semibold mt-2">{item.title}</h3>

            <p className="text-gray-400 mt-3">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
