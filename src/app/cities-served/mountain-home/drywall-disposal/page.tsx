import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Drywall Disposal Mountain Home ID | Top Shelf Debris Removal',
  description: 'Professional drywall and sheetrock debris disposal in Mountain Home, Idaho. Licensed and insured. Call (208) 943-5231 for fast service.',
  keywords: ['drywall disposal Mountain Home', 'debris removal Mountain Home', 'construction cleanup Mountain Home'],
  alternates: {
    canonical: 'https://boise-construction-debris-removal.com/cities-served/mountain-home/drywall-disposal',
  },
}

export default function MountainHomeDrywallDisposalPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-[#FFC845]" />
            <span className="text-white text-sm">Mountain Home, Idaho</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Drywall Disposal in Mountain Home</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional drywall and sheetrock debris disposal serving Mountain Home and surrounding areas.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Top Shelf Debris Removal provides drywall and sheetrock debris disposal throughout Mountain Home. We handle the heavy lifting and proper disposal so you can focus on your project.</p>
              <p>Whether it\'s a small residential job or a large commercial project, we've got the equipment and experience to handle it efficiently.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Choose Us in Mountain Home</h2>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local Mountain Home Service:</strong> We know the area and respond quickly to service calls.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Transparent Pricing:</strong> Know the cost before we start any work.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Available when your schedule demands it.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service you can count on.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Eco-Friendly:</strong> We recycle and donate materials whenever possible.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Schedule Service in Mountain Home?</h3>
              <p className="text-gray-300 mb-6">Call now for a free quote and fast service.</p>
              <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 943-5231
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in Mountain Home</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/mountain-home" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All Mountain Home Services</Link>
            <Link href="/cities-served/mountain-home/remodel-debris" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Remodel Debris</Link>
            <Link href="/cities-served/mountain-home/demolition-debris" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Demolition Cleanup</Link>
            <Link href="/cities-served/mountain-home/concrete-removal" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Concrete Removal</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
