import { motion } from "framer-motion";
import { Heart, Plus, Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/store";
import { formatKES, type Product } from "@/lib/products";
import { productImages } from "@/lib/productImages";
import { Link } from "@tanstack/react-router";

export function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const [fav, setFav] = useState(false);

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        to="/product/$productId"
        params={{ productId: product.id }}
        className="group relative rounded-2xl overflow-hidden bg-card border border-border glow-gold-hover block h-full"
      >
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full bg-gradient-gold text-background text-[10px] font-bold uppercase tracking-wider">
              {product.badge}
            </span>
          )}
          {discount && (
            <span className="px-2.5 py-1 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold">
              -{discount}%
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setFav((v) => !v);
          }}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full glass flex items-center justify-center"
          aria-label="Wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${fav ? "fill-[var(--amber)] text-[var(--amber)]" : "text-foreground"}`}
          />
        </button>

        <div className="aspect-square bg-gradient-dark flex items-center justify-center overflow-hidden relative">
          {productImages[product.id] ? (
            <motion.img
              src={productImages[product.id]}
              alt={product.name}
              loading="lazy"
              whileHover={{ scale: 1.08, rotate: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full h-full object-cover"
            />
          ) : (
            <motion.div
              whileHover={{ scale: 1.15, rotate: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-8xl drop-shadow-2xl"
            >
              {product.emoji}
            </motion.div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="p-4 space-y-2">
          <div className="flex items-center gap-1 text-xs">
            <Star className="w-3 h-3 fill-[var(--gold)] text-[var(--gold)]" />
            <span className="text-muted-foreground">{product.rating}</span>
            <span className="text-muted-foreground/60">·</span>
            <span className="text-muted-foreground">{product.size}</span>
          </div>
          <h3 className="font-medium text-sm leading-tight line-clamp-2 min-h-[2.5rem] group-hover:text-[var(--gold)] transition-colors">
            {product.name}
          </h3>
          <div className="flex items-end justify-between pt-1">
            <div>
              <div className="font-display text-lg font-bold text-gradient-gold">
                {formatKES(product.price)}
              </div>
              {product.oldPrice && (
                <div className="text-xs text-muted-foreground line-through">
                  {formatKES(product.oldPrice)}
                </div>
              )}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                add(product);
              }}
              className="w-9 h-9 rounded-full bg-gradient-gold text-background flex items-center justify-center hover:scale-110 transition-transform glow-gold"
              aria-label="Add to cart"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
