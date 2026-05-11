import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Heart, Truck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Whisky Hub Rongai" },
      { name: "description", content: "The story behind Rongai's most-loved liquor destination." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-2">
            Our Story
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Crafted for the <span className="text-gradient-gold">Connoisseur</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Born in the heart of Rongai, Whisky Hub is more than a liquor store — it's a
            curation of the world's finest spirits, paired with the best of Kenya's local
            heritage. From the rare single malts of Scotland to the crisp local lagers
            we love, every bottle is hand-picked for quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Award, title: "100% Authentic", desc: "Sourced directly from licensed distributors." },
            { icon: Truck, title: "Lightning Fast", desc: "Same-day delivery across Nairobi metro." },
            { icon: Heart, title: "Locally Loved", desc: "Trusted by thousands in Rongai & beyond." },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl glass text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold mx-auto flex items-center justify-center text-background mb-4">
                <v.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
