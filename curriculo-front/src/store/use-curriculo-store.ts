import { create } from "zustand";

export const useCurriculoStore = create((set) => ({
  findCurriculo: async () => {
    const userId = "947aa786-6a48-4994-bd3c-daf4fdeb931c";
    const response = await fetch(
      `http://localhost:3000/v1/curriculo/users/${userId}`
    );
    const data = await response.json();


    set({ curriculo: data });
  },
}));
