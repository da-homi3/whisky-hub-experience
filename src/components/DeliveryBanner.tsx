import { motion } from "framer-motion";
import { Clock, MapPin, Shield, Truck } from "lucide-react";

const items = [
  { icon: Truck, title: "Free Delivery", desc: "Orders over KES 5,000 in Rongai" },
  { icon: Clock, title: "30-min Delivery", desc: "Express service across Nairobi" },
  { icon: Shield, title: "100% Authentic", desc: "Direct from licensed distributors" },
  { icon: MapPin, title: "Wide Coverage", desc: "Rongai · Karen · CBD · Westlands" },
];

export function DeliveryBanner() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 lg:p-8 rounded-3xl glass">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center text-background shrink-0">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm">{item.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
