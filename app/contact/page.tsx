export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Prestige Properties
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="/#listings" className="hover:text-amber-500 transition-colors">Listings</a>
            <a href="/#services" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="/#why-us" className="hover:text-amber-500 transition-colors">Why Us</a>
            <a href="/contact" className="text-amber-500 font-semibold">Contact</a>
          </div>
          <a
            href="/contact"
            className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Book a Viewing
          </a>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Contact Our Team
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Whether you&apos;re buying, selling, or just exploring — our agents are
            here to help. Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-8">
              Fill in the form and one of our agents will be in touch shortly.
            </p>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  I&apos;m interested in...
                </label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 bg-white text-gray-700">
                  <option value="">Select an option</option>
                  <option value="buy">Buying a property</option>
                  <option value="sell">Selling my property</option>
                  <option value="rent">Renting a property</option>
                  <option value="invest">Investment opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us more about what you're looking for..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3.5 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <p className="text-gray-500 text-sm">
                Prefer to reach us directly? Use any of the details below.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-medium text-gray-800">{item.value}</p>
                    {item.sub && (
                      <p className="text-sm text-gray-500">{item.sub}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-semibold text-base mb-4">Office Hours</h3>
              <ul className="space-y-2 text-sm">
                {officeHours.map((row) => (
                  <li key={row.day} className="flex justify-between text-gray-600">
                    <span>{row.day}</span>
                    <span className="font-medium text-gray-800">{row.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Agents */}
            <div>
              <h3 className="font-semibold text-base mb-4">Meet Our Agents</h3>
              <div className="grid grid-cols-2 gap-4">
                {agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="border border-gray-100 rounded-2xl p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {agent.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{agent.name}</p>
                      <p className="text-xs text-gray-500">{agent.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-72 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-400">
            <div className="text-4xl mb-2">📍</div>
            <p className="font-medium text-gray-500">123 Prestige Avenue, Beverly Hills, CA 90210</p>
            <p className="text-sm mt-1">Embed your Google Maps iframe here</p>
          </div>
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

const contactDetails = [
  {
    icon: "📍",
    label: "Office Address",
    value: "123 Prestige Avenue",
    sub: "Beverly Hills, CA 90210",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (310) 555-0192",
    sub: "Mon–Fri, 9am – 6pm",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "hello@prestigeproperties.com",
    sub: "We reply within 24 hours",
  },
];

const officeHours = [
  { day: "Monday – Friday", hours: "9:00 am – 6:00 pm" },
  { day: "Saturday", hours: "10:00 am – 4:00 pm" },
  { day: "Sunday", hours: "Closed" },
];

const agents = [
  { name: "James Carter", role: "Senior Agent" },
  { name: "Linda Park", role: "Luxury Specialist" },
  { name: "Marcus Webb", role: "Investment Advisor" },
  { name: "Sophia Reeves", role: "Rental Expert" },
];
