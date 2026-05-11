import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Whisky Hub Rongai" },
      { name: "description", content: "Get in touch for orders, deliveries and event bookings." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-2">
            Get in touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Reach <span className="text-gradient-gold">Whisky Hub</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            { icon: MapPin, title: "Visit Us", text: "Magadi Road, Rongai\nNairobi, Kenya" },
            { icon: Phone, title: "Call", text: "+254 700 000 000" },
            { icon: MessageCircle, title: "WhatsApp", text: "Order in seconds — tap the floating button" },
            { icon: Clock, title: "Hours", text: "Daily · 10:00 AM – 11:00 PM" },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl glass flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center text-background shrink-0">
                <c.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">{c.title}</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line mt-1">
                  {c.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl overflow-hidden border border-border h-72 bg-gradient-dark flex items-center justify-center"
        >
          <iframe
            title="Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=36.74%2C-1.40%2C36.78%2C-1.36&amp;layer=mapnik"
            className="w-full h-full grayscale-[40%] opacity-90"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
