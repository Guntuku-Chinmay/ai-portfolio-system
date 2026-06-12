export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">Guntuku Chinmay</h3>

          <p className="text-gray-400 mt-2">
            Building AI-powered products with cloud-native technologies.
          </p>
        </div>

        <div className="flex gap-6 mt-6 md:mt-0 text-gray-400">
          <a href="https://github.com/Guntuku-Chinmay/">GitHub</a>
          <a href="https://www.linkedin.com/in/chinmay-guntuku-00b670414/">
            LinkedIn
          </a>
          <a href="#">Resume</a>
        </div>
      </div>
    </footer>
  );
}
