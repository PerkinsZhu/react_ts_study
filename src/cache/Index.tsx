import { create } from "zustand";

interface Bear{
    num:number;
    [k:string]:any
}

const useStore = create<Bear>((set)=>({
    num:12,
    addnum: () => set(state => ({ num: state.num + 1 })),
    subtractnum: () => set(state => ({ num: state.num - 1 })),
}))

export default useStore
