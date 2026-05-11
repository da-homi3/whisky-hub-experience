import { Link } from "@tanstack/react-router";
import { Globe, MapPin, MessageCircle, Phone, Send, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-background font-bold text-lg">
              W
            </div>
            <div>
              <div className="font-display text-lg font-bold">
                Whisky <span className="text-gradient-gold">Hub</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Rongai
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Rongai's premium liquor destination. Same-day delivery across Nairobi.
          </p>
          <div className="flex gap-3 mt-5">
            {[Share2, Globe, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full glass flex items-center justify-center hover:bg-gradient-gold hover:text-background transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Whisky", "Wines", "Vodka", "Gin", "Champagne", "Kenyan Favorites"].map(
              (c) => (
                <li key={c}>
                  <Link to="/shop" className="hover:text-[var(--gold)] transition-colors">
                    {c}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-[var(--gold)] shrink-0" />
              <span>Magadi Road, Rongai, Nairobi</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[var(--gold)]" />
              <a href="tel:+254700000000" className="hover:text-foreground">
                +254 700 000 000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[var(--gold)]" />
              <a href="https://wa.me/254700000000" className="hover:text-foreground">
                WhatsApp Order
              </a>
            </li>
          </ul>
          <p className="text-xs text-muted-foreground mt-4">
            Open daily · 10:00 AM – 11:00 PM
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Weekly deals and exclusive drops.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-3 py-2 rounded-lg bg-background border border-border text-sm focus:outline-none focus:border-[var(--gold)]"
            />
            <button className="px-4 py-2 rounded-lg bg-gradient-gold text-background text-sm font-semibold">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Whisky Hub Rongai. All rights reserved.</p>
          <p className="text-[var(--amber)] font-medium">
            🔞 Drink Responsibly · Strictly 18+
          </p>
        </div>
      </div>
    </footer>
  );
}
