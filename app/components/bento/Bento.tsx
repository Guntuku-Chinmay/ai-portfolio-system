import SectionWrapper from "../common/SectionWrapper";

export default function Bento() {
  return (
    <SectionWrapper>
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-16">
          <p className="text-blue-400 mb-2">Current Focus</p>

          <h2 className="text-5xl font-bold">What I'm Building</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
            <h3 className="text-2xl font-semibold mb-4">Product Thinking</h3>

            <p className="text-gray-400">
              Focused on understanding user problems, prioritizing impactful
              solutions, and translating ideas into actionable product roadmaps.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-4">Community Leadership</h3>

            <p className="text-gray-400">
              Led technical initiatives and engagement programs for 370+
              students as GeeksForGeeks Campus Body Lead.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-4">AI & Emerging Tech</h3>

            <p className="text-gray-400">
              Exploring Generative AI, RAG systems, AI agents, and intelligent
              automation workflows.
            </p>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
