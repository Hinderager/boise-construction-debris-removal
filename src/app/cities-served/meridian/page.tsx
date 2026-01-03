import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Construction Debris Removal Meridian ID | Top Shelf',
  description: 'Professional construction debris removal in Meridian, Idaho. Residential and commercial cleanup. Same-day service available. Call (208) 943-5231.',
  keywords: ['debris removal Meridian', 'construction cleanup Meridian', 'demolition debris Meridian'],
  alternates: {
    canonical: 'https://boise-construction-debris-removal.com/cities-served/meridian',
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

export default function MeridianPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-[#FFC845]" />
            <span className="text-white text-sm">Meridian, Idaho</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Construction Debris Removal in Meridian</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Fast, reliable construction debris removal for Meridian contractors and homeowners. Same-day service available.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Debris Removal Services in Meridian</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Top Shelf Debris Removal provides professional construction cleanup throughout Meridian. Whether you\'re a contractor working on a commercial build or a homeowner tackling a remodel, we handle the debris so you can focus on the project.</p>
              <p>We serve all of Meridian with same-day service when available. Call us and we\'ll give you a straight quote over the phone.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our Meridian Services</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/cities-served/meridian/${service.slug}`}
                  className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{service.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Debris Removal in Meridian?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional service.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            {/* Neighborhood Pages */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-dark-blue mb-6">
                Meridian Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                
                <Link
                  href="/cities-served/meridian/ten-mile"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Ten Mile Area</span>
                </Link>
                <Link
                  href="/cities-served/meridian/lochsa-falls"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Lochsa Falls</span>
                </Link>
                <Link
                  href="/cities-served/meridian/paramount"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Paramount</span>
                </Link>
                <Link
                  href="/cities-served/meridian/tuscany"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 transition-colors"
                >
                  <span className="font-semibold text-dark-blue">Tuscany</span>
                </Link>
              </div>
            </div>

                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
