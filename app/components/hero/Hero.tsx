"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-400 mb-4"
          >
            Aspiring Product Manager • GenAI Builder
          </motion.p>

          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Hi, I'm Chinmay
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Aspiring Product Manager & Gen-AI Builder
            </span>
          </motion.h1>

          <p className="text-gray-400 mt-6 text-lg">
            B.Tech student passionate about Product Strategy, Generative AI, and
            Cloud-Native Applications. Building user-centric products that solve
            real-world problems.
          </p>

          <TypeAnimation
            sequence={[
              "370+ Students Impacted",
              2000,
              "Top 8 / 700+ Teams - IIM Kashipur",
              2000,
              "Top 5 / 245+ Teams - IIIT Raipur",
              2000,
              "3+ Production AWS Projects",
              2000,
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
            className="mt-4 text-xl font-medium text-purple-400"
          />

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-white"
            >
              View Projects
            </a>

            <a
              href="/Chinmay_Guntuku_Resume.pdf"
              download
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300 text-white"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center hidden lg:flex">
          <div className="absolute w-[420px] h-[420px] bg-blue-500/20 blur-3xl rounded-full" />

          <Image
            src="/chinmay.jpg"
            alt="Guntuku Chinmay"
            width={350}
            height={350}
            className="relative rounded-full object-cover border border-white/20 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
