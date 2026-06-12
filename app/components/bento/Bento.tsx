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
            <h3 className="text-2xl font-semibold mb-4">AI Interview Coach</h3>

            <p className="text-gray-400">
              Helping students practice interviews using Generative AI and
              feedback loops.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-4">Product Management</h3>

            <p className="text-gray-400">
              User research, roadmaps, prioritization and metrics.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-4">AWS</h3>

            <p className="text-gray-400">
              Lambda, DynamoDB, API Gateway and Serverless.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-4">Currently Reading</h3>

            <p className="text-gray-400">
              Inspired by Marty Cagan's product thinking concepts.
            </p>
          </div>

          <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition">
            <h3 className="text-2xl font-semibold mb-4">
              Exploring Multi-Agent AI
            </h3>

            <p className="text-gray-400">
              Building intelligent systems where multiple AI agents collaborate
              to solve complex tasks.
            </p>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
