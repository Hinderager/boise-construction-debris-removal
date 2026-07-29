import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, HelpCircle, DollarSign, Recycle, ClipboardList } from 'lucide-react'
import { QuickQuoteBar } from '@/components/QuickQuoteBar'
import { VisibleBreadcrumb } from '@/components/VisibleBreadcrumb'

export const metadata: Metadata = {
  title: 'Construction Debris Removal Resources',
  description: 'Answers on construction debris removal in Boise: how pricing works, which materials we accept, what gets recycled, and the questions contractors ask most.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/resources' },
}

const resources = [
  {
    icon: HelpCircle,
    name: 'Frequently Asked Questions',
    href: '/resources/faq',
    description: 'Straight answers on scheduling, access, load sizes, and how a debris pickup actually goes.',
  },
  {
    icon: DollarSign,
    name: 'Pricing Guide',
    href: '/resources/pricing',
    description: 'How we price a load, what pushes the cost up or down, and why there are no hidden fees.',
  },
  {
    icon: ClipboardList,
    name: 'What We Take',
    href: '/resources/what-we-take',
    description: "The full list of materials we accept, from drywall and lumber to concrete, plus the few things we can't haul.",
  },
  {
    icon: Recycle,
    name: 'Recycling & Disposal',
    href: '/resources/recycling',
    description: 'Where your metal, wood, concrete, and usable leftovers end up once they leave the job site.',
  },
]

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Debris Removal Resources</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Everything worth knowing before you book a debris haul in the Treasure Valley.</p>

          <QuickQuoteBar />
        </div>
      </section>

      <VisibleBreadcrumb />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Most people call us with the same handful of questions. What does it cost? Will you take drywall? What happens to the concrete? Instead of making you dig for that on the phone, we put it all here.</p>
              <p>These pages are written for both sides of the job &mdash; the contractor clearing a site in Meridian and the homeowner staring at a pile of old cabinets in the driveway. Start wherever your question fits, and give us a call if you don&apos;t find it.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {resources.map((resource) => {
                const Icon = resource.icon
                return (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="group bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-[#FFC845] mb-4" />
                    <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-[#0b7fb6]">{resource.name}</h2>
                    <p className="text-gray-600">{resource.description}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have a Question?</h2>
          <p className="text-gray-300 mb-6">Give us a call and we&apos;ll walk you through it.</p>
          <a href="tel:2089435231" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 943-5231
          </a>
        </div>
      </section>
    </main>
  )
}
