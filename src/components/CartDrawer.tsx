import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart, useUI } from "@/lib/store";
import { formatKES } from "@/lib/products";

export function CartDrawer() {
  const { cartOpen, setCartOpen } = useUI();
  const { items, setQty, remove, total, clear } = useCart();

  const handleCheckout = () => {
    const lines = items
      .map((i) => `• ${i.name} x${i.qty} — ${formatKES(i.price * i.qty)}`)
      .join("%0A");
    const msg = `Hello Whisky Hub Rongai! I'd like to order:%0A%0A${lines}%0A%0ATotal: ${formatKES(total())}`;
    window.open(`https://wa.me/254700000000?text=${msg}`, "_blank");
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-card border-l border-border z-[70] flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[var(--gold)]" />
                <h3 className="font-display text-xl font-semibold">Your Cart</h3>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="w-9 h-9 rounded-full hover:bg-muted flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🥃</div>
                  <p className="text-muted-foreground">Your cart is empty.</p>
                  <p className="text-sm text-muted-foreground mt-1">Time to stock up!</p>
                </div>
              ) : (
                items.map((i) => (
                  <motion.div
                    key={i.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="flex gap-3 p-3 rounded-xl bg-muted/50 border border-border"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-dark flex items-center justify-center text-3xl shrink-0">
                      {i.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">{i.name}</div>
                      <div className="text-xs text-muted-foreground">{i.size}</div>
                      <div className="text-sm font-semibold text-gradient-gold mt-1">
                        {formatKES(i.price * i.qty)}
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => remove(i.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-1 bg-background rounded-md border border-border">
                        <button
                          onClick={() => setQty(i.id, i.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-muted"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{i.qty}</span>
                        <button
                          onClick={() => setQty(i.id, i.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-muted"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-5 border-t border-border space-y-3 bg-background/50">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-2xl font-display font-bold text-gradient-gold">
                    {formatKES(total())}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Delivery fee calculated at checkout. Same-day delivery in Nairobi.
                </p>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 rounded-xl bg-gradient-gold text-background font-semibold glow-gold hover:scale-[1.02] transition-transform"
                >
                  Checkout via WhatsApp
                </button>
                <button
                  onClick={clear}
                  className="w-full py-2 text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
