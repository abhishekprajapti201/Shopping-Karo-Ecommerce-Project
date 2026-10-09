
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Verified Customer",
    review:
      "Beautiful quality and perfect fitting. The entire shopping experience felt premium!",
    rating: 5,
    initial: "P",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Verified Customer",
    review:
      "Loved the fabric and minimalist design. Definitely ordering again!",
    rating: 5,
    initial: "R",
  },
  {
    id: 3,
    name: "Ananya Singh",
    location: "Verified Customer",
    review:
      "Elegant styles, great packaging, and the quality exceeded my expectations.",
    rating: 5,
    initial: "A",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#F5F1EA] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A58A68]">
            Customer Love
          </p>

          <h2 className="text-2xl font-light tracking-tight text-neutral-900 sm:text-3xl">
            What Our Customers Say
          </h2>

          <p className="mt-2 text-sm text-neutral-500">
            A little love from our community.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="rounded-sm border border-[#E7DED2] bg-white p-5 transition-shadow duration-300 hover:shadow-md sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-1 text-[#B89A68]">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                <Quote size={22} className="text-[#D8C8B3]" />
              </div>

              <p className="min-h-[66px] text-sm leading-6 text-neutral-600">
                “{item.review}”
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-neutral-100 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1E8DC] font-serif text-lg text-[#8D7354]">
                  {item.initial}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-400">
                    {item.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
