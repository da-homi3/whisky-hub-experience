import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  const featured = products.filter((p) => p.badge).slice(0, 8);

  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-2">
            Top picks
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Featured <span className="text-gradient-gold">Bottles</span>
          </h2>
        </div>
        <Link
          to="/shop"
          className="text-sm text-muted-foreground hover:text-[var(--gold)]"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {featured.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.06 }}
          >
            <ProductCard product={p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
