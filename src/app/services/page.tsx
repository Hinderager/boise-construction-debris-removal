import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Home, Building2, Hammer, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Construction Debris Removal Services | Boise, Idaho',
  description: 'Complete construction debris removal services in Boise. Residential, commercial, demolition cleanup, and specialty debris. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/services' },
}

const serviceCategories = [
  {
    icon: Home,
    title: 'Residential Debris',
    description: 'Debris removal for home remodels, renovations, and DIY projects.',
    services: [
      { name: 'Remodel Debris', href: '/services/residential-debris/remodel-debris' },
      { name: 'Renovation Waste', href: '/services/residential-debris/renovation-waste' },
      { name: 'DIY Project Cleanup', href: '/services/residential-debris/diy-project-cleanup' }
    ]
  },
  {
    icon: Building2,
    title: 'Commercial Debris',
    description: 'Job site cleanup for contractors and commercial projects.',
    services: [
      { name: 'New Construction', href: '/services/commercial-debris/new-construction' },
      { name: 'Commercial Remodel', href: '/services/commercial-debris/commercial-remodel' },
      { name: 'Tenant Improvement', href: '/services/commercial-debris/tenant-improvement' }
    ]
  },
  {
    icon: Hammer,
    title: 'Demolition Cleanup',
    description: 'Complete cleanup after demolition projects of any size.',
    services: [
      { name: 'Interior Demo', href: '/services/demolition-cleanup/interior-demo' },
      { name: 'Exterior Demo', href: '/services/demolition-cleanup/exterior-demo' },
      { name: 'Structural Demo', href: '/services/demolition-cleanup/structural-demo' }
    ]
  },
  {
    icon: Layers,
    title: 'Specialty Debris',
    description: 'Specialized removal for specific materials and situations.',
    services: [
      { name: 'Concrete Removal', href: '/services/specialty-debris/concrete-removal' },
      { name: 'Drywall Disposal', href: '/services/specialty-debris/drywall-disposal' },
      { name: 'Roofing Materials', href: '/services/specialty-debris/roofing-materials' }
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Debris Removal Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Complete construction debris removal for residential and commercial projects in Boise.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Whether you're a contractor with a commercial build or a homeowner tackling a kitchen remodel, we handle the debris so you can focus on the project. Here's what we do.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {serviceCategories.map((category, index) => {
                const Icon = category.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                    <Icon className="w-12 h-12 text-[#FFC845] mb-4" />
                    <h2 className="text-2xl font-bold text-dark-blue mb-3">{category.title}</h2>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <div className="space-y-2">
                      {category.services.map((service, idx) => (
                        <Link
                          key={idx}
                          href={service.href}
                          className="block text-dark-blue hover:text-[#0b7fb6] font-medium"
                        >
                          → {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark-blue text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Need Debris Removed?</h2>
          <p className="text-gray-300 mb-6">Call for same-day service when available.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>
    </main>
  )
}
