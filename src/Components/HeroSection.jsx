
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F1EA]">
      <div className="mx-auto grid min-h-[600px] max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 lg:min-h-[680px] lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-16">

        {/* Left Content */}
        <div className="relative z-10 max-w-xl">
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            New Collection · 2026
          </span>

          <h1 className="text-5xl font-light leading-[1.08] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
            Style that
            <br />
            speaks
            <span className="font-serif italic text-red-700">
              {" "}for you.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600 sm:text-base">
            Discover timeless essentials and modern silhouettes crafted
            for your everyday elegance. Find your style, define your story.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-neutral-900 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-red-700 transition duration-600 ease-in-out"
            >
              Shop Collection
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/category/women"
              className="inline-flex items-center gap-2 border-b border-neutral-400 pb-2 text-sm font-medium text-neutral-800 transition hover:border-neutral-900"
            >
              Explore More
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-neutral-300 pt-6">
            <div>
              <p className="text-xl font-medium text-neutral-900">Premium</p>
              <p className="mt-1 text-xs text-neutral-500">Quality fabrics</p>
            </div>

            <div>
              <p className="text-xl font-medium text-neutral-900">Timeless</p>
              <p className="mt-1 text-xs text-neutral-500">Modern designs</p>
            </div>

            <div>
              <p className="text-xl font-medium text-neutral-900">Easy</p>
              <p className="mt-1 text-xs text-neutral-500">Everyday comfort</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -right-3 -top-3 h-32 w-32 border border-[#C8B69F] sm:-right-5 sm:-top-5 sm:h-44 sm:w-44" />

          <div className="relative aspect-[4/5] overflow-hidden bg-[#E4D9CC]">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
              alt="Premium modern fashion collection"
              className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
            />

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between bg-white/90 p-4 backdrop-blur-sm sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                  Featured Edit
                </p>
                <p className="mt-1 text-lg font-medium text-neutral-900">
                  The Everyday Collection
                </p>
              </div>

              <Link
                to="/shop"
                aria-label="Explore the featured collection"
                className="flex h-10 w-10 shrink-0 items-center justify-center bg-neutral-900 text-white transition hover:bg-[#A58A68]"
              >
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>

          <p className="mt-4 text-right text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            Less, but better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
