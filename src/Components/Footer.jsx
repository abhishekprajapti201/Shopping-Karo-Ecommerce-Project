import { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail, Check } from "lucide-react";
import { Link } from "react-router-dom";

const shoppingLinks = [
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "Footwear", path: "/footwear" },
  { name: "Bags", path: "/bags" },
  { name: "Accessories", path: "/accessories" },
  { name: "New Arrivals", path: "/new-arrivals" },
];

const supportLinks = [
  { name: "Contact Us", path: "/contact" },
  { name: "FAQs", path: "/faqs" },
  { name: "Shipping & Delivery", path: "/shipping" },
  { name: "Returns & Exchanges", path: "/returns" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
];

const socialLinks = [
  { name: "IG", label: "Instagram", url: "https://www.instagram.com/" },
  { name: "FB", label: "Facebook", url: "https://www.facebook.com/" },
  { name: "X", label: "X", url: "https://x.com/" },
  { name: "YT", label: "YouTube", url: "https://www.youtube.com/" },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      setSubscribed(false);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      setSubscribed(false);
      return;
    }

    // Demo only: connect this form to your backend or email service.
    setMessage("Thank you for subscribing to ShoppingKaro!");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#171715] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-block text-3xl font-bold tracking-[0.25em]"
            >
              Shopping<span className="text-red-700">K</span>aro
              <span className="ml-1 text-[#c9b79c]">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Discover timeless style, thoughtful details and modern essentials.
              ShoppingKaro brings together fashion and everyday elegance for
              every moment.
            </p>

            {/* Social Links */}
            <div className="mt-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Follow Us
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-10 min-w-10 items-center justify-center border border-white/15 px-3 text-xs font-semibold text-white/70 transition hover:border-[#c9b79c] hover:bg-[#c9b79c] hover:text-[#171715]"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Shopping Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9b79c]">
              Shop
            </h3>

            <ul className="space-y-4">
              {shoppingLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9b79c]">
              Customer Care
            </h3>

            <ul className="space-y-4">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9b79c]">
              Get in Touch
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:support@elora.com"
                className="group flex items-start gap-3"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-[#c9b79c]" />
                <span className="text-sm text-white/55 transition group-hover:text-white">
                  support@elora.com
                </span>
              </a>

              <a
                href="tel:+911234567890"
                className="group flex items-start gap-3"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-[#c9b79c]" />
                <span className="text-sm text-white/55 transition group-hover:text-white">
                  +91 12345 67890
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#c9b79c]" />
                <span className="text-sm leading-6 text-white/55">
                  India
                  <br />
                  Serving customers across India
                </span>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#c9b79c] pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#c9b79c] transition hover:text-white"
            >
              Contact Us
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ShoppingKaro. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              to="/privacy-policy"
              className="text-xs text-white/40 transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-white/40 transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              to="/shipping"
              className="text-xs text-white/40 transition hover:text-white"
            >
              Shipping
            </Link>
          </div>

          <p className="text-xs tracking-wider text-white/40">MADE WITH CARE</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
