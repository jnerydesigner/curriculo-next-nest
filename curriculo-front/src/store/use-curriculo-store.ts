import { create } from "zustand";

export const useCurriculoStore = create((set) => ({
  findCurriculo: async () => {
    const userId = "6e31accd-1054-4cd4-ab34-f8d56da8e172";
    const response = await fetch(
      `http://localhost:3000/v1/curriculo/users/${userId}`
    );
    const data = await response.json();

    console.log(data);

    set({ curriculo: data });
  },
}));
