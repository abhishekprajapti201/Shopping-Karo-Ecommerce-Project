import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
  RotateCcw,
  Ruler,
} from "lucide-react";

const products = [
  {
    id: 1,
    slug: "classic-linen-shirt",
    name: "Classic Linen Shirt",
    category: "Men",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
    reviews: 124,
    isNew: true,
    description:
      "A timeless wardrobe essential crafted for effortless everyday style. Designed with a relaxed silhouette, breathable fabric, and carefully considered details.",
    material: "Premium linen blend",
    colors: ["#d8c8ae", "#f1eee6", "#33332f"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Breathable, lightweight fabric",
      "Relaxed, versatile fit",
      "Button-down front",
      "Designed for everyday wear",
    ],
  },
  {
    id: 2,
    slug: "minimal-everyday-tote",
    name: "Minimal Everyday Tote",
    category: "Bags",
    price: 1499,
    oldPrice: 1899,
    rating: 4.6,
    reviews: 86,
    isNew: true,
    description:
      "Your everyday companion with a clean, understated silhouette. A versatile tote designed to complement both casual and elevated looks.",
    material: "Textured synthetic leather",
    colors: ["#a58b70", "#33332f", "#e8e0d4"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Minimal everyday design",
      "Comfortable carry handles",
      "Versatile styling",
      "Easy-to-coordinate neutral colors",
    ],
  },
  {
    id: 3,
    slug: "essential-white-sneakers",
    name: "Essential White Sneakers",
    category: "Footwear",
    price: 2799,
    oldPrice: 3499,
    rating: 4.9,
    reviews: 213,
    isNew: false,
    description:
      "Clean lines and everyday comfort come together in these versatile sneakers. An understated design that works from casual outings to weekend plans.",
    material: "Synthetic upper with rubber outsole",
    colors: ["#f3f1e9", "#33332f"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Versatile everyday silhouette",
      "Comfortable padded interior",
      "Durable rubber outsole",
      "Easy-to-style neutral design",
    ],
  },
  {
    id: 4,
    slug: "womens-soft-knit-top",
    name: "Women's Soft Knit Top",
    category: "Women",
    price: 1299,
    oldPrice: 1699,
    rating: 4.5,
    reviews: 74,
    isNew: true,
    description:
      "An effortless knit top with a soft feel and an elegant, minimal finish. A versatile piece for layering or wearing on its own.",
    material: "Soft knit blend",
    colors: ["#e7ddd0", "#b6b9a5", "#33332f"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Soft-touch knit fabric",
      "Comfortable everyday fit",
      "Easy layering",
      "Minimal, timeless styling",
    ],
  },
  {
    id: 5,
    slug: "premium-leather-watch",
    name: "Premium Leather Watch",
    category: "Watches",
    price: 3299,
    oldPrice: 3999,
    rating: 4.7,
    reviews: 96,
    isNew: false,
    description:
      "A refined timepiece featuring a classic dial and a timeless strap design. Made to complement your everyday wardrobe with understated sophistication.",
    material: "Metal case with leather strap",
    colors: ["#6b4936", "#242420"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Classic dial design",
      "Timeless strap styling",
      "Versatile for daily wear",
      "Thoughtful gift option",
    ],
  },
  {
    id: 6,
    slug: "everyday-crossbody-bag",
    name: "Everyday Crossbody Bag",
    category: "Bags",
    price: 2199,
    oldPrice: 2799,
    rating: 4.6,
    reviews: 61,
    isNew: true,
    description:
      "A compact crossbody bag designed for days when you want to travel light. Its versatile silhouette makes it a natural choice for everyday styling.",
    material: "Textured synthetic leather",
    colors: ["#b7a18b", "#33332f"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Compact everyday design",
      "Crossbody carry style",
      "Versatile neutral color",
      "Suitable for everyday essentials",
    ],
  },
  {
    id: 7,
    slug: "relaxed-fit-t-shirt",
    name: "Relaxed Fit T-Shirt",
    category: "Men",
    price: 899,
    oldPrice: 1199,
    rating: 4.4,
    reviews: 108,
    isNew: false,
    description:
      "A comfortable essential with a relaxed fit and a clean, uncomplicated finish. An easy choice for everyday outfits and casual layering.",
    material: "Cotton blend",
    colors: ["#f3f1e9", "#33332f", "#8b9b86"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Relaxed everyday fit",
      "Soft-touch fabric",
      "Easy to layer",
      "Versatile wardrobe essential",
    ],
  },
  {
    id: 8,
    slug: "elegant-womens-dress",
    name: "Elegant Women's Dress",
    category: "Women",
    price: 2499,
    oldPrice: 3199,
    rating: 4.8,
    reviews: 152,
    isNew: true,
    description:
      "A sophisticated dress with a graceful silhouette and a timeless look. Style it with minimal accessories for an effortless day-to-evening outfit.",
    material: "Lightweight woven blend",
    colors: ["#c9b4a5", "#33332f"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Elegant, versatile silhouette",
      "Lightweight woven fabric",
      "Suitable for multiple occasions",
      "Easy to accessorize",
    ],
  },
  {
    id: 9,
    slug: "minimal-gold-earrings",
    name: "Minimal Gold Earrings",
    category: "Accessories",
    price: 799,
    oldPrice: 999,
    rating: 4.3,
    reviews: 47,
    isNew: false,
    description:
      "A minimal jewelry accent designed to bring a subtle finishing touch to everyday outfits and special occasions.",
    material: "Gold-tone alloy",
    colors: ["#c8a56b"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Minimal design",
      "Gold-tone finish",
      "Versatile styling",
      "A thoughtful gifting option",
    ],
  },
  {
    id: 10,
    slug: "casual-everyday-loafers",
    name: "Casual Everyday Loafers",
    category: "Footwear",
    price: 1999,
    oldPrice: 2499,
    rating: 4.5,
    reviews: 58,
    isNew: true,
    description:
      "A versatile pair of loafers with a classic shape and a relaxed, everyday feel. Easy to pair with tailored trousers, denim, or casual looks.",
    material: "Synthetic upper",
    colors: ["#8c674b", "#33332f"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    images: [
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Classic loafer silhouette",
      "Versatile everyday style",
      "Easy slip-on design",
      "Pairs with casual and smart outfits",
    ],
  },
  {
    id: 11,
    slug: "modern-frame-sunglasses",
    name: "Modern Frame Sunglasses",
    category: "Accessories",
    price: 999,
    oldPrice: 1399,
    rating: 4.2,
    reviews: 39,
    isNew: false,
    description:
      "A modern accessory with a clean frame and a versatile silhouette. Finish your everyday look with a subtle statement.",
    material: "Synthetic frame",
    colors: ["#33332f", "#8b7355"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Modern frame design",
      "Versatile everyday styling",
      "Lightweight feel",
      "Easy to pair with casual looks",
    ],
  },
  {
    id: 12,
    slug: "classic-silver-watch",
    name: "Classic Silver Watch",
    category: "Watches",
    price: 2899,
    oldPrice: 3599,
    rating: 4.7,
    reviews: 81,
    isNew: true,
    description:
      "A clean and contemporary timepiece with a silver-tone finish. Designed to transition effortlessly between everyday wear and more formal occasions.",
    material: "Metal case and bracelet",
    colors: ["#c8c8c4", "#33332f"],
    sizes: ["One Size"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=85",
    ],
    highlights: [
      "Contemporary silver-tone finish",
      "Clean, minimal dial",
      "Versatile everyday styling",
      "Pairs well with formal and casual looks",
    ],
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.slug === slug);

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [pinCode, setPinCode] = useState("");
  const [deliveryMessage, setDeliveryMessage] = useState("");
  const [cartMessage, setCartMessage] = useState("");

  if (!product) {
    return (
      <main className="flex min-h-[65vh] flex-col items-center justify-center bg-[#faf9f6] px-5 text-center">
        <ShoppingBag size={36} className="mb-5 text-[#a48b68]" />

        <h1 className="font-serif text-3xl">Product not found</h1>

        <p className="mt-3 text-sm text-[#77746e]">
          This product may have been removed or the link is incorrect.
        </p>

        <Link
          to="/products"
          className="mt-6 bg-[#242420] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white"
        >
          Browse Products
        </Link>
      </main>
    );
  }

  const discount =
    product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100,
        )
      : 0;

  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);

  const addToBag = () => {
    if (product.sizes.length > 1 && !selectedSize) {
      setCartMessage("Please select a size before adding to bag.");
      return;
    }

    const cartItem = {
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize || product.sizes[0],
      color: product.colors[selectedColor],
      quantity,
    };

    try {
      const existingCart = JSON.parse(
        sessionStorage.getItem("elora_cart") || "[]",
      );

      const existingIndex = existingCart.findIndex(
        (item) =>
          item.productId === cartItem.productId &&
          item.size === cartItem.size &&
          item.color === cartItem.color,
      );

      if (existingIndex !== -1) {
        existingCart[existingIndex].quantity =
          (Number(existingCart[existingIndex].quantity) || 0) + quantity;
      } else {
        existingCart.push(cartItem);
      }

      sessionStorage.setItem("elora_cart", JSON.stringify(existingCart));
      setCartMessage("Product added to your bag.");
    } catch {
      setCartMessage("Unable to update your bag. Please try again.");
    }
  };

  const checkDelivery = (event) => {
    event.preventDefault();

    if (!/^\d{6}$/.test(pinCode)) {
      setDeliveryMessage("Enter a valid 6-digit PIN code.");
      return;
    }

    setDeliveryMessage(
      `PIN code ${pinCode} entered. Confirm delivery availability at checkout.`,
    );
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#242420]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1440px] px-4 pt-5 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest text-[#89847c] sm:text-xs">
          <Link to="/" className="hover:text-[#8b7355]">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[#8b7355]">
            Shop
          </Link>
          <span>/</span>
          <Link
            to={`/category/${product.category.toLowerCase()}`}
            className="hover:text-[#8b7355]"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="max-w-36 truncate text-[#242420] sm:max-w-none">
            {product.name}
          </span>
        </div>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mt-5 inline-flex items-center gap-2 text-xs text-[#77746e] hover:text-[#242420]"
        >
          <ArrowLeft size={15} />
          Back
        </button>
      </div>

      {/* Product gallery and details */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-4 pb-12 pt-5 sm:px-6 md:gap-10 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:pb-20 lg:pt-8">
        <div className="min-w-0">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#eeece6] sm:aspect-[5/5] lg:aspect-[4/5]">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="h-full w-full object-cover transition duration-500"
            />

            {product.isNew && (
              <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-widest">
                New Arrival
              </span>
            )}

            <button
              type="button"
              onClick={() =>
                setActiveImage((previous) =>
                  previous === 0 ? product.images.length - 1 : previous - 1,
                )
              }
              aria-label="Previous product image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 hover:bg-white sm:left-4 sm:h-11 sm:w-11"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveImage(
                  (previous) => (previous + 1) % product.images.length,
                )
              }
              aria-label="Next product image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 hover:bg-white sm:right-4 sm:h-11 sm:w-11"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3 sm:mt-4 sm:gap-4">
            {product.images.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => setActiveImage(index)}
                aria-label={`View product image ${index + 1}`}
                className={`aspect-[4/5] overflow-hidden border-2 bg-[#eeece6] ${
                  activeImage === index
                    ? "border-[#8b7355]"
                    : "border-transparent hover:border-[#d8cbb8]"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a48b68] sm:text-xs">
            ShoppingKaro / {product.category}
          </p>

          <h1 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Star size={15} fill="#b08b52" stroke="#b08b52" />
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
            <span className="text-sm text-[#aaa49a]">|</span>
            <span className="text-xs text-[#77746e]">
              {product.reviews} reviews
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-2xl font-semibold sm:text-3xl">
              {formatPrice(product.price)}
            </span>

            {product.oldPrice > product.price && (
              <>
                <span className="text-base text-[#9c968d] line-through">
                  {formatPrice(product.oldPrice)}
                </span>
                <span className="bg-[#e9eee3] px-2.5 py-1.5 text-[10px] font-semibold text-[#536746]">
                  {discount}% OFF
                </span>
              </>
            )}
          </div>

          <p className="mt-5 text-sm leading-7 text-[#77746e]">
            {product.description}
          </p>

          <div className="my-6 border-t border-[#e7e1d8]" />

          {/* Colors */}
          <div>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest">
                Color
              </h2>
              <span className="text-xs text-[#77746e]">
                {selectedColor + 1} of {product.colors.length}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {product.colors.map((color, index) => (
                <button
                  type="button"
                  key={color}
                  onClick={() => setSelectedColor(index)}
                  aria-label={`Select color ${index + 1}`}
                  aria-pressed={selectedColor === index}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 ${
                    selectedColor === index
                      ? "border-[#8b7355]"
                      : "border-transparent"
                  }`}
                >
                  <span
                    className="h-6 w-6 rounded-full border border-black/10"
                    style={{ backgroundColor: color }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest">
                Select Size
              </h2>

              {product.sizes.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setCartMessage(
                      "Please check the product sizing before ordering.",
                    )
                  }
                  className="flex items-center gap-1 text-xs text-[#8b7355]"
                >
                  <Ruler size={13} />
                  Size guide
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setCartMessage("");
                  }}
                  aria-pressed={selectedSize === size}
                  className={`flex min-h-11 min-w-12 items-center justify-center border px-4 text-xs font-medium ${
                    selectedSize === size
                      ? "border-[#242420] bg-[#242420] text-white"
                      : "border-[#e1dbd1] bg-white hover:border-[#8b7355]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-7">
            <h2 className="text-xs font-semibold uppercase tracking-widest">
              Quantity
            </h2>

            <div className="mt-3 inline-flex h-12 items-center border border-[#e1dbd1] bg-white">
              <button
                type="button"
                onClick={() =>
                  setQuantity((previous) => Math.max(1, previous - 1))
                }
                aria-label="Decrease quantity"
                className="flex h-full w-12 items-center justify-center hover:bg-[#f1eee8]"
              >
                <Minus size={15} />
              </button>

              <span className="w-10 text-center text-sm">{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((previous) => Math.min(10, previous + 1))
                }
                aria-label="Increase quantity"
                className="flex h-full w-12 items-center justify-center hover:bg-[#f1eee8]"
              >
                <Plus size={15} />
              </button>
            </div>
          </div>

          {/* Cart and wishlist */}
          <div className="mt-7 flex gap-3">
            <button
              type="button"
              onClick={addToBag}
              className="flex min-h-14 flex-1 items-center justify-center gap-2 bg-[#242420] px-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#8b7355] sm:tracking-[0.2em]"
            >
              <ShoppingBag size={17} />
              Add to Bag
            </button>

            <button
              type="button"
              onClick={() => setIsWishlisted((previous) => !previous)}
              aria-label={
                isWishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
              aria-pressed={isWishlisted}
              className={`flex h-14 w-14 shrink-0 items-center justify-center border ${
                isWishlisted
                  ? "border-[#a36b65] bg-[#f5e8e6] text-[#a36b65]"
                  : "border-[#e1dbd1] bg-white hover:border-[#8b7355]"
              }`}
            >
              <Heart size={19} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
          </div>

          {cartMessage && (
            <p
              role="status"
              className={`mt-3 text-sm ${
                cartMessage.startsWith("Product added")
                  ? "text-green-700"
                  : "text-[#a36b65]"
              }`}
            >
              {cartMessage}
            </p>
          )}

          {/* Delivery PIN */}
          <form
            onSubmit={checkDelivery}
            className="mt-7 border border-[#e7e1d8] bg-white p-4 sm:p-5"
          >
            <div className="flex items-center gap-3">
              <Truck size={19} className="shrink-0 text-[#8b7355]" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest">
                  Check Delivery
                </h3>
                <p className="mt-1 text-xs text-[#77746e]">
                  Enter your PIN code to check delivery information.
                </p>
              </div>
            </div>

            <div className="mt-4 flex">
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={pinCode}
                onChange={(event) => {
                  setPinCode(event.target.value.replace(/\D/g, "").slice(0, 6));
                  setDeliveryMessage("");
                }}
                placeholder="Enter 6-digit PIN code"
                aria-label="Delivery PIN code"
                className="min-w-0 flex-1 border border-r-0 border-[#e1dbd1] px-3 py-3 text-sm outline-none focus:border-[#8b7355]"
              />

              <button
                type="submit"
                className="shrink-0 bg-[#242420] px-4 text-[10px] font-semibold uppercase tracking-widest text-white hover:bg-[#8b7355]"
              >
                Check
              </button>
            </div>

            {deliveryMessage && (
              <p
                role="status"
                className="mt-3 text-xs leading-5 text-[#77746e]"
              >
                {deliveryMessage}
              </p>
            )}
          </form>

          {/* Service information */}
          <div className="mt-6 grid grid-cols-1 gap-4 border-y border-[#e7e1d8] py-5 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <Truck size={19} className="shrink-0 text-[#8b7355]" />
              <div>
                <p className="text-xs font-medium">Delivery</p>
                <p className="mt-1 text-[10px] text-[#89847c]">At checkout</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <RotateCcw size={19} className="shrink-0 text-[#8b7355]" />
              <div>
                <p className="text-xs font-medium">Returns</p>
                <p className="mt-1 text-[10px] text-[#89847c]">
                  Policy applies
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck size={19} className="shrink-0 text-[#8b7355]" />
              <div>
                <p className="text-xs font-medium">Secure Checkout</p>
                <p className="mt-1 text-[10px] text-[#89847c]">
                  Secure payment
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-7">
            <div className="flex flex-wrap gap-5 border-b border-[#e7e1d8] sm:gap-7">
              {[
                ["description", "Description"],
                ["details", "Details"],
                ["shipping", "Shipping"],
              ].map(([key, label]) => (
                <button
                  type="button"
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`border-b-2 pb-3 text-[10px] font-semibold uppercase tracking-widest transition sm:text-xs ${
                    activeTab === key
                      ? "border-[#8b7355] text-[#242420]"
                      : "border-transparent text-[#89847c] hover:text-[#242420]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="pt-5 text-sm leading-7 text-[#77746e]">
              {activeTab === "description" && <p>{product.description}</p>}

              {activeTab === "details" && (
                <div>
                  <p>
                    <span className="font-medium text-[#242420]">
                      Material:
                    </span>{" "}
                    {product.material}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <Check
                          size={15}
                          className="mt-1 shrink-0 text-[#8b7355]"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "shipping" && (
                <p>
                  Delivery timelines, shipping charges, and return eligibility
                  will be confirmed at checkout based on your address and the
                  store's actual policies.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-[#e7e1d8] bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a48b68]">
                  YOU MAY ALSO LIKE
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl">
                  Complete Your Look
                </h2>
              </div>

              <Link
                to="/products"
                className="flex shrink-0 items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest hover:text-[#8b7355] sm:text-xs"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link
                  to={`/product/${item.slug}`}
                  key={item.id}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="group min-w-0"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-[#eeece6]">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <p className="mt-3 text-[9px] uppercase tracking-widest text-[#8b7355] sm:text-[10px]">
                    {item.category}
                  </p>

                  <h3 className="mt-1 line-clamp-2 text-xs font-medium leading-5 sm:text-sm">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs font-semibold sm:text-sm">
                    {formatPrice(item.price)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default ProductDetails;
