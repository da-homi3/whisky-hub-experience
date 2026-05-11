export type Product = {
  id: string;
  name: string;
  category: "Whisky" | "Vodka" | "Gin" | "Wine" | "Tequila" | "Champagne" | "Beer" | "Kenyan";
  price: number;
  oldPrice?: number;
  size: string;
  rating: number;
  badge?: string;
  emoji: string;
};

export const categories = [
  "All", "Whisky", "Vodka", "Gin", "Wine", "Tequila", "Champagne", "Beer", "Kenyan",
] as const;

export const products: Product[] = [
  // Whisky
  { id: "w1", name: "Johnnie Walker Black Label", category: "Whisky", price: 4500, oldPrice: 5200, size: "750ml", rating: 4.8, badge: "Bestseller", emoji: "🥃" },
  { id: "w2", name: "Johnnie Walker Double Black", category: "Whisky", price: 6200, size: "750ml", rating: 4.9, emoji: "🥃" },
  { id: "w3", name: "Glenfiddich 12 Years", category: "Whisky", price: 7800, size: "750ml", rating: 4.9, badge: "Premium", emoji: "🥃" },
  { id: "w4", name: "Jameson Irish Whiskey", category: "Whisky", price: 3200, oldPrice: 3600, size: "750ml", rating: 4.7, emoji: "🥃" },
  { id: "w5", name: "The Singleton 12", category: "Whisky", price: 6500, size: "700ml", rating: 4.8, emoji: "🥃" },
  { id: "w6", name: "Jack Daniel's Old No.7", category: "Whisky", price: 4200, size: "750ml", rating: 4.8, badge: "Hot", emoji: "🥃" },
  { id: "w7", name: "Chivas Regal 12", category: "Whisky", price: 5500, size: "750ml", rating: 4.7, emoji: "🥃" },
  { id: "w8", name: "Glenlivet Founder's Reserve", category: "Whisky", price: 6800, size: "700ml", rating: 4.8, emoji: "🥃" },
  { id: "w9", name: "Ballantine's Finest", category: "Whisky", price: 2900, size: "750ml", rating: 4.5, emoji: "🥃" },
  { id: "w10", name: "Black & White Scotch", category: "Whisky", price: 2400, size: "750ml", rating: 4.4, emoji: "🥃" },
  // Vodka
  { id: "v1", name: "Smirnoff Red Label", category: "Vodka", price: 1800, size: "750ml", rating: 4.5, emoji: "🍸" },
  { id: "v2", name: "Cîroc Ultra Premium", category: "Vodka", price: 7200, size: "750ml", rating: 4.9, badge: "Luxury", emoji: "🍸" },
  { id: "v3", name: "Absolut Blue", category: "Vodka", price: 2800, oldPrice: 3200, size: "750ml", rating: 4.6, emoji: "🍸" },
  { id: "v4", name: "Chrome Vodka", category: "Vodka", price: 1200, size: "750ml", rating: 4.2, emoji: "🍸" },
  { id: "v5", name: "Belvedere Pure", category: "Vodka", price: 6500, size: "750ml", rating: 4.8, emoji: "🍸" },
  // Gin
  { id: "g1", name: "Gordon's London Dry", category: "Gin", price: 2200, size: "750ml", rating: 4.6, emoji: "🍸" },
  { id: "g2", name: "Bombay Sapphire", category: "Gin", price: 3800, oldPrice: 4200, size: "750ml", rating: 4.8, badge: "Hot", emoji: "🍸" },
  { id: "g3", name: "Gilbey's Gin", category: "Gin", price: 1700, size: "750ml", rating: 4.4, emoji: "🍸" },
  { id: "g4", name: "Beefeater London Dry", category: "Gin", price: 3200, size: "750ml", rating: 4.6, emoji: "🍸" },
  { id: "g5", name: "Tanqueray London Dry", category: "Gin", price: 4200, size: "750ml", rating: 4.8, emoji: "🍸" },
  // Wine
  { id: "wn1", name: "Four Cousins Sweet Red", category: "Wine", price: 1400, size: "750ml", rating: 4.6, badge: "Bestseller", emoji: "🍷" },
  { id: "wn2", name: "Drostdy Hof Adelpracht", category: "Wine", price: 1100, size: "750ml", rating: 4.4, emoji: "🍷" },
  { id: "wn3", name: "Nederburg Cabernet", category: "Wine", price: 1600, size: "750ml", rating: 4.7, emoji: "🍷" },
  { id: "wn4", name: "4th Street Sweet Red", category: "Wine", price: 1300, size: "750ml", rating: 4.5, emoji: "🍷" },
  { id: "wn5", name: "Robertson Winery Chardonnay", category: "Wine", price: 1500, size: "750ml", rating: 4.6, emoji: "🍷" },
  // Tequila
  { id: "t1", name: "Jose Cuervo Especial", category: "Tequila", price: 3400, size: "750ml", rating: 4.5, emoji: "🍹" },
  { id: "t2", name: "Don Julio Blanco", category: "Tequila", price: 8500, size: "750ml", rating: 4.9, badge: "Premium", emoji: "🍹" },
  { id: "t3", name: "Olmeca Gold", category: "Tequila", price: 2800, size: "750ml", rating: 4.4, emoji: "🍹" },
  // Champagne
  { id: "c1", name: "Hennessy VS Cognac", category: "Champagne", price: 5800, size: "700ml", rating: 4.8, badge: "Hot", emoji: "🍾" },
  { id: "c2", name: "Moët & Chandon Brut", category: "Champagne", price: 9500, size: "750ml", rating: 4.9, badge: "Luxury", emoji: "🍾" },
  { id: "c3", name: "Rémy Martin VSOP", category: "Champagne", price: 8200, size: "700ml", rating: 4.8, emoji: "🍾" },
  { id: "c4", name: "Veuve Clicquot Yellow", category: "Champagne", price: 11500, size: "750ml", rating: 4.9, emoji: "🍾" },
  { id: "c5", name: "Martell VS", category: "Champagne", price: 5200, size: "700ml", rating: 4.7, emoji: "🍾" },
  // Kenyan
  { id: "k1", name: "Tusker Lager (Crate)", category: "Kenyan", price: 2400, size: "24x500ml", rating: 4.7, badge: "Local", emoji: "🍺" },
  { id: "k2", name: "White Cap Lager", category: "Kenyan", price: 2200, size: "24x500ml", rating: 4.5, badge: "Local", emoji: "🍺" },
  { id: "k3", name: "Balozi Premium", category: "Kenyan", price: 2100, size: "24x500ml", rating: 4.4, emoji: "🍺" },
  { id: "k4", name: "Chrome Gin", category: "Kenyan", price: 950, size: "750ml", rating: 4.2, emoji: "🍸" },
  { id: "k5", name: "Kibao Vodka", category: "Kenyan", price: 850, size: "750ml", rating: 4.1, emoji: "🍸" },
  { id: "k6", name: "KC Cane Spirit", category: "Kenyan", price: 750, size: "750ml", rating: 4.0, emoji: "🍸" },
  { id: "k7", name: "Hunter's Gold Cider", category: "Kenyan", price: 280, size: "330ml", rating: 4.5, emoji: "🍺" },
  { id: "k8", name: "Savanna Dry Cider", category: "Kenyan", price: 320, size: "330ml", rating: 4.6, emoji: "🍺" },
  // Beer
  { id: "b1", name: "Heineken Lager", category: "Beer", price: 2800, size: "24x330ml", rating: 4.7, emoji: "🍺" },
  { id: "b2", name: "Guinness Foreign Extra", category: "Beer", price: 3200, size: "24x500ml", rating: 4.8, emoji: "🍺" },
  { id: "b3", name: "Corona Extra", category: "Beer", price: 3400, size: "24x355ml", rating: 4.7, emoji: "🍺" },
];

export const formatKES = (n: number) =>
  "KES " + n.toLocaleString("en-KE");
