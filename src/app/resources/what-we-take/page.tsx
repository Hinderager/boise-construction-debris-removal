import { Metadata } from 'next'
import { Phone, CheckCircle, X } from 'lucide-react'

export const metadata: Metadata = {
  title: 'What We Take | Boise Construction Debris Removal',
  description: 'Complete list of construction debris and materials we accept. From drywall to concrete, we handle most construction and demolition waste.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/resources/what-we-take' },
}

const acceptedItems = [
  'Drywall and sheetrock',
  'Lumber and framing wood',
  'Concrete and masonry',
  'Roofing materials (shingles, underlayment)',
  'Siding and trim',
  'Carpet and flooring',
  'Tile and grout',
  'Cabinets and countertops',
  'Windows and doors',
  'Plumbing fixtures',
  'Electrical fixtures',
  'Insulation (non-asbestos)',
  'Metal scraps and piping',
  'Bricks and blocks',
  'Stucco',
  'Dirt and fill (small amounts)'
]

const notAccepted = [
  'Asbestos materials',
  'Lead-based paint debris (bulk)',
  'Hazardous chemicals',
  'Medical waste',
  'Radioactive materials',
  'PCB-containing materials',
  'Certain types of contaminated soil'
]

export default function WhatWeTakePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Take</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We accept most construction and demolition debris. Here's the full list.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>If it came from a construction site, remodel, or demolition, we probably take it. Here's what we handle and what we can\'t accept.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-dark-blue mb-6">We Accept</h2>
                <div className="space-y-3">
                  {acceptedItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-dark-blue mb-6">We Don\'t Accept</h2>
                <div className="space-y-3">
                  {notAccepted.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold text-dark-blue mb-4">Common Questions About Materials</h3>
              <div className="space-y-4 text-gray-600">
                <div>
                  <strong className="text-dark-blue">Can you take mixed loads?</strong>
                  <p>Yes. Most jobs have a mix of different materials and that\'s fine. We sort and dispose of everything properly.</p>
                </div>
                <div>
                  <strong className="text-dark-blue">What about dirt and fill?</strong>
                  <p>Small amounts are okay. If you have multiple truckloads of dirt, that might need special handling.</p>
                </div>
                <div>
                  <strong className="text-dark-blue">Can you take painted wood?</strong>
                  <p>Yes, as long as it\'s not commercial-scale lead paint removal. Normal painted trim and lumber from a house is fine.</p>
                </div>
                <div>
                  <strong className="text-dark-blue">What if I\'m not sure about something?</strong>
                  <p>Just ask. Call us and describe what you have. We\'ll tell you if we can take it or suggest alternatives if we can\'t.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-12">
              <h3 className="text-lg font-bold text-dark-blue mb-2">Hazardous Materials Require Special Handling</h3>
              <p className="text-gray-600">We can\'t take hazardous materials because they require licensed disposal through specialized facilities. If you have asbestos, lead debris, or hazardous chemicals, you'll need to hire a certified hazmat removal company. We can recommend some if you need help.</p>
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Not Sure If We Take It?</h3>
              <p className="text-gray-300 mb-6">Call and ask. We\'ll give you a straight answer.</p>
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
