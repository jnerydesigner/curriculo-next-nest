import { revalidateTag } from 'next/cache';
import { CurriculoRoot, Language } from "@/types/curriculo.type";

export async function fetchLanguage(userId: string) {
  const response = await fetch(
    `http://localhost:3000/v1/curriculo/languages/${userId}`, {
      next: {
        tags: ['language']
      }
    }
  );
  const languages: Language[] = await response.json();

  return languages;
}