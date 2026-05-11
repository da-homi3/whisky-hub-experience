import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-whisky.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-dark pt-20"
      style={{
        backgroundImage:
          "radial-gradient(circle 600px at var(--mx, 50%) var(--my, 50%), oklch(0.62 0.18 55 / 0.18), transparent 60%)",
      }}
    >
      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[var(--gold)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.2em]"
          >
            <Sparkles className="w-3 h-3 text-[var(--gold)]" />
            <span>Same-Day Delivery in Nairobi</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Rongai's <br />
            <span className="text-gradient-gold">Premium Liquor</span> <br />
            Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            From rare single malts to local favourites — handpicked spirits, wines and
            beers delivered to your doorstep across Nairobi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/shop"
              className="group px-6 py-3.5 rounded-xl bg-gradient-gold text-background font-semibold flex items-center gap-2 glow-gold hover:scale-105 transition-transform"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl glass font-semibold flex items-center gap-2 hover:border-[var(--gold)] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Order via WhatsApp
            </a>
            <Link
              to="/offers"
              className="px-6 py-3.5 rounded-xl border border-border font-semibold hover:bg-muted transition-colors"
            >
              View Offers
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-8 pt-6 border-t border-border"
          >
            {[
              { n: "500+", l: "Premium Bottles" },
              { n: "30 min", l: "Avg. Delivery" },
              { n: "4.9★", l: "Customer Rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-gradient-gold">
                  {s.n}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-gold blur-3xl opacity-30 animate-pulse" />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-3xl overflow-hidden border border-[var(--gold)]/30 glow-gold"
          >
            <img
              src={heroImg}
              alt="Premium whisky bottle"
              width={1920}
              height={1280}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating glass card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-8 glass rounded-2xl p-4 max-w-[200px]"
          >
            <div className="text-xs text-muted-foreground">Featured</div>
            <div className="font-display font-bold text-lg">Glenfiddich 12</div>
            <div className="text-gradient-gold font-bold text-sm mt-1">KES 7,800</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
