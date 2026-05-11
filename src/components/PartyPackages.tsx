import { motion } from "framer-motion";
import { Calendar, Crown, PartyPopper, Users } from "lucide-react";

const packages = [
  {
    icon: PartyPopper,
    title: "House Party",
    price: 12500,
    desc: "2 spirits, mixers, beer crate, ice & cups for 10 guests",
  },
  {
    icon: Crown,
    title: "VIP Club Night",
    price: 38000,
    desc: "Champagne, premium whisky, tequila bottles + sparklers",
  },
  {
    icon: Users,
    title: "Corporate Event",
    price: 65000,
    desc: "Curated bar setup with bartender for 50 guests",
  },
  {
    icon: Calendar,
    title: "Wedding Bundle",
    price: 95000,
    desc: "Wines, champagne & spirits for 100+ guests",
  },
];

export function PartyPackages() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-2">Bundles</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Party <span className="text-gradient-gold">Packages</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Curated drinks bundles for every occasion — delivered ready to pour.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {packages.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="relative p-6 rounded-2xl glass overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-gold opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-background mb-4">
              <p.icon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
            <div className="text-gradient-gold font-display text-2xl font-bold">
              From KES {p.price.toLocaleString()}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
