export default function CurrentlyExploring() {
  const items = [
    {
      title: "Building",
      value: "AI Interview Coach",
    },
    {
      title: "Learning",
      value: "Product Analytics & Metrics",
    },
    {
      title: "Reading",
      value: "Inspired by Marty Cagan",
    },
    {
      title: "Exploring",
      value: "Multi-Agent AI Systems",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="mb-16">
        <p className="text-blue-400 mb-2">Right Now</p>

        <h2 className="text-5xl font-bold">Currently Exploring</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
          >
            <p className="text-blue-400 text-sm mb-4">{item.title}</p>

            <h3 className="text-xl font-semibold">{item.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
