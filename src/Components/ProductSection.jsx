import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ShoppingBag,
  ArrowRight,
  Star,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Linen Shirt",
    category: "Men",
    price: 1499,
    oldPrice: 1999,
    rating: 4.8,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 2,
    name: "Elegant Summer Dress",
    category: "Women",
    price: 2299,
    oldPrice: 2899,
    rating: 4.9,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 3,
    name: "Everyday Sneakers",
    category: "Footwear",
    price: 1899,
    oldPrice: 2499,
    rating: 4.7,
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 4,
    name: "Minimal Leather Bag",
    category: "Accessories",
    price: 2599,
    oldPrice: 3299,
    rating: 4.8,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 5,
    name: "Premium Casual Shirt",
    category: "Men",
    price: 1299,
    oldPrice: 1699,
    rating: 4.6,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 6,
    name: "Modern Women's Outfit",
    category: "Women",
    price: 1999,
    oldPrice: 2599,
    rating: 4.8,
    badge: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 7,
    name: "Classic Wrist Watch",
    category: "Accessories",
    price: 2999,
    oldPrice: 3799,
    rating: 4.7,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 8,
    name: "Essential White Sneakers",
    category: "Footwear",
    price: 2199,
    oldPrice: 2799,
    rating: 4.9,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=85",
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  const tabs = ["All", "Men", "Women", "Footwear", "Accessories"];

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.category === activeTab);

  const toggleWishlist = (productId) => {
    setWishlist((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId]
    );
  };

  const addToBag = (product) => {
    alert(`${product.name} selected! Connect your cart API here.`);
  };

  return (
    <section className="bg-[#FAF9F6] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#A58A68]">
              Curated For You
            </p>

            <h2 className="text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Our <span className="font-serif italic">Collection</span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-500">
              Discover timeless pieces designed to elevate your everyday style.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex w-fit items-center gap-2 border-b border-neutral-800 pb-2 text-sm font-medium text-neutral-800 transition-colors duration-300 hover:text-[#A58A68]"
          >
            View All Products
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-none border px-5 py-2.5 text-xs font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-900 hover:text-neutral-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {filteredProducts.map((product) => (
            <article key={product.id} className="group min-w-0">

              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F0ECE5]">
                <Link
                  to={`/product/${product.id}`}
                  aria-label={`View ${product.name}`}
                  className="block h-full w-full"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </Link>

                {/* Product Badge */}
                {product.badge && (
                  <span className="absolute left-2 top-2 bg-white px-2 py-1 text-[9px] font-semibold tracking-wider text-neutral-800 sm:left-3 sm:top-3 sm:text-[10px]">
                    {product.badge}
                  </span>
                )}

                {/* Wishlist */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  aria-label={
                    wishlist.includes(product.id)
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                  aria-pressed={wishlist.includes(product.id)}
                  className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-neutral-800 transition-colors hover:bg-neutral-900 hover:text-white sm:right-3 sm:top-3"
                >
                  <Heart
                    size={17}
                    className={
                      wishlist.includes(product.id)
                        ? "fill-red-500 text-red-500"
                        : ""
                    }
                  />
                </button>

                {/* Add to Bag */}
                <button
                  type="button"
                  onClick={() => addToBag(product)}
                  className="absolute inset-x-2 bottom-2 flex items-center justify-center gap-2 bg-white/95 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-900 opacity-100 transition-colors hover:bg-neutral-900 hover:text-white sm:inset-x-3 sm:bottom-3 sm:text-xs md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                >
                  <ShoppingBag size={15} />
                  Add to Bag
                </button>
              </div>

              {/* Product Details */}
              <div className="pt-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                      {product.category}
                    </p>

                    <Link
                      to={`/product/${product.id}`}
                      className="line-clamp-2 text-sm font-medium text-neutral-900 transition-colors hover:text-[#A58A68] sm:text-base"
                    >
                      {product.name}
                    </Link>
                  </div>

                  <span className="flex shrink-0 items-center gap-1 text-xs text-neutral-600">
                    <Star size={12} className="fill-[#C6A56C] text-[#C6A56C]" />
                    {product.rating}
                  </span>
                </div>

                {/* Prices */}
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-sm font-semibold text-neutral-900">
                    {formatPrice(product.price)}
                  </span>

                  <span className="text-xs text-neutral-400 line-through">
                    {formatPrice(product.oldPrice)}
                  </span>

                  <span className="text-[10px] font-medium text-[#A05A45]">
                    {Math.round(
                      ((product.oldPrice - product.price) / product.oldPrice) *
                        100
                    )}
                    % OFF
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-3 border border-neutral-900 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-colors duration-300 hover:bg-neutral-900 hover:text-white"
          >
            Explore All Products
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
