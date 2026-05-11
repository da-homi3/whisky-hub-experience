import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const cats = [
  { name: "Whisky", emoji: "🥃", count: "10+" },
  { name: "Vodka", emoji: "🍸", count: "5+" },
  { name: "Gin", emoji: "🍸", count: "5+" },
  { name: "Wine", emoji: "🍷", count: "5+" },
  { name: "Tequila", emoji: "🍹", count: "3+" },
  { name: "Champagne", emoji: "🍾", count: "5+" },
  { name: "Beer", emoji: "🍺", count: "3+" },
  { name: "Kenyan", emoji: "🇰🇪", count: "8+" },
];

export function CategoryStrip() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-2">Browse</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Shop by <span className="text-gradient-gold">Category</span>
          </h2>
        </div>
        <Link
          to="/shop"
          className="hidden md:block text-sm text-muted-foreground hover:text-[var(--gold)]"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {cats.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to="/shop"
              className="group relative aspect-square rounded-2xl bg-card border border-border flex flex-col items-center justify-center gap-2 hover:border-[var(--gold)] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity" />
              <motion.div whileHover={{ scale: 1.2, rotate: -10 }} className="text-4xl">
                {c.emoji}
              </motion.div>
              <div className="text-sm font-semibold">{c.name}</div>
              <div className="text-[10px] text-muted-foreground">{c.count} items</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
