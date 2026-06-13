"use client";

import { useState } from "react";

const API_URL = "https://z08luhsnk8.execute-api.ap-south-1.amazonaws.com/prod";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      alert(data.message);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-32">
      <div className="mb-16 text-center">
        <p className="text-blue-400 mb-2">Contact</p>

        <h2 className="text-5xl font-bold">Let's Build Something Amazing</h2>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="grid gap-4">
          <input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 rounded-xl bg-black border border-white/10"
          />

          <input
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded-xl bg-black border border-white/10"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 rounded-xl bg-black border border-white/10"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 py-4 rounded-xl"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
