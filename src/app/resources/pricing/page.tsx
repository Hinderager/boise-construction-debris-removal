import { Metadata } from 'next'
import { Phone, DollarSign, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing Guide | Boise Construction Debris Removal',
  description: 'Learn about construction debris removal pricing in Boise. Transparent pricing with no hidden fees. Call for a free quote.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/resources/pricing' },
}

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Debris Removal Pricing</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Transparent pricing with no hidden fees or surprises.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Nobody likes surprises when it comes to pricing. Here's how we figure out what to charge and what affects the final cost.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What Affects the Price?</h2>
            <div className="space-y-4 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Volume</h3>
                <p className="text-gray-600">The more debris you have, the higher the cost. A few bags of drywall is different from a full gut job. We measure by how much truck/trailer space it takes up.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Type of Material</h3>
                <p className="text-gray-600">Some materials cost more to dispose of than others. Concrete is heavier and more expensive to dump than wood. Tile, drywall, and general construction debris are usually mid-range.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Labor Required</h3>
                <p className="text-gray-600">Is it already piled up in the driveway, or do we need to carry it out from a basement? Accessibility and labor affect the price.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-dark-blue mb-3">Location</h3>
                <p className="text-gray-600">If you're way out in the boonies, there might be a small travel charge. Most of the Treasure Valley is within our normal service area with no extra fee.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">How We Quote Jobs</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Small Jobs:</strong>
                  <span className="text-gray-600"> For smaller loads, we can usually quote you over the phone. Just describe what you have and we'll give you a price.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Larger Jobs:</strong>
                  <span className="text-gray-600"> For bigger projects, we prefer to come look at it in person. That way we can give you an accurate quote instead of guessing.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Ongoing Service:</strong>
                  <span className="text-gray-600"> If you're a contractor who needs regular pickups, we can work out a per-load rate or monthly arrangement.</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-[#FFC845] p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-dark-blue mb-2">No Hidden Fees</h3>
                  <p className="text-gray-600">The price we quote is the price you pay. We don't add on surprise charges after the fact. If the job ends up being bigger than expected, we'll let you know before proceeding.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Ways to Keep Costs Down</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <ul>
                <li>Have debris consolidated in one area when possible</li>
                <li>Separate out metal - we can often recycle it for credit</li>
                <li>Give us clear access - less time wrestling with obstacles means lower labor costs</li>
                <li>Schedule in advance when you can - last-minute rush jobs might cost more</li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Get Your Free Quote</h3>
              <p className="text-gray-300 mb-6">Call now and we'll give you a straight answer on pricing.</p>
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
