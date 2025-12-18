import { Metadata } from 'next'
import { Phone, Clock, DollarSign, Recycle, Shield, CheckCircle, Users, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Choose Us | Boise Construction Debris Removal',
  description: 'Why choose Top Shelf Debris Removal? Same-day service, fair pricing, eco-friendly disposal, and a local team that shows up when promised.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/about-us/why-choose-us' },
}

export default function WhyChooseUsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Top Shelf</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">What makes us different from other debris removal companies?</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>There are plenty of guys with trucks who'll haul away debris. So why work with us? Here's what sets us apart.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Clock className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">We Actually Show Up</h3>
                <p className="text-gray-600">When we say we'll be there Tuesday at 9am, we'll be there Tuesday at 9am. No ghosting, no last-minute cancellations. Your time matters.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <DollarSign className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">We give you a clear price upfront. No surprise fees, no bait-and-switch. You know what you're paying before we start.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Recycle className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Eco-Friendly Disposal</h3>
                <p className="text-gray-600">We recycle metal, donate usable materials, and dispose of everything else properly. We're not just dumping your stuff in a field somewhere.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">We're a legitimate business with proper licenses and insurance. That protects both of us.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Local Team</h3>
                <p className="text-gray-600">We live here in the Treasure Valley. This isn't some national franchise - we're your neighbors.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Truck className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Proper Equipment</h3>
                <p className="text-gray-600">We've got the trucks, trailers, and tools to handle jobs efficiently. No struggling with undersized vehicles.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Who We Work With</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">General Contractors:</strong>
                  <span className="text-gray-600"> Keep your job sites clean and organized with regular debris pickup.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Remodeling Companies:</strong>
                  <span className="text-gray-600"> We handle demo cleanup and haul away old materials so you can focus on the build.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Property Managers:</strong>
                  <span className="text-gray-600"> Renovation cleanouts, tenant debris, and property cleanup - we handle it all.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Homeowners:</strong>
                  <span className="text-gray-600"> DIY projects, renovations, and demolitions create a lot of waste. We make cleanup easy.</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-12">
              <h3 className="text-lg font-bold text-dark-blue mb-2">The Bottom Line</h3>
              <p className="text-gray-600">We're not the cheapest option out there, and we're not trying to be. We charge fair prices for reliable, professional service. If you want someone who shows up, does the job right, and doesn't cut corners, that's us.</p>
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Work With Us?</h3>
              <p className="text-gray-300 mb-6">Call for a straight answer and honest quote.</p>
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
