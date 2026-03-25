export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Prestige Properties
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#listings" className="hover:text-amber-500 transition-colors">Listings</a>
            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="#why-us" className="hover:text-amber-500 transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Book a Viewing
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Your Trusted Real Estate Partner
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Find the Home You&apos;ve Always Dreamed Of
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-10">
            Prestige Properties connects buyers and sellers with luxury homes,
            family residences, and investment properties across the city.
          </p>

          {/* Search bar */}
          <div className="bg-white rounded-xl p-2 flex flex-col sm:flex-row gap-2 max-w-2xl shadow-xl">
            <input
              type="text"
              placeholder="Search by city, neighborhood, or ZIP..."
              className="flex-1 px-4 py-3 text-gray-800 rounded-lg outline-none text-sm"
            />
            <select className="px-4 py-3 text-gray-600 rounded-lg text-sm bg-gray-50 border border-gray-200 outline-none">
              <option>Any Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Condo</option>
              <option>Villa</option>
            </select>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
              Search
            </button>
          </div>

          <div className="mt-10 flex gap-8 text-sm text-gray-400">
            <div>
              <span className="block text-2xl font-bold text-white">1,200+</span>
              Active Listings
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">850+</span>
              Happy Clients
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">15+</span>
              Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="listings" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-2">
                Featured
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Latest Properties</h2>
            </div>
            <a
              href="#"
              className="hidden sm:inline-flex text-sm font-semibold text-amber-500 hover:text-amber-600 transition-colors"
            >
              View all listings &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="relative overflow-hidden h-52">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {listing.badge}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-xs font-medium mb-1">{listing.location}</p>
                  <h3 className="font-semibold text-lg mb-3">{listing.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{listing.beds} beds</span>
                    <span>{listing.baths} baths</span>
                    <span>{listing.sqft} sqft</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{listing.price}</span>
                    <button className="text-sm font-semibold text-amber-500 hover:text-amber-600 transition-colors">
                      View Details &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <div key={s.title} className="text-center p-6">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us + Testimonials */}
      <section id="why-us" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              We Put Your Interests First, Every Time
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              With over 15 years in the market, Prestige Properties has built a
              reputation for honest advice, seamless transactions, and exceptional
              client care. We&apos;re not just selling homes — we&apos;re helping you build
              your future.
            </p>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3 text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 bg-amber-500">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-amber-100 mb-10">
            Let one of our expert agents guide you through every step of the process.
          </p>
          <form className="bg-white rounded-2xl p-8 shadow-xl text-left grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows={3}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                placeholder="Tell us what you're looking for..."
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3.5 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-amber-500 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs">P</span>
            </div>
            <span className="text-white font-semibold">Prestige Properties</span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Prestige Properties. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const listings = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$2,450,000",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    badge: "For Sale",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    location: "Manhattan, NY",
    price: "$8,900/mo",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    badge: "For Rent",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  },
  {
    id: 3,
    title: "Seaside Family Home",
    location: "Malibu, CA",
    price: "$1,875,000",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    badge: "For Sale",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  },
];

const services = [
  {
    icon: "🏡",
    title: "Buy a Home",
    desc: "Browse thousands of listings and find the perfect home with expert guidance.",
  },
  {
    icon: "💰",
    title: "Sell Your Home",
    desc: "Get the best price with our data-driven pricing strategy and broad network.",
  },
  {
    icon: "🔑",
    title: "Rentals",
    desc: "Short and long-term rental options for every lifestyle and budget.",
  },
  {
    icon: "📊",
    title: "Investment",
    desc: "Identify high-yield investment properties with our market analysis tools.",
  },
];

const reasons = [
  "Dedicated personal agent from start to finish",
  "Transparent pricing with no hidden fees",
  "Access to off-market and exclusive listings",
  "In-house mortgage and legal support",
  "Proven track record with 850+ satisfied clients",
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "First-time Buyer",
    quote:
      "Prestige Properties made buying my first home stress-free. My agent was patient, knowledgeable, and always available to answer questions.",
  },
  {
    name: "David L.",
    role: "Property Investor",
    quote:
      "Their market insights helped me identify an undervalued property that has already appreciated 18% in 18 months. Exceptional team.",
  },
];
