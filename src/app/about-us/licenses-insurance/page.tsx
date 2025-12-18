import { Metadata } from 'next'
import { Phone, Shield, CheckCircle, FileCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Licenses & Insurance | Boise Construction Debris Removal',
  description: 'Top Shelf Debris Removal is fully licensed and insured for construction debris removal in Idaho. Learn about our credentials and coverage.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/about-us/licenses-insurance' },
}

export default function LicensesInsurancePage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Licenses & Insurance</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Fully licensed and insured for your protection.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>When you hire Top Shelf Debris Removal, you're working with a legitimate, professional company that's fully licensed and insured. That matters more than you might think.</p>
              <p>It means we follow proper disposal regulations. It means you're protected if something goes wrong. And it means we take this business seriously.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <FileCheck className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">Business License</h3>
                <p className="text-gray-600">We maintain all required business licenses to operate legally in the Treasure Valley and throughout Idaho.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-[#FFC845] mb-4" />
                <h3 className="text-xl font-bold text-dark-blue mb-3">General Liability Insurance</h3>
                <p className="text-gray-600">Comprehensive coverage protects you and your property during debris removal operations.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why This Matters</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Legal Compliance:</strong>
                  <span className="text-gray-600"> We follow all local, state, and federal regulations for debris disposal.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Your Protection:</strong>
                  <span className="text-gray-600"> If property damage occurs during removal, our insurance covers it.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Professional Standards:</strong>
                  <span className="text-gray-600"> Licensed companies are held to higher standards than unlicensed operators.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Proper Disposal:</strong>
                  <span className="text-gray-600"> We use licensed disposal facilities and recycling centers.</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-12">
              <h3 className="text-lg font-bold text-dark-blue mb-2">Hiring Unlicensed Companies Is Risky</h3>
              <p className="text-gray-600">Unlicensed debris removal companies might dump your waste illegally, which could come back to you. If they damage your property, you have no recourse. Save yourself the headache and hire a legitimate company.</p>
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Work With a Licensed Pro</h3>
              <p className="text-gray-300 mb-6">Get peace of mind with proper licensing and insurance.</p>
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
