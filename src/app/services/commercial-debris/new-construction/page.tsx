import { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'

export const metadata: Metadata = {
  title: 'New Construction Cleanup | Boise Construction Debris Removal',
  description: 'Professional ongoing debris removal for new construction sites in Boise and the Treasure Valley. Licensed, insured, and reliable. Call (208) 943-5231.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/services/commercial-debris/new-construction' },
}

export default function NewConstructionPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">New Construction Cleanup</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional ongoing debris removal for new construction sites throughout the Treasure Valley.</p>
        </div>
      </section>
      <QuickQuoteBar />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Top Shelf Debris Removal specializes in ongoing debris removal for new construction sites. We handle the cleanup so you can focus on what matters - finishing your project on time and on budget.</p>
              <p>Our team has the equipment and experience to handle jobs of any size efficiently and professionally.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What We Do</h2>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Load and haul all debris from your property</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sort materials for recycling when possible</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Dispose of everything properly at licensed facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Clean up the area when we\'re done</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Schedule Commercial Debris Removal</h3>
              <p className="text-gray-300 mb-6">Call for a free quote and fast service.</p>
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
