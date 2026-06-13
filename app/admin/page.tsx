import ProjectForm from "../components/admin/ProjectForm";
import ProjectsList from "../components/admin/ProjectsList";
import MessagesList from "../components/admin/MessagesList";

export default function AdminPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-10">Portfolio Admin Dashboard</h1>

      <ProjectForm />

      <div className="mt-10">
        <ProjectsList />
      </div>

      <div className="mt-10">
        <MessagesList />
      </div>
    </main>
  );
}
