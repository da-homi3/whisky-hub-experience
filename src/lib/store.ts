import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "./products";

type CartItem = Product & { qty: number };

type CartState = {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (p) =>
        set((s) => {
          const existing = s.items.find((i) => i.id === p.id);
          if (existing) {
            return {
              items: s.items.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i)),
            };
          }
          return { items: [...s.items, { ...p, qty: 1 }] };
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      setQty: (id, qty) =>
        set((s) => ({
          items:
            qty <= 0
              ? s.items.filter((i) => i.id !== id)
              : s.items.map((i) => (i.id === id ? { ...i, qty } : i)),
        })),
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((s, i) => s + i.qty, 0),
      total: () => get().items.reduce((s, i) => s + i.qty * i.price, 0),
    }),
    { name: "whr-cart" },
  ),
);

type ThemeState = {
  theme: "light" | "dark";
  toggle: () => void;
  init: () => void;
};

export const useTheme = create<ThemeState>((set, get) => ({
  theme: "dark",
  toggle: () => {
    const next = get().theme === "dark" ? "light" : "dark";
    set({ theme: next });
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("whr-theme", next);
    }
  },
  init: () => {
    if (typeof document === "undefined") return;
    const saved = (localStorage.getItem("whr-theme") as "light" | "dark") || "dark";
    set({ theme: saved });
    document.documentElement.classList.toggle("dark", saved === "dark");
  },
}));

type UIState = {
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
};

export const useUI = create<UIState>((set) => ({
  cartOpen: false,
  setCartOpen: (v) => set({ cartOpen: v }),
}));
