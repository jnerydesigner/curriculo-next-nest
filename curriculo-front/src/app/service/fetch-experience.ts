import { CurriculoRoot } from "@/types/curriculo.type";

export async function fetchCurriculo() {
  const response = await fetch(
    "http://localhost:3000/v1/curriculo/users/947aa786-6a48-4994-bd3c-daf4fdeb931c",
    {
      next: {
        revalidate: 3600,
      }
    }
  );
  const fetchResponse: CurriculoRoot = await response.json();


  return fetchResponse;
}

