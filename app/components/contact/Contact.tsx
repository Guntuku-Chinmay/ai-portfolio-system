export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <p className="text-blue-400 mb-2">Contact</p>

        <h2 className="text-5xl font-bold">
          {" "}
          Let's Build Something Meaningful
        </h2>

        <p className="text-gray-400 mt-6">
          Interested in AI, Product Management, Cloud Engineering or
          collaboration? Let's connect.
        </p>
      </div>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none"
        />

        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-xl"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
