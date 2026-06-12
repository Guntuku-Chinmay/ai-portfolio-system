"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import NeuralNetwork from "../background/NeuralNetwork";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <NeuralNetwork />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-12">
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
            Building
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI-Powered Products
            </span>
          </motion.h1>

          <p className="text-gray-400 mt-6 text-lg">
            Exploring Product Management, Generative AI, and Cloud Engineering
            through real-world projects.
          </p>

          <TypeAnimation
            sequence={[
              "Building AI Products",
              2000,
              "Learning Product Management",
              2000,
              "Deploying on AWS",
              2000,
              "Exploring Multi-Agent AI",
              2000,
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
            className="mt-4 text-xl font-medium text-purple-400"
          />

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-white">
              View Projects
            </button>

            <button className="px-6 py-3 rounded-xl border border-white/20 text-white">
              Download Resume
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center hidden lg:flex">
          <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl opacity-30 absolute" />

          <div className="w-[300px] h-[300px] rounded-full border border-white/20 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
