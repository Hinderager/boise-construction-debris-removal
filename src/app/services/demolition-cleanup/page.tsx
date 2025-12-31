import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Demolition Cleanup Services | Boise Construction Debris Removal',
  description: 'Complete cleanup after demolition projects in Boise. Interior, exterior, and structural demo cleanup. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/services/demolition-cleanup' },
}

const services = [
  { name: 'Interior Demo', slug: 'interior-demo', description: 'Cleanup after interior demolition and tear-out projects' },
  { name: 'Exterior Demo', slug: 'exterior-demo', description: 'Debris removal for exterior demolition and deconstruction' },
  { name: 'Structural Demo', slug: 'structural-demo', description: 'Complete cleanup after structural demolition projects' },
]

export default function DemolitionCleanupPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Demolition Cleanup</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Complete cleanup and debris removal after demolition projects.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Demolition creates massive amounts of debris. Broken concrete. Twisted metal. Splintered wood. Drywall dust everywhere.</p>
              <p>We clean it all up. Load it. Haul it. Dispose of it properly. Leave the site ready for the next phase.</p>
            </div>

            <div className="grid md:grid-cols-1 gap-6 mb-12">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/demolition-cleanup/${service.slug}`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
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
          <h2 className="text-2xl font-bold text-white mb-4">Need Demolition Cleanup?</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
