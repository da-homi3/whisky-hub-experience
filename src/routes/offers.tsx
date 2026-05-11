import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Weekly Deals — Whisky Hub Rongai" },
      { name: "description", content: "Limited-time offers on premium whisky, wines & spirits." },
    ],
  }),
  component: OffersPage,
});

function useCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = Date.now() + 1000 * 60 * 60 * 47;
    const id = setInterval(() => {
      const diff = target - Date.now();
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function OffersPage() {
  const t = useCountdown();
  const deals = products.filter((p) => p.oldPrice);

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-3xl glass p-8 lg:p-12 mb-12 overflow-hidden text-center"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-gold opacity-20 rounded-full blur-3xl" />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-gold text-background text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5" />
            Weekly Deals
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-3">
            Up to <span className="text-gradient-gold">25% Off</span>
          </h1>
          <p className="text-muted-foreground mb-6">Hurry — offer ends in</p>
          <div className="flex justify-center gap-3">
            {[
              { v: t.d, l: "Days" },
              { v: t.h, l: "Hrs" },
              { v: t.m, l: "Min" },
              { v: t.s, l: "Sec" },
            ].map((u) => (
              <div
                key={u.l}
                className="w-20 py-3 rounded-xl bg-background border border-[var(--gold)]/40"
              >
                <div className="font-display text-3xl font-bold text-gradient-gold">
                  {String(u.v).padStart(2, "0")}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {u.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {deals.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
