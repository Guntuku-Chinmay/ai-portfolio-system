import ProjectForm from "../components/admin/ProjectForm";

export default function AdminPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-10">Portfolio Admin Dashboard</h1>

      <div className="grid gap-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          Existing Projects
        </div>
      </div>

      <ProjectForm />
    </main>
  );
}
