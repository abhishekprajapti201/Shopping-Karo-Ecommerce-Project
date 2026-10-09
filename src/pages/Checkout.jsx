
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CreditCard,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";

const checkoutProducts = [
  {
    id: 1,
    name: "Classic Linen Shirt",
    slug: "classic-linen-shirt",
    price: 2499,
    quantity: 1,
    size: "M",
    color: "White",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300",
  },
  {
    id: 2,
    name: "Minimal Everyday Tote",
    slug: "minimal-everyday-tote",
    price: 1899,
    quantity: 1,
    size: "One Size",
    color: "Beige",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=300",
  },
];

const formatPrice = (amount) =>
  `₹${amount.toLocaleString("en-IN")}`;

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    notes: "",
  });

  const subtotal = checkoutProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 2999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (orderPlaced) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#faf9f6] px-4 py-16">
        <div className="w-full max-w-xl border border-gray-200 bg-white px-6 py-12 text-center sm:px-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <CheckCircle2
              size={42}
              className="text-green-700"
              strokeWidth={1.5}
            />
          </div>

          <p className="mt-7 text-xs uppercase tracking-[0.25em] text-gray-500">
            Thank You
          </p>

          <h1 className="mt-3 text-3xl font-light sm:text-4xl">
            Order Details Submitted
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-gray-500">
            Your checkout form has been submitted in this demo.
            No actual order or payment has been created.
          </p>

          <div className="mt-8 border-y border-gray-200 py-5 text-left">
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-gray-500">Customer</span>
              <span className="text-right">
                {form.firstName} {form.lastName}
              </span>
            </div>

            <div className="mt-4 flex justify-between gap-4 text-sm">
              <span className="text-gray-500">Payment method</span>
              <span>
                {paymentMethod === "cod"
                  ? "Cash on Delivery"
                  : paymentMethod === "upi"
                    ? "UPI"
                    : "Credit / Debit Card"}
              </span>
            </div>

            <div className="mt-4 flex justify-between gap-4 text-sm">
              <span className="text-gray-500">Order total</span>
              <span className="font-medium">{formatPrice(total)}</span>
            </div>
          </div>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center justify-center gap-3 bg-black px-7 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-gray-800"
          >
            Continue Shopping
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  const inputClass =
    "mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black";

  const labelClass = "text-sm text-gray-700";

  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 py-10 sm:px-8 sm:py-14 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <Link to="/cart" className="hover:text-black">
            Shopping Bag
          </Link>
          <span>/</span>
          <span className="text-black">Checkout</span>
        </div>

        {/* Header */}
        <div className="mb-10 border-b border-gray-200 pb-6">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gray-500">
            Almost Yours
          </p>

          <h1 className="text-3xl font-light tracking-tight sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Complete your details to finish your purchase.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_390px]">
            {/* Left: Checkout Form */}
            <div className="space-y-8">
              {/* Contact Information */}
              <section className="border border-gray-200 bg-white p-5 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#f5f3ee]">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <h2 className="text-lg font-medium">
                      Contact Information
                    </h2>
                    <p className="mt-1 text-xs text-gray-500">
                      Where can we reach you?
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <label className={labelClass}>
                    First Name *
                    <input
                      className={inputClass}
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      placeholder="First name"
                      required
                    />
                  </label>

                  <label className={labelClass}>
                    Last Name *
                    <input
                      className={inputClass}
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      placeholder="Last name"
                      required
                    />
                  </label>

                  <label className={labelClass}>
                    Email Address *
                    <input
                      className={inputClass}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>

                  <label className={labelClass}>
                    Phone Number *
                    <input
                      className={inputClass}
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9+() -]{10,20}"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </label>
                </div>
              </section>

              {/* Shipping Address */}
              <section className="border border-gray-200 bg-white p-5 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#f5f3ee]">
                    <Truck size={19} />
                  </div>

                  <div>
                    <h2 className="text-lg font-medium">
                      Shipping Address
                    </h2>
                    <p className="mt-1 text-xs text-gray-500">
                      Where should we deliver your order?
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <label className={labelClass}>
                    Street Address *
                    <input
                      className={inputClass}
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      autoComplete="street-address"
                      placeholder="House number, street, area"
                      required
                    />
                  </label>

                  <label className={labelClass}>
                    Apartment, Suite, Landmark (Optional)
                    <input
                      className={inputClass}
                      name="apartment"
                      value={form.apartment}
                      onChange={handleChange}
                      placeholder="Apartment, landmark, etc."
                    />
                  </label>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className={labelClass}>
                      City *
                      <input
                        className={inputClass}
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        autoComplete="address-level2"
                        placeholder="Your city"
                        required
                      />
                    </label>

                    <label className={labelClass}>
                      State *
                      <input
                        className={inputClass}
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        autoComplete="address-level1"
                        placeholder="Your state"
                        required
                      />
                    </label>

                    <label className={labelClass}>
                      PIN Code *
                      <input
                        className={inputClass}
                        name="pincode"
                        value={form.pincode}
                        onChange={handleChange}
                        autoComplete="postal-code"
                        inputMode="numeric"
                        pattern="[0-9]{6}"
                        maxLength={6}
                        placeholder="6-digit PIN code"
                        required
                      />
                    </label>

                    <label className={labelClass}>
                      Country *
                      <select
                        className={inputClass}
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        autoComplete="country-name"
                        required
                      >
                        <option value="India">India</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                      </select>
                    </label>
                  </div>

                  <label className={labelClass}>
                    Order Notes (Optional)
                    <textarea
                      className={inputClass}
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Delivery instructions or other notes..."
                    />
                  </label>
                </div>
              </section>

              {/* Payment Method */}
              <section className="border border-gray-200 bg-white p-5 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#f5f3ee]">
                    <CreditCard size={19} />
                  </div>

                  <div>
                    <h2 className="text-lg font-medium">
                      Payment Method
                    </h2>
                    <p className="mt-1 text-xs text-gray-500">
                      Choose how you want to pay.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex cursor-pointer items-start gap-3 border border-gray-200 p-4 transition hover:border-black">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1 accent-black"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Cash on Delivery
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Pay when your order arrives.
                      </p>
                    </div>
                  </label>

                  <label className="flex cursor-pointer items-start gap-3 border border-gray-200 p-4 transition hover:border-black">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1 accent-black"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-medium">UPI</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Pay using your UPI app.
                      </p>
                    </div>
                  </label>

                  <label className="flex cursor-pointer items-start gap-3 border border-gray-200 p-4 transition hover:border-black">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1 accent-black"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Credit / Debit Card
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Card payments require a payment gateway.
                      </p>
                    </div>
                  </label>
                </div>

                {paymentMethod !== "cod" && (
                  <p className="mt-4 border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-800">
                    Demo only: online payment is not connected. Do not
                    enter any card or payment credentials here.
                  </p>
                )}
              </section>
            </div>

            {/* Right: Order Summary */}
            <aside className="border border-gray-200 bg-white p-5 sm:p-7 lg:sticky lg:top-6">
              <h2 className="text-lg font-medium">Your Order</h2>

              <div className="mt-6 space-y-5">
                {checkoutProducts.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4"
                  >
                    <Link
                      to={`/product/${item.slug}`}
                      className="relative h-24 w-20 shrink-0 bg-[#f0eee9]"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />

                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 text-[10px] text-white">
                        {item.quantity}
                      </span>
                    </Link>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        {item.color} / {item.size}
                      </p>
                      <p className="mt-3 text-sm">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4 border-t border-gray-200 pt-5 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Shipping</span>
                  <span>
                    {shipping === 0 ? "FREE" : formatPrice(shipping)}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-5">
                <span className="font-medium">Total</span>
                <span className="text-xl font-medium">
                  {formatPrice(total)}
                </span>
              </div>

              <p className="mt-2 text-right text-xs text-gray-400">
                INR · Taxes included where applicable.
              </p>

              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-3 bg-black px-5 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-gray-800"
              >
                Place Order
                <ArrowRight size={16} />
              </button>

              <div className="mt-5 flex items-start gap-3 border-t border-gray-200 pt-5">
                <ShieldCheck
                  size={19}
                  className="shrink-0 text-gray-500"
                />
                <p className="text-xs leading-5 text-gray-500">
                  Your information is used for this checkout demo only.
                  No payment will be processed.
                </p>
              </div>

              <Link
                to="/cart"
                className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500 hover:text-black"
              >
                <ArrowLeft size={14} />
                Return to shopping bag
              </Link>
            </aside>
          </div>
        </form>
      </div>
    </main>
  );
}
