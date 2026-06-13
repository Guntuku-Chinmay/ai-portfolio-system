"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Guntuku Chinmay</h1>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
