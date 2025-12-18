import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Debris Removal | Boise Construction Debris Removal',
  description: 'Commercial construction debris removal in Boise. Job site cleanup for contractors and commercial projects. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/services/commercial-debris' },
}

const services = [
  { name: 'New Construction', slug: 'new-construction', description: 'Debris removal for new construction job sites and builds' },
  { name: 'Commercial Remodel', slug: 'commercial-remodel', description: 'Cleanup for commercial remodeling and renovation projects' },
  { name: 'Tenant Improvement', slug: 'tenant-improvement', description: 'Debris removal for tenant improvement and build-out projects' },
]

export default function CommercialDebrisPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Commercial Debris Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional job site cleanup for commercial construction projects.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Commercial projects generate a lot of debris. Scrap materials. Drywall. Lumber. Packaging. We handle job site cleanup so your crew can keep working.</p>
              <p>Regular pickups or one-time hauls. Whatever your project needs.</p>
            </div>

            <div className="grid md:grid-cols-1 gap-6 mb-12">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/commercial-debris/${service.slug}`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-[#0b7fb6]">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-dark-blue font-semibold">Learn More <ArrowRight className="w-4 h-4 ml-2" /></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Commercial Debris Removal?</h2>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
