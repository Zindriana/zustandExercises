import { create } from "zustand";

type CounterStore = {
    counter: number;
    increaseCounter:() => void;
    decreaseCounter:() => void;
}

const useStore = create<CounterStore>((set) => ({
    counter: 0,
    increaseCounter: () => set((state) => ({ counter: state.counter + 1 })),
    decreaseCounter: () => set((state) => ({ counter: state.counter - 1 })),
  }));
  
  export default useStore;