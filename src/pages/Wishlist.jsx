
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useState } from "react";

const initialWishlist = [
  {
    id: 1,
    slug: "classic-linen-shirt",
    name: "Classic Linen Shirt",
    category: "Men's Clothing",
    price: 2499,
    oldPrice: 3299,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700",
    color: "White",
    inStock: true,
  },
  {
    id: 2,
    slug: "minimal-everyday-tote",
    name: "Minimal Everyday Tote",
    category: "Accessories",
    price: 1899,
    oldPrice: 2499,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=700",
    color: "Beige",
    inStock: true,
  },
  {
    id: 3,
    slug: "essential-white-sneakers",
    name: "Essential White Sneakers",
    category: "Footwear",
    price: 3499,
    oldPrice: 4299,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
    color: "White / Red",
    inStock: true,
  },
  {
    id: 4,
    slug: "womens-soft-knit-top",
    name: "Women's Soft Knit Top",
    category: "Women's Clothing",
    price: 1599,
    oldPrice: 1999,
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=700",
    color: "Cream",
    inStock: false,
  },
];

export default function Wishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeItem = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const addToBag = (product) => {
    alert(`${product.name} added to bag!`);
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-black">Wishlist</span>
        </div>

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <Heart size={24} strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Your Collection
              </span>
            </div>

            <h1 className="text-3xl font-light tracking-tight sm:text-5xl">
              My Wishlist
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Keep the pieces you love close.
            </p>
          </div>

          <p className="text-sm text-gray-600">
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"}
          </p>
        </div>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
            <Heart size={48} strokeWidth={1} className="mb-5 text-gray-400" />

            <h2 className="text-2xl font-light">
              Your wishlist is empty
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Discover something special for your collection.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center gap-3 bg-black px-7 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-gray-800"
            >
              Explore Collection
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
            {wishlist.map((product) => (
              <article key={product.id} className="group">
                {/* Product Image */}
                <div className="relative overflow-hidden bg-[#f0eee9]">
                  <Link to={`/product/${product.slug}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    aria-label={`Remove ${product.name}`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm hover:bg-black hover:text-white"
                  >
                    <Trash2 size={16} />
                  </button>

                  {!product.inStock && (
                    <span className="absolute bottom-3 left-3 bg-white/90 px-3 py-2 text-[10px] uppercase tracking-wider">
                      Out of stock
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="pt-4">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-gray-500">
                    {product.category}
                  </p>

                  <Link to={`/product/${product.slug}`}>
                    <h2 className="text-sm font-medium hover:underline sm:text-base">
                      {product.name}
                    </h2>
                  </Link>

                  <p className="mt-2 text-sm">
                    ₹{product.price.toLocaleString("en-IN")}
                    <span className="ml-2 text-xs text-gray-400 line-through">
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </span>
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Colour: {product.color}
                  </p>

                  <button
                    type="button"
                    disabled={!product.inStock}
                    onClick={() => addToBag(product)}
                    className="mt-4 flex w-full items-center justify-center gap-2 border border-black px-3 py-3 text-[10px] uppercase tracking-[0.15em] transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400 disabled:hover:bg-transparent disabled:hover:text-gray-400 sm:text-xs"
                  >
                    <ShoppingBag size={15} />
                    {product.inStock ? "Add to Bag" : "Out of Stock"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Continue Shopping */}
        {wishlist.length > 0 && (
          <div className="mt-12 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-b border-black pb-2 text-xs uppercase tracking-[0.2em]"
            >
              Continue Shopping
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
