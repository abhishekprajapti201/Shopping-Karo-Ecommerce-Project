import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Tag,
  Truck,
  ShieldCheck,
} from "lucide-react";

const initialCart = [
  {
    id: 1,
    slug: "classic-linen-shirt",
    name: "Classic Linen Shirt",
    category: "Men's Clothing",
    price: 2499,
    oldPrice: 3299,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
    color: "White",
    size: "M",
    quantity: 1,
  },
  {
    id: 2,
    slug: "minimal-everyday-tote",
    name: "Minimal Everyday Tote",
    category: "Accessories",
    price: 1899,
    oldPrice: 2499,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600",
    color: "Beige",
    size: "One Size",
    quantity: 1,
  },
  {
    id: 3,
    slug: "essential-white-sneakers",
    name: "Essential White Sneakers",
    category: "Footwear",
    price: 3499,
    oldPrice: 4299,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    color: "White / Red",
    size: "9",
    quantity: 1,
  },
];

const formatPrice = (price) => `₹${price.toLocaleString("en-IN")}`;

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCart);
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const discount = appliedCoupon ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal === 0 || subtotal >= 2999 ? 0 : 99;
  const total = subtotal - discount + shipping;

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const applyCoupon = (e) => {
    e.preventDefault();

    if (coupon.trim().toUpperCase() === "ELORA10") {
      setAppliedCoupon(true);
      setCouponMessage("Coupon applied! You saved 10%.");
    } else {
      setAppliedCoupon(false);
      setCouponMessage("Invalid coupon code. Try ELORA10.");
    }
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 py-10 sm:px-8 sm:py-14 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <span className="text-black">Shopping Bag</span>
        </div>

        {/* Page Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <ShoppingBag size={24} strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Your Selection
              </span>
            </div>

            <h1 className="text-3xl font-light tracking-tight sm:text-5xl">
              Shopping Bag
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Review your pieces before checking out.
            </p>
          </div>

          <p className="text-sm text-gray-600">
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}{" "}
            {cartItems.reduce((sum, item) => sum + item.quantity, 0) === 1
              ? "item"
              : "items"}
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
            <ShoppingBag
              size={48}
              strokeWidth={1}
              className="mb-5 text-gray-400"
            />

            <h2 className="text-2xl font-light">Your shopping bag is empty</h2>

            <p className="mt-3 text-sm text-gray-500">
              Explore our collection and find something you love.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center gap-3 bg-black px-7 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-gray-800"
            >
              Continue Shopping
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_380px]">
            {/* Cart Items */}
            <section>
              <div className="mb-4 hidden grid-cols-[1fr_120px_100px] border-b border-gray-200 pb-3 text-[10px] uppercase tracking-[0.2em] text-gray-500 sm:grid">
                <span>Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Total</span>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <article
                    key={item.id}
                    className="grid grid-cols-[100px_1fr] gap-4 py-6 sm:grid-cols-[120px_1fr_120px_100px] sm:gap-5"
                  >
                    <Link
                      to={`/product/${item.slug}`}
                      className="overflow-hidden bg-[#f0eee9]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="aspect-[3/4] h-full w-full object-cover"
                      />
                    </Link>

                    <div className="flex min-w-0 flex-col items-start">
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">
                        {item.category}
                      </p>

                      <Link
                        to={`/product/${item.slug}`}
                        className="mt-2 text-sm font-medium hover:underline sm:text-base"
                      >
                        {item.name}
                      </Link>

                      <p className="mt-2 text-xs text-gray-500">
                        Colour: {item.color}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Size: {item.size}
                      </p>

                      <p className="mt-3 text-sm font-medium">
                        {formatPrice(item.price)}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="mt-auto flex items-center gap-1 pt-4 text-xs text-gray-500 hover:text-red-600"
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>

                      {/* Mobile quantity */}
                      <div className="mt-4 flex items-center border border-gray-300 sm:hidden">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Decrease quantity"
                          className="p-2"
                        >
                          <Minus size={13} />
                        </button>

                        <span className="min-w-8 text-center text-sm">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                          className="p-2"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    {/* Desktop quantity */}
                    <div className="hidden items-start justify-center sm:flex">
                      <div className="flex items-center border border-gray-300">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Decrease quantity"
                          className="p-2"
                        >
                          <Minus size={13} />
                        </button>

                        <span className="min-w-8 text-center text-sm">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Increase quantity"
                          className="p-2"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    <p className="hidden text-right text-sm font-medium sm:block">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </article>
                ))}
              </div>

              <Link
                to="/products"
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] hover:underline"
              >
                <ArrowRight size={15} className="rotate-180" />
                Continue Shopping
              </Link>
            </section>

            {/* Order Summary */}
            <aside className="border border-gray-200 bg-white p-5 sm:p-7">
              <h2 className="text-lg font-medium">Order Summary</h2>

              <div className="mt-6 space-y-4 border-b border-gray-200 pb-5 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Discount</span>
                  <span className={discount ? "text-green-700" : ""}>
                    {discount ? `−${formatPrice(discount)}` : "₹0"}
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Shipping</span>
                  <span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
                </div>
              </div>

              {/* Coupon */}
              <form onSubmit={applyCoupon} className="mt-5">
                <label className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider">
                  <Tag size={15} />
                  Discount Code
                </label>

                <div className="flex">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter code"
                    className="min-w-0 flex-1 border border-gray-300 px-3 py-3 text-sm outline-none focus:border-black"
                  />

                  <button
                    type="submit"
                    className="bg-black px-4 text-xs uppercase tracking-wider text-white hover:bg-gray-800"
                  >
                    Apply
                  </button>
                </div>

                {couponMessage && (
                  <p
                    className={`mt-2 text-xs ${
                      appliedCoupon ? "text-green-700" : "text-red-600"
                    }`}
                  >
                    {couponMessage}
                  </p>
                )}

                <p className="mt-2 text-xs text-gray-400">Demo code: ELORA10</p>
              </form>

              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="font-medium">Total</span>
                <span className="text-xl font-medium">
                  {formatPrice(total)}
                </span>
              </div>

              <p className="mt-2 text-right text-xs text-gray-400">
                Taxes included where applicable.
              </p>

              <Link
                to="/checkout"
                className="mt-6 flex w-full items-center justify-center gap-3 bg-black px-5 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-gray-800"
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </Link>

              <div className="mt-6 space-y-4 border-t border-gray-200 pt-5">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <Truck size={18} />
                  Free shipping on orders above ₹2,999
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <ShieldCheck size={18} />
                  Secure checkout experience
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
