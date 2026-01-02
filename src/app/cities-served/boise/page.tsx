import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Construction Debris Removal Boise ID | Top Shelf',
  description: 'Professional construction debris removal in Boise, Idaho. Residential and commercial cleanup. Same-day service available. Call (208) 943-5231.',
  keywords: ['debris removal Boise', 'construction cleanup Boise', 'demolition debris Boise'],
  alternates: {
    canonical: 'https://boise-construction-debris-removal.com/cities-served/boise',
  },
}

const services = [
  { name: 'Remodel Debris Removal', slug: 'remodel-debris' },
  { name: 'Renovation Cleanup', slug: 'renovation-cleanup' },
  { name: 'Demolition Debris', slug: 'demolition-debris' },
  { name: 'New Construction Cleanup', slug: 'new-construction' },
  { name: 'Concrete Removal', slug: 'concrete-removal' },
  { name: 'Drywall Disposal', slug: 'drywall-disposal' },
  { name: 'Roofing Debris', slug: 'roofing-debris' },
  { name: 'Commercial Debris', slug: 'commercial-debris' }
]

export default function BoisePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-[#FFC845]" />
            <span className="text-white text-sm">Boise, Idaho</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Construction Debris Removal in Boise</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Fast, reliable construction debris removal for Boise contractors and homeowners. Same-day service available.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Debris Removal Services in Boise</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Top Shelf Debris Removal provides professional construction cleanup throughout Boise. Whether you\'re a contractor working on a commercial build or a homeowner tackling a remodel, we handle the debris so you can focus on the project.</p>
              <p>We serve all of Boise with same-day service when available. Call us and we\'ll give you a straight quote over the phone.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Boise Services</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/cities-served/boise/${service.slug}`}
                  className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{service.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Debris Removal in Boise?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional service.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
