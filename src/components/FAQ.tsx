'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

// FAQ data used for both UI and structured data
export const faqs = [
  {
    question: 'What construction debris do you haul?',
    answer: 'We take drywall, lumber, plywood, roofing shingles, concrete, brick, cabinets, countertops, flooring, tile, fixtures, insulation, siding-basically anything from a construction or demo project. We can\'t handle hazardous stuff like asbestos or lead paint, but everything else is fair game.'
  },
  {
    question: 'How much does it cost?',
    answer: 'Most jobs run $150 to $600 depending on volume and weight. We charge based on how much space you take up in the truck. Heavy materials like concrete cost a bit more due to disposal fees. We'll give you an exact price on-site before we load anything.'
  },
  {
    question: 'Can you come same day?',
    answer: 'Usually yes. If you call before noon, we can often get there same day. Construction schedules change fast and we get that. Next-day service is almost always available if same day doesn\'t work out.'
  },
  {
    question: 'Do you work with contractors and builders?',
    answer: 'That's a big part of what we do. We work with GCs, remodelers, roofers, and framers all over the valley. We can do one-time pickups or set up recurring service for bigger projects. We also offer contractor pricing if you use us regularly.'
  },
  {
    question: 'Where do you provide service?',
    answer: 'We cover Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, and the rest of the Treasure Valley. If you're outside that area, call us anyway-we might be able to help. (208) 505-9352.'
  },
  {
    question: 'What about recycling?',
    answer: 'We recycle what we can. Clean wood, metal, cardboard, and concrete usually get recycled instead of landfilled. It's better for everyone and sometimes saves on disposal costs too.'
  },
  {
    question: 'How should I prep for pickup?',
    answer: 'Just pile it somewhere accessible if you can. We do the loading. If it's inside, make sure we have a path to get to it. You don't need to sort or organize anything.'
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-12 uppercase" style={{textShadow: '2px 2px 3px rgba(0,0,0,0.3), 1px 1px 2px rgba(0,0,0,0.2)'}}>
          <span className="text-dark-blue">Frequently Asked Questions</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-200 last:border-b-0">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-xl md:text-2xl font-bold text-dark-blue pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-dark-blue flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-center mt-12">
          <Button asChild size="lg" className="bg-ub-yellow hover:bg-ub-yellow/90 text-black font-bold text-lg px-10 py-6 rounded-lg uppercase border-4 border-ub-yellow">
            <a href="tel:2085059352">
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">(208) 505-9352</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
