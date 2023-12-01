import { create } from "zustand";

interface Props {
  Slug: string;
  setSlug: (newString: string | any) => void;
}
const useCounter = create<Props>((set) => ({
  Slug: "",
  setSlug: (newString) => set((store) => ({ Slug: newString })),
}));
export default useCounter;
