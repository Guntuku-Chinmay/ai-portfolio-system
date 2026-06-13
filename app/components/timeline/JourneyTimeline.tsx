export default function JourneyTimeline() {
  const journey = [
    {
      year: "2023",
      title: "Started Engineering",
      description:
        "Started B.Tech at Aditya Institute of Technology and Management",
    },
    {
      year: "2024",
      title: "Community Leadership",
      description:
        "Became GeeksForGeeks Campus Body Lead and began organizing technical initiatives.",
    },
    {
      year: "2025",
      title: "Product Thinking & Competitions",
      description:
        "Secured Top 8 among 700+ teams at Coherence 7.0, IIM Kashipur, developing growth and retention strategies for a real-world business case.",
    },
    {
      year: "2025",
      title: "National Recognition",
      description:
        "Achieved Top 5 among 245+ teams at Xcelerate, IIIT Raipur, solving product and business challenges through structured analysis and prioritization.",
    },
    {
      year: "2025",
      title: "Outreach Coordinator",
      description:
        "Served as Outreach Coordinator for Avishkaar Season 3, collaborating with multiple teams to drive registrations, engagement, and event visibility.",
    },
    {
      year: "2026",
      title: "Cloud & AI Builder",
      description:
        "Designed and deployed cloud-native applications using AWS, including a Portfolio Management System, Serverless Job Portal, and automation workflows.",
    },
    {
      year: "2026",
      title: "Current Focus",
      description:
        "Exploring Product Management, Generative AI, RAG architectures, and scalable serverless systems while building user-centric digital products.",
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
