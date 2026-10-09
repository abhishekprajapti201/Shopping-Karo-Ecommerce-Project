
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import {
  Search,
  SlidersHorizontal,
  Heart,
  ShoppingBag,
  Star,
  ArrowUpRight,
  X,
} from "lucide-react";

const products = [
  {
    id: 1,
    slug: "classic-linen-shirt",
    name: "Classic Linen Shirt",
    category: "Men",
    price: 1890,
    oldPrice: 2490,
    rating: 4.8,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    slug: "minimal-everyday-tote",
    name: "Minimal Everyday Tote",
    category: "Bags",
    price: 1290,
    oldPrice: null,
    rating: 4.6,
    isNew: false,
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    slug: "essential-white-sneakers",
    name: "Essential White Sneakers",
    category: "Footwear",
    price: 2490,
    oldPrice: 2990,
    rating: 4.9,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    slug: "everyday-cotton-tee",
    name: "Everyday Cotton Tee",
    category: "Men",
    price: 890,
    oldPrice: 1190,
    rating: 4.5,
    isNew: false,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    slug: "soft-knit-cardigan",
    name: "Soft Knit Cardigan",
    category: "Women",
    price: 2190,
    oldPrice: null,
    rating: 4.7,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    slug: "minimal-gold-watch",
    name: "Minimal Gold Watch",
    category: "Watches",
    price: 3290,
    oldPrice: 3990,
    rating: 4.8,
    isNew: false,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    slug: "everyday-crossbody-bag",
    name: "Everyday Crossbody Bag",
    category: "Bags",
    price: 1790,
    oldPrice: null,
    rating: 4.6,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    slug: "classic-sunglasses",
    name: "Classic Sunglasses",
    category: "Accessories",
    price: 990,
    oldPrice: 1290,
    rating: 4.4,
    isNew: false,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    slug: "relaxed-fit-trousers",
    name: "Relaxed Fit Trousers",
    category: "Men",
    price: 1990,
    oldPrice: null,
    rating: 4.7,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    slug: "floral-summer-dress",
    name: "Floral Summer Dress",
    category: "Women",
    price: 2390,
    oldPrice: 2890,
    rating: 4.8,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    slug: "everyday-leather-wallet",
    name: "Everyday Leather Wallet",
    category: "Accessories",
    price: 1190,
    oldPrice: null,
    rating: 4.5,
    isNew: false,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    slug: "minimal-silver-bracelet",
    name: "Minimal Silver Bracelet",
    category: "Accessories",
    price: 1490,
    oldPrice: 1790,
    rating: 4.6,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  "All",
  "Men",
  "Women",
  "Footwear",
  "Bags",
  "Accessories",
  "Watches",
  "New Arrivals",
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

export default function ProductListing() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
const searchQuery = searchParams.get("search") || "";

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [bagCount, setBagCount] = useState(() => {
    try {
      const cart = JSON.parse(
        sessionStorage.getItem("elora_cart") || "[]"
      );

      return cart.reduce(
        (total, item) => total + (Number(item.quantity) || 1),
        0
      );
    } catch {
      return 0;
    }
  });

  const selectCategory = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      navigate("/products");
      return;
    }

    const slug = category.toLowerCase().replace(/\s+/g, "-");
    navigate(`/category/${slug}`);
  };

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  const addToBag = (product) => {
    try {
      const cart = JSON.parse(
        sessionStorage.getItem("elora_cart") || "[]"
      );

      const existingItem = cart.find(
        (item) => item.id === product.id
      );

      let updatedCart;

      if (existingItem) {
        updatedCart = cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: (Number(item.quantity) || 1) + 1,
              }
            : item
        );
      } else {
        updatedCart = [
          ...cart,
          {
            id: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        ];
      }

      sessionStorage.setItem(
        "elora_cart",
        JSON.stringify(updatedCart)
      );

      setBagCount(
        updatedCart.reduce(
          (total, item) => total + (Number(item.quantity) || 1),
          0
        )
      );
    } catch (error) {
      console.error("Unable to update bag:", error);
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory === "New Arrivals") {
      result = result.filter((product) => product.isNew);
    } else if (activeCategory !== "All") {
      result = result.filter(
        (product) => product.category === activeCategory
      );
    }

    const searchTerm = search.trim().toLowerCase();

    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          product.slug.toLowerCase().includes(searchTerm)
      );
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "newest":
        result.sort(
          (a, b) => Number(b.isNew) - Number(a.isNew)
        );
        break;

      default:
        break;
    }

    return result;
  }, [activeCategory, search, sortBy]);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#25251f]">
    
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#8b7555]">
          Curated for everyday living
        </p>

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
              The Collection
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-black/60 sm:text-base">
              Thoughtfully selected essentials. Timeless pieces,
              effortless styling, and everyday comfort.
            </p>
          </div>

          <p className="text-sm text-black/55">
            {filteredProducts.length} products
          </p>
        </div>
      </section>

      {/* Search and controls */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-y border-black/10 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"
            />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              aria-label="Search products"
              className="w-full border border-black/15 bg-transparent py-3 pl-10 pr-10 text-sm outline-none transition focus:border-black"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black/50"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowFilters((value) => !value)}
              className="flex items-center gap-2 border border-black/15 px-4 py-3 text-sm hover:border-black"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            <label className="flex items-center gap-2 text-sm">
              <span className="text-black/55">Sort:</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="max-w-40 border border-black/15 bg-transparent px-3 py-3 outline-none focus:border-black"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 py-5">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => selectCategory(category)}
              className={`border px-4 py-2 text-xs transition sm:text-sm ${
                activeCategory === category
                  ? "border-[#25251f] bg-[#25251f] text-white"
                  : "border-black/15 bg-transparent hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Optional filter panel */}
        {showFilters && (
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border border-black/10 p-4">
            <p className="text-sm text-black/60">
              Filter by category
            </p>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => selectCategory(category)}
                  className={`px-3 py-2 text-xs ${
                    activeCategory === category
                      ? "bg-[#25251f] text-white"
                      : "border border-black/15 hover:border-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearch("");
                setSortBy("featured");
                navigate("/products");
              }}
              className="text-sm underline underline-offset-4"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 pb-16 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <article key={product.id} className="group min-w-0">
                <div className="relative overflow-hidden bg-[#efeee9]">
                  <Link
                    to={`/product/${product.slug}`}
                    aria-label={`View ${product.name}`}
                    className="block aspect-[3/4] overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {product.isNew && (
                    <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[10px] uppercase tracking-wider">
                      New
                    </span>
                  )}

                  {product.oldPrice &&
                    product.oldPrice > product.price && (
                      <span className="absolute left-3 top-10 bg-[#25251f] px-2 py-1 text-[10px] text-white">
                        Sale
                      </span>
                    )}

                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={
                      wishlist.includes(product.id)
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    }
                    className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white transition ${
                      wishlist.includes(product.id)
                        ? "text-red-600"
                        : "text-black hover:text-red-600"
                    }`}
                  >
                    <Heart
                      size={17}
                      fill={
                        wishlist.includes(product.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => addToBag(product)}
                    className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 bg-[#25251f] px-3 py-3 text-xs text-white transition-transform duration-300 group-hover:translate-y-0 sm:text-sm"
                  >
                    <ShoppingBag size={15} />
                    Add to Bag
                  </button>
                </div>

                <div className="pt-3">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <p className="truncate text-[10px] uppercase tracking-[0.15em] text-black/50 sm:text-xs">
                      {product.category}
                    </p>

                    <span className="flex shrink-0 items-center gap-1 text-xs">
                      <Star
                        size={12}
                        fill="currentColor"
                        className="text-[#a88954]"
                      />
                      {product.rating}
                    </span>
                  </div>

                  <Link
                    to={`/product/${product.slug}`}
                    className="group/title flex items-start justify-between gap-2"
                  >
                    <h2 className="text-sm font-medium leading-5 transition group-hover/title:text-[#8b7555] sm:text-base">
                      {product.name}
                    </h2>

                    <ArrowUpRight
                      size={16}
                      className="mt-0.5 shrink-0 opacity-0 transition group-hover/title:opacity-100"
                    />
                  </Link>

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium">
                      {formatPrice(product.price)}
                    </span>

                    {product.oldPrice &&
                      product.oldPrice > product.price && (
                        <span className="text-xs text-black/40 line-through">
                          {formatPrice(product.oldPrice)}
                        </span>
                      )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-64 flex-col items-center justify-center py-16 text-center">
            <Search size={32} className="mb-4 text-black/30" />

            <h2 className="text-lg font-medium">
              No products found
            </h2>

            <p className="mt-2 text-sm text-black/55">
              Try another search or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
                setSortBy("featured");
                navigate("/products");
              }}
              className="mt-5 border border-black px-5 py-3 text-sm hover:bg-black hover:text-white"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

     
    </main>
  );
}
