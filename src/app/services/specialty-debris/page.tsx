import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Specialty Debris Removal | Boise Construction Debris Removal',
  description: 'Specialized debris removal in Boise. Concrete, drywall, roofing materials, and more. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/services/specialty-debris' },
}

const services = [
  { name: 'Concrete Removal', slug: 'concrete-removal', description: 'Heavy concrete and masonry debris removal and disposal' },
  { name: 'Drywall Disposal', slug: 'drywall-disposal', description: 'Drywall and sheetrock debris removal from construction sites' },
  { name: 'Roofing Materials', slug: 'roofing-materials', description: 'Shingle, tile, and roofing material debris removal' },
]

export default function SpecialtyDebrisPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Specialty Debris Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Specialized removal for specific construction materials and debris types.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Some materials need special handling. Concrete is heavy. Drywall creates dust. Roofing materials pile up fast.</p>
              <p>We have the equipment and experience to handle specialty debris efficiently and safely.</p>
            </div>

            <div className="grid md:grid-cols-1 gap-6 mb-12">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/specialty-debris/${service.slug}`} className="group bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
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
          <h2 className="text-2xl font-bold text-white mb-4">Need Specialty Debris Removed?</h2>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
