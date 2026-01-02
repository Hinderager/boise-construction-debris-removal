import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'Cities Served | Construction Debris Removal Treasure Valley',
  description: 'We serve the entire Treasure Valley for construction debris removal. Boise, Meridian, Nampa, Caldwell, Eagle, and more.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/cities-served' },
}

const cities = [
  { name: 'Boise', slug: 'boise', description: 'Idaho\'s capital and largest city' },
  { name: 'Meridian', slug: 'meridian', description: 'Fastest growing city in Idaho' },
  { name: 'Nampa', slug: 'nampa', description: 'Canyon County\'s largest city' },
  { name: 'Caldwell', slug: 'caldwell', description: 'Historic city in Canyon County' },
  { name: 'Eagle', slug: 'eagle', description: 'Upscale community north of Boise' },
  { name: 'Garden City', slug: 'garden-city', description: 'Small city along the Boise River' },
  { name: 'Kuna', slug: 'kuna', description: 'Growing community south of Boise' },
  { name: 'Star', slug: 'star', description: 'Small town northwest of Boise' },
  { name: 'Middleton', slug: 'middleton', description: 'Rural community in Canyon County' },
  { name: 'Mountain Home', slug: 'mountain-home', description: 'City southeast of Boise' }
]

export default function CitiesServedPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cities We Serve</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Construction debris removal throughout the Treasure Valley.</p>

          <QuickQuoteBar />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We provide construction debris removal services across the entire Treasure Valley. Whether you\'re in downtown Boise or out in Middleton, we've got you covered.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities-served/${city.slug}`}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                    <h2 className="text-xl font-bold text-dark-blue">{city.name}</h2>
                  </div>
                  <p className="text-sm text-gray-600">{city.description}</p>
                  <p className="text-sm text-dark-blue font-medium mt-3">View services →</p>
                </Link>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6">
              <h3 className="text-lg font-bold text-dark-blue mb-2">Don\'t See Your City?</h3>
              <p className="text-gray-600">We serve many other areas throughout the Treasure Valley. Give us a call to check if we cover your location.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Serving the Treasure Valley</h2>
          <p className="text-gray-300 mb-6">Call for debris removal in your area.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
