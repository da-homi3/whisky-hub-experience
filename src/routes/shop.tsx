import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Whisky Hub Rongai" },
      {
        name: "description",
        content:
          "Browse our full catalogue: whisky, vodka, gin, wine, champagne, beer & Kenyan favourites.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (cat === "All" || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase()),
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, q, sort]);

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-2">Catalogue</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            The <span className="text-gradient-gold">Collection</span>
          </h1>
          <p className="text-muted-foreground mt-3">{filtered.length} products available</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search bottles..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:border-[var(--gold)] transition-colors"
            />
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:border-[var(--gold)]"
          >
            <option value="popular">Most popular</option>
            <option value="rating">Top rated</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                cat === c
                  ? "bg-gradient-gold text-background glow-gold"
                  : "bg-card border border-border hover:border-[var(--gold)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.4) }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No bottles match your search.
          </div>
        )}
      </div>
    </div>
  );
}
