
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Men",
    subtitle: "Everyday essentials",
    slug: "men",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 2,
    name: "Women",
    subtitle: "Effortless elegance",
    slug: "women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    name: "Accessories",
    subtitle: "Complete your look",
    slug: "accessories",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 4,
    name: "Footwear",
    subtitle: "Step into style",
    slug: "footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 5,
    name: "New Arrivals",
    subtitle: "Fresh from the collection",
    slug: "new-arrivals",
    image:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 6,
    name: "Best Sellers",
    subtitle: "Customer favourites",
    slug: "best-sellers",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85",
  },
];

const CategorySection = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">

       
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end lg:mb-14">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#A58A68]">
              Find Your Style
            </p>

            <h2 className="text-3xl font-light tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Shop by <span className="font-serif italic">Category</span>
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-neutral-500">
              Explore our carefully selected collections and discover
              pieces that match your personal style.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex w-fit items-center gap-2 border-b border-neutral-900 pb-2 text-sm font-medium text-neutral-800 transition-colors duration-300 hover:text-[#A58A68]"
          >
            View All Products
            <ArrowUpRight size={17} />
          </Link>
        </div>

       
        <div className="flex flex-wrap gap-5 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
            
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F1EA]">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />

              
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-6">
                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/80">
                      {category.subtitle}
                    </p>

                    <h3 className="text-2xl font-medium tracking-wide sm:text-3xl">
                      {category.name}
                    </h3>

                    <p className="mt-3 inline-block border-b border-white/70 pb-1 text-xs uppercase tracking-[0.15em]">
                      Explore Collection
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900 transition-all duration-300 group-hover:bg-[#A58A68] group-hover:text-white">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
