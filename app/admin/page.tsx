import ProjectForm from "../components/admin/ProjectForm";
import ProjectsList from "../components/admin/ProjectsList";

export default function AdminPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-10">Portfolio Admin Dashboard</h1>

      <div className="grid gap-6">
        <ProjectsList />
      </div>

      <ProjectForm />
    </main>
  );
}
