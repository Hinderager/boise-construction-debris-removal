import { Metadata } from 'next'
import { Phone, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Boise Construction Debris Removal',
  description: 'Common questions about construction debris removal in Boise. Get answers about pricing, scheduling, what we take, and more.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/resources/faq' },
}

const faqs = [
  {
    question: 'How much does debris removal cost?',
    answer: "It depends on how much debris you have and what type it is. Give us a call and describe what needs to go - we can usually give you a price right over the phone. For bigger jobs, we\'ll come out and take a look first."
  },
  {
    question: 'Do you offer same-day service?',
    answer: "Yes, when our schedule allows. If you call in the morning and we have availability, we can often get to you the same day. No guarantees, but we do our best."
  },
  {
    question: 'What types of debris do you take?',
    answer: "Pretty much anything from construction or demolition: drywall, lumber, concrete, roofing materials, old fixtures, carpet, tile - you name it. We don\'t take hazardous materials like asbestos or certain chemicals. When in doubt, just ask."
  },
  {
    question: 'Do I need to be there when you come?',
    answer: "Not necessarily. As long as we can access the debris and you\'ve told us what to take, we can handle it without you there. Just leave clear instructions."
  },
  {
    question: 'How long does pickup take?',
    answer: "Most jobs take 30 minutes to a couple hours, depending on the amount and how accessible it is. Big commercial cleanouts might take longer."
  },
  {
    question: 'Can you haul debris from inside my house?',
    answer: "Absolutely. We\'ll carry it out for you. That\'s kind of the point - you don\'t have to do the heavy lifting."
  },
  {
    question: 'Do you recycle?',
    answer: "Yes. We recycle metal, separate out materials that can be donated, and dispose of the rest properly. We\'re not just dumping everything in a landfill."
  },
  {
    question: 'What areas do you serve?',
    answer: "We cover the whole Treasure Valley: Boise, Meridian, Nampa, Caldwell, Eagle, Garden City, Kuna, Star, Middleton, and Mountain Home."
  },
  {
    question: 'How do I schedule a pickup?',
    answer: "Just call us at (208) 943-5231. We\'ll ask what you\'ve got, give you a price, and set up a time that works for you."
  },
  {
    question: 'What if I have more debris than I thought?',
    answer: "No problem. We\'ll let you know if it\'s more than we originally quoted and adjust the price accordingly. You can decide if you want us to take it all or just part of it."
  }
]

export default function FAQPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Common questions about construction debris removal in Boise.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 mb-12">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-dark-blue mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-12">
              <h3 className="text-lg font-bold text-dark-blue mb-2">Still Have Questions?</h3>
              <p className="text-gray-600">We\'re happy to answer them. Give us a call and we\'ll walk you through whatever you need to know.</p>
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Talk to a Real Person</h3>
              <p className="text-gray-300 mb-6">No phone trees, no automated systems. Just call and ask.</p>
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
