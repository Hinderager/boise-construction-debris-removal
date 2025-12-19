import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Recycle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Can Construction Materials Be Recycled in Idaho? | Construction Debris Removal Pros',
  description: 'A surprising amount of construction debris can be recycled in the Boise area. Here\'s what can be diverted from the landfill and where to take it.',
  alternates: {
    canonical: 'https://boise-construction-debris-removal.com/blogs/recycling-construction-materials-idaho',
  },
}

export default function RecyclingConstructionMaterialsIdaho() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/recycling-construction-materials.webp"
          alt="Recycling Construction Materials in Idaho"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/50 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Can Construction Materials Be Recycled in Idaho?
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Short answer: yes, a lot of it can. And recycling construction materials in the Boise area often costs less than landfill disposal.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The EPA estimates that construction and demolition debris makes up about 25-30% of the waste stream in the United States. Much of that could be recycled or reused instead of buried in landfills.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what can actually be recycled from construction projects in the Treasure Valley, where to take it, and why it often makes financial sense.
            </p>
          </div>
        </div>
      </section>

      {/* Concrete and Masonry */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Concrete and Masonry
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              This is the easiest win. Clean concrete, brick, and block are highly recyclable and often cheaper to recycle than to landfill.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>What happens to it:</strong> Concrete gets crushed into aggregate that's used for road base, fill, and new concrete production. Brick and block follow similar paths.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Requirements:</strong> Must be clean-no rebar sticking out (or rebar must be minimal), no attached wood, no significant contamination with other materials.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Where to take it:</strong> Several facilities in the Boise area accept clean concrete for recycling. Prices are typically lower than landfill rates.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Cost benefit:</strong> Recycling concrete usually costs $5-15 per ton less than landfill disposal. For a driveway demolition generating 10-20 tons, that's real money.
            </p>
          </div>
        </div>
      </section>

      {/* Metals */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Scrap Metals
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Metal is where recycling can actually make you money instead of costing you money.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Copper:</strong> The most valuable. Copper pipes, wiring, and tubing from plumbing and electrical work can bring $2-4 per pound depending on current prices.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Aluminum:</strong> Gutters, siding, window frames, and HVAC ductwork. Worth about $0.30-0.60 per pound.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Steel and iron:</strong> Rebar, structural steel, appliances, and miscellaneous metal. Lower value per pound but usually available in larger quantities.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Where to take it:</strong> Scrap yards throughout the Treasure Valley buy construction metals. Pacific Steel, Schnitzer Steel, and others operate in the Boise area.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Tip:</strong> Separate different metals before taking them in. Mixed loads get the lowest price. Sorted metals get higher prices for each type.
            </p>
          </div>
        </div>
      </section>

      {/* Wood */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Wood and Lumber
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Wood recycling options are more limited in Idaho than in some states, but they exist.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clean, untreated wood:</strong> Can be chipped for mulch, used as biomass fuel, or processed into engineered wood products. Some facilities accept it, though options vary.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Painted or treated wood:</strong> Much harder to recycle. Most painted wood ends up in landfills. Pressure-treated wood has specific disposal requirements due to the chemicals involved.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Reusable lumber:</strong> Good-condition dimensional lumber, especially older growth wood, has value to salvage operations and individuals. Habitat for Humanity ReStores sometimes accept usable lumber.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Reality check:</strong> Most construction wood ends up mixed with other debris and goes to landfill. Recycling wood requires separation on-site, which many projects don't do.
            </p>
          </div>
        </div>
      </section>

      {/* Other Materials */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Other Recyclable Construction Materials
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Asphalt:</strong> Old asphalt from driveways and parking lots can be recycled into new asphalt. Several facilities in the Boise area accept it</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Drywall:</strong> Clean, unpainted drywall can sometimes be recycled. The gypsum is used in agriculture and new drywall production. Options are limited locally</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Cardboard and packaging:</strong> Standard recycling programs accept cardboard. Break it down and keep it dry</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Windows and glass:</strong> Some specialty recyclers accept flat glass, though options are limited in Idaho</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Fixtures and hardware:</strong> Usable doors, sinks, toilets, lighting, and hardware can be donated to architectural salvage stores or Habitat ReStore</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              The key is separation. Mixed debris is hard to recycle. Separated materials have more options.
            </p>
          </div>
        </div>
      </section>

      {/* What Can't Be Recycled */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Can't Be Recycled
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some construction materials have no recycling path in the Treasure Valley:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Insulation:</strong> Fiberglass, foam, and most other insulation materials go to landfill.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Roofing shingles:</strong> While shingle recycling exists in some markets, options in Idaho are limited. Most shingles go to landfill here.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Carpet and vinyl flooring:</strong> Recycling programs exist nationally, but local options are scarce.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Mixed debris:</strong> When different materials are mixed together, the whole load typically goes to landfill.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Contaminated materials:</strong> Anything with asbestos, lead paint, or hazardous chemical contamination requires special disposal, not recycling.
            </p>
          </div>
        </div>
      </section>

      {/* Making It Work */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Making Recycling Work on Your Project
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              The practical reality is that recycling construction materials requires some planning:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Set up separate containers or piles</strong> for materials you plan to recycle. Metal in one spot, clean concrete in another, cardboard somewhere dry.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Train your crew</strong> on what goes where. It only works if everyone follows the system.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Have a plan for disposal</strong> of each material stream before the project starts. Know where everything is going.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Consider whether it's worth it</strong> for your specific project. Small projects may not generate enough recyclable material to justify the effort. Larger projects often see real cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Construction material recycling in Idaho is possible and often cost-effective, especially for concrete, metals, and asphalt. The options aren't as robust as some states, but they exist.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The biggest barrier is usually logistics-separating materials on-site and getting them to the right facilities. If you're working with a debris removal service, ask about their recycling practices. Some sort materials and recycle what they can. Others take everything to the landfill.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We try to divert recyclable materials from the landfill whenever it makes sense. It's better for the environment and often costs less than pure landfill disposal.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Questions About Construction Debris Disposal?
            </h2>
            <p className="text-gray-600 mb-8">
              We can help you figure out what's recyclable on your project and handle the removal. Call for a free estimate.
            </p>
            <a
              href="tel:2083611982"
              className="inline-block bg-dark-blue hover:bg-light-blue text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Call (208) 361-1982
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gunmetal mb-8 text-center">
            More Construction Debris Resources
          </h2>
          <div className="text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center text-dark-blue font-semibold hover:text-light-blue transition-colors"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
