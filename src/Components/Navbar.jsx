import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingBag,
  UserRound,
} from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/category/shop" },
    { name: "Men", path: "/category/men" },
    { name: "Women", path: "/category/women" },
    { name: "Accessories", path: "/category/accessories" },
    { name: "New Arrivals", path: "/category/newest" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-neutral-900 shadow-sm">
      {/* Announcement Bar */}
      <div className="bg-neutral-950 px-4 py-2 text-center text-xs tracking-wide text-white sm:text-sm">
        Free shipping on orders over ₹1,999
      </div>

      {/* Main Navbar */}
      <div className="border-b border-neutral-200">
        <div className="transition-all duration-100 mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="rounded-md p-2 transition hover:bg-neutral-100 lg:hidden"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

         
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="text-xl font-black tracking-[0.18em] sm:text-2xl"
          >
            Shopping<span className="text-red-700">K</span>aro
          </Link>

          
          <nav className="hidden items-center gap-6 lg:flex xl:gap-8 transition-all duration-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-neutral-700 transition hover:text-red-700"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle search"
              aria-expanded={searchOpen}
              className="rounded-full p-2 transition hover:bg-neutral-100"
            >
              <Search size={21} strokeWidth={1.7} />
            </button>

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="hidden rounded-full p-2 transition hover:bg-neutral-100 sm:inline-flex"
            >
              <Heart size={21} strokeWidth={1.7} />
            </Link>

            <Link
              to="/login"
              aria-label="My account"
              className="hidden rounded-full p-2 transition hover:bg-neutral-100 sm:inline-flex"
            >
              <UserRound size={21} strokeWidth={1.7} />
            </Link>

            <Link
              to="/cart"
              aria-label="Shopping bag"
              className="relative rounded-full p-2 transition hover:bg-neutral-100"
            >
              <ShoppingBag size={21} strokeWidth={1.7} />
              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-neutral-950 px-1 text-[10px] text-white">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <form
          action="/search"
          method="GET"
          className="border-b border-neutral-200 bg-white px-4 py-4"
        >
          <div className="mx-auto flex max-w-2xl items-center gap-3">
            <Search size={20} className="text-neutral-500" />
            <input
              type="search"
              name="q"
              autoFocus
              placeholder="Search clothes, shoes and accessories..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
              className="rounded p-1 hover:bg-neutral-100"
            >
              <X size={20} />
            </button>
          </div>
        </form>
      )}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-b border-neutral-200 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMobileMenu}
                className="border-b border-neutral-100 py-3.5 text-sm font-medium text-neutral-800 transition hover:pl-2 hover:text-neutral-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/wishlist"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 border-b border-neutral-100 py-3.5 text-sm"
            >
              <Heart size={18} />
              Wishlist
            </Link>

            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 py-3.5 text-sm"
            >
              <UserRound size={18} />
              My Account
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
