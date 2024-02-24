export async function fetchCurriculo() {
  const response = await fetch(
    "http://localhost:3000/v1/curriculo/users/6e31accd-1054-4cd4-ab34-f8d56da8e172",
    {
      next: {
        tags: ["curriculo"],
      },
    }
  );

  return response.json();
}
