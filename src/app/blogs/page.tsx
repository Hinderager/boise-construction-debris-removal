import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Debris Removal Pros Blog | Tips & Guides for Construction debris removal',
  description: 'Expert tips, guides, and insights about construction debris removal in Boise and the Treasure Valley. Learn from the pros at Construction Debris Removal Pros.',
  alternates: {
    canonical: 'https://boise-construction-debris-removal.com/blogs',
  },
}

const blogPosts = [
  {
    "slug": "construction-debris-disposal-rules-boise",
    "title": "Construction Debris Disposal Rules in Boise (What You Need to Know)",
    "excerpt": "Ada County has specific rules about construction waste. Here's how to stay compliant and avoid fines.",
    "image": "/generated/construction-debris-rules-boise.webp"
  },
  {
    "slug": "types-of-construction-debris",
    "title": "Types of Construction Debris and How Each Is Handled",
    "excerpt": "From concrete to drywall, different materials require different disposal methods. Here's the breakdown.",
    "image": "/generated/types-construction-debris.webp"
  },
  {
    "slug": "dumpster-rental-vs-debris-removal-service",
    "title": "Dumpster Rental vs Debris Removal Service: Which Is Better?",
    "excerpt": "Both options work, but one might save you money depending on your project. Here's how to decide.",
    "image": "/generated/dumpster-vs-removal-service.webp"
  },
  {
    "slug": "recycling-construction-materials-idaho",
    "title": "Can Construction Materials Be Recycled in Idaho?",
    "excerpt": "A surprising amount of construction debris can be recycled. Here's what can be diverted from the landfill.",
    "image": "/generated/recycling-construction-materials.webp"
  },
  {
    "slug": "keeping-job-sites-clean",
    "title": "Why Keeping Job Sites Clean Matters More Than You Think",
    "excerpt": "A clean job site isn't just about looks. It affects safety, efficiency, and your bottom line.",
    "image": "/generated/clean-job-site-boise.webp"
  }
]

export default function BlogsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <Image
          src="/generated/hero.webp"
          alt="Construction Debris Removal Pros Blog"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/80 to-dark-blue/60" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Tips, guides, and insights about construction debris removal in the Treasure Valley. Real advice from real professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blogs/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gunmetal mb-2 hover:text-dark-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-dark-blue font-semibold">
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your construction debris removal project.
          </p>
          <a
            href="tel:2083611982"
            className="inline-block bg-brand-yellow hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Call (208) 361-1982
          </a>
        </div>
      </section>
    </main>
  )
}
