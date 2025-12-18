import { Metadata } from 'next'
import { Phone, Briefcase, DollarSign, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Boise Construction Debris Removal',
  description: 'Join the Top Shelf Debris Removal team. We're hiring reliable, hardworking people for construction debris removal jobs in the Treasure Valley.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/about-us/careers' },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We're looking for reliable, hardworking people to join our growing team.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Top Shelf Debris Removal is a growing local company serving the Treasure Valley. We're always looking for good people who want to work hard and be part of a team that takes pride in what they do.</p>
              <p>This isn't a desk job. You'll be lifting heavy stuff, working outside, and staying busy. But if you like physical work and want to earn good money doing it, this could be a great fit.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-8">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Competitive Pay</h3>
                <p className="text-gray-600">Fair wages with opportunity for raises based on performance.</p>
              </div>
              <div className="text-center">
                <Briefcase className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Steady Work</h3>
                <p className="text-gray-600">Year-round work serving contractors and homeowners.</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-[#FFC845] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-2">Good Team</h3>
                <p className="text-gray-600">Work with people who have your back.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What We're Looking For</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <ul>
                <li>Reliable - show up on time, every time</li>
                <li>Hardworking - not afraid of physical labor</li>
                <li>Valid driver's license</li>
                <li>Able to lift 50+ lbs regularly</li>
                <li>Positive attitude and willing to learn</li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Apply?</h3>
              <p className="text-gray-300 mb-6">Give us a call to learn more about current openings.</p>
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
