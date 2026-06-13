import { API_URL } from "./api";

export async function getProjects() {
  const response = await fetch(`${API_URL}/projects`, {
    cache: "no-store",
  });

  return response.json();
}