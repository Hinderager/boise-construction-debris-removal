import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Construction Debris Removal | Boise',
  description: 'Residential debris removal for home remodels, renovations, and DIY projects in Boise. We handle cleanup so you can focus on your project.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/services/residential-debris' },
}

export default function ResidentialDebrisPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Residential Debris Removal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Debris cleanup for home remodels, renovations, and DIY projects.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Home improvement projects create a lot of debris. Old cabinets, drywall, flooring, trim - it piles up fast. We handle the cleanup so you don't have to deal with it.</p>
              <p>Whether you're doing a full remodel or just updating one room, we'll haul away the mess when you're ready.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Common Residential Projects</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Kitchen remodels</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Bathroom renovations</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Basement finishing</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Flooring replacement</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Room additions</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Deck demolition</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Link href="/services/residential-debris/remodel-debris" className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue mb-2">Remodel Debris</h3>
                <p className="text-sm text-gray-600">Cleanup for kitchen, bathroom, and whole-home remodels.</p>
              </Link>
              <Link href="/services/residential-debris/renovation-waste" className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue mb-2">Renovation Waste</h3>
                <p className="text-sm text-gray-600">Debris removal for renovation and update projects.</p>
              </Link>
              <Link href="/services/residential-debris/diy-project-cleanup" className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-bold text-dark-blue mb-2">DIY Project Cleanup</h3>
                <p className="text-sm text-gray-600">Haul away debris from your DIY home improvement projects.</p>
              </Link>
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Schedule Residential Debris Removal</h3>
              <p className="text-gray-300 mb-6">Call for same-day service when available.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
