import { createFileRoute, Link } from "@tanstack/react-router";
import { products, formatKES } from "@/lib/products";
import { productImages } from "@/lib/productImages";
import { useCart } from "@/lib/store";
import { Plus, Star, Heart, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$productId")({
  component: ProductDetails,
});

function ProductDetails() {
  const { productId } = Route.useParams();
  const product = products.find((p) => p.id === productId);
  const add = useCart((s) => s.add);
  const [fav, setFav] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center text-muted-foreground">
        <h1 className="text-3xl font-bold text-foreground mb-4">Bottle Not Found</h1>
        <Link to="/shop" className="text-[var(--gold)] hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const similarProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <div className="pt-28 pb-16 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-[var(--gold)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden bg-card border border-border flex items-center justify-center p-8 min-h-[400px]">
            {productImages[product.id] ? (
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={productImages[product.id]}
                alt={product.name}
                className="w-full max-w-md object-contain drop-shadow-2xl"
              />
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-9xl drop-shadow-2xl"
              >
                {product.emoji}
              </motion.div>
            )}

            {product.badge && (
              <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-gradient-gold text-background text-xs font-bold uppercase tracking-wider">
                {product.badge}
              </div>
            )}
            {discount && (
              <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-destructive text-destructive-foreground text-xs font-bold">
                -{discount}%
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span className="text-[var(--gold)] uppercase tracking-wider font-semibold">
                  {product.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />{" "}
                  {product.rating} Rating
                </span>
                <span>•</span>
                <span>{product.size}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4">
                {product.name}
              </h1>

              <div className="flex items-end gap-4 mb-6">
                <div className="font-display text-4xl font-bold text-gradient-gold">
                  {formatKES(product.price)}
                </div>
                {product.oldPrice && (
                  <div className="text-xl text-muted-foreground line-through mb-1">
                    {formatKES(product.oldPrice)}
                  </div>
                )}
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the exceptional quality of {product.name}. Carefully crafted to deliver a
              unique tasting experience, this {product.size} bottle is perfect for your collection
              or as a premium gift.
            </p>

            <div className="flex gap-4 pt-4 border-t border-border">
              <button
                onClick={() => add(product)}
                className="flex-1 bg-gradient-gold hover:bg-[var(--gold)] text-background font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <Plus className="w-5 h-5" /> Add to Cart
              </button>
              <button
                onClick={() => setFav(!fav)}
                className={`w-16 h-[60px] rounded-xl border border-border flex items-center justify-center transition-colors ${fav ? "bg-[var(--amber)]/10 border-[var(--amber)]" : "bg-card hover:border-[var(--gold)]"}`}
              >
                <Heart
                  className={`w-6 h-6 transition-colors ${fav ? "fill-[var(--amber)] text-[var(--amber)]" : "text-foreground"}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="pt-8 border-t border-border">
            <h2 className="text-2xl font-display font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {similarProducts.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
