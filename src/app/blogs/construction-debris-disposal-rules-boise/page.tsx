import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Scale, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Construction Debris Disposal Rules in Boise & Ada County | Construction Debris Removal Pros',
  description: 'Ada County has specific rules about construction waste disposal. Here\'s what Boise contractors and homeowners need to know to stay compliant and avoid fines.',
  alternates: {
    canonical: 'https://boise-construction-debris-removal.com/blogs/construction-debris-disposal-rules-boise',
  },
}

export default function ConstructionDebrisDisposalRulesBoise() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/construction-debris-rules-boise.webp"
          alt="Construction Debris Disposal Rules in Boise Idaho"
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
            Construction Debris Disposal Rules in Boise
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Whether you're a contractor finishing a remodel or a homeowner tackling a DIY project, you can't just dump construction debris anywhere. Ada County and Boise have specific rules about what goes where.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ignoring these rules can result in fines, project delays, and headaches you don't need. The good news? The rules are straightforward once you understand them.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's what you need to know about construction debris disposal in the Treasure Valley.
            </p>
          </div>
        </div>
      </section>

      {/* What Counts */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                What Counts as Construction Debris?
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Construction and demolition debris (C&D) includes materials from building, renovating, or demolishing structures. In Ada County, this typically means:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Concrete and masonry:</strong> Broken concrete, bricks, blocks, stone, and asphalt from driveways or walkways.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Wood waste:</strong> Lumber, plywood, OSB, treated wood, and wood scraps from framing or demolition.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Drywall and plaster:</strong> Sheetrock, gypsum board, and plaster from walls and ceilings.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Roofing materials:</strong> Shingles, tar paper, and other roofing components.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Metals:</strong> Rebar, wire, pipes, ductwork, and structural steel.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Mixed debris:</strong> Insulation, carpet, flooring, fixtures, and miscellaneous materials from renovation projects.
            </p>
          </div>
        </div>
      </section>

      {/* Where It Can Go */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Where Construction Debris Can Go in Ada County
            </h2>

            <h3 className="text-xl font-bold text-gunmetal mb-4">Hidden Hollow Landfill</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              This is the primary disposal facility for construction debris in the Boise area. Located south of Boise near Kuna, Hidden Hollow accepts most C&D materials. They charge by weight, so heavier loads cost more. Call ahead if you're bringing unusual materials-some items require special handling.
            </p>

            <h3 className="text-xl font-bold text-gunmetal mb-4">Ada County Landfill</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              The main Ada County landfill also accepts construction debris, though prices and accepted materials may differ from Hidden Hollow. Check current rates and restrictions before hauling a load out there.
            </p>

            <h3 className="text-xl font-bold text-gunmetal mb-4">Recycling Facilities</h3>
            <p className="text-gray-600 leading-relaxed">
              Clean concrete, metals, and some other materials can go to recycling facilities instead of landfills. This is often cheaper and better for the environment. We'll cover recycling options in more detail below.
            </p>
          </div>
        </div>
      </section>

      {/* What's Prohibited */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Materials That Require Special Handling
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Not everything can go in a standard construction debris load. These materials have special disposal requirements:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Asbestos:</strong> Must be tested, contained, and disposed of at approved facilities by licensed professionals</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Lead-based paint materials:</strong> Requires special handling, especially from pre-1978 buildings</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Treated wood (CCA):</strong> Cannot be burned and has specific disposal requirements</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Paints, solvents, chemicals:</strong> Classified as hazardous waste-separate disposal required</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Electronics and appliances:</strong> Cannot go in standard C&D loads</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Mixing hazardous materials with regular construction debris can result in your entire load being rejected-and potentially significant fines.
            </p>
          </div>
        </div>
      </section>

      {/* Illegal Dumping */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Illegal Dumping Penalties
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Dumping construction debris on private property, vacant lots, or public land is illegal in Ada County. This seems obvious, but it happens more than you'd think-usually because someone's trying to avoid disposal fees.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Penalties for illegal dumping in Idaho can include fines of several hundred to several thousand dollars, cleanup costs billed to the responsible party, potential criminal charges for large-scale dumping, and liability for any environmental damage.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The disposal fees you're trying to avoid are almost always cheaper than the penalties you'll face if caught. And with more surveillance and stricter enforcement, getting caught is increasingly likely.
            </p>
          </div>
        </div>
      </section>

      {/* Contractor Requirements */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Requirements for Contractors
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              If you're a contractor working in Boise, Meridian, or elsewhere in the Treasure Valley, you have additional responsibilities beyond basic disposal rules.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Keep debris contained on job sites.</strong> Materials shouldn't blow onto neighboring properties or public areas. Use tarps, fencing, or containers to keep debris contained during projects.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Don't let debris accumulate.</strong> Some municipalities require regular debris removal during extended projects. Check local ordinances for specific timelines.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Separate recyclables when possible.</strong> Some jurisdictions encourage or require separation of recyclable materials like clean concrete, metals, and cardboard.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Document disposal properly.</strong> Keep receipts from landfills or recycling facilities. If questions arise about where project debris went, you'll have documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Recycling Options */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Recycling Options in the Treasure Valley
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Recycling construction materials isn't just environmentally responsible-it's often cheaper than landfill disposal.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Concrete and asphalt:</strong> Several facilities in the Boise area accept clean concrete for crushing and reuse as aggregate. This is typically cheaper than landfill disposal.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Scrap metal:</strong> Any metal components-rebar, copper pipes, steel beams, aluminum-have recycling value. Scrap yards will often pay you for these materials.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Clean wood:</strong> Some facilities accept untreated, unpainted wood for mulching or biomass fuel.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Cardboard and packaging:</strong> Standard recycling programs accept cardboard from construction sites.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Bottom Line
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Construction debris disposal in Ada County is straightforward if you follow the rules. Use approved facilities, keep hazardous materials separate, and don't try to cut corners with illegal dumping.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              If the logistics of sorting, hauling, and disposing of construction debris properly seem overwhelming, that's where professional removal services come in. We handle the compliance headaches so you can focus on the actual project.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Not sure if your project generates materials that need special handling? Give us a call. We can help you figure out the right approach for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Construction Debris Removed?
            </h2>
            <p className="text-gray-600 mb-8">
              We handle construction debris removal throughout Boise, Meridian, Nampa, and the Treasure Valley-including proper disposal and compliance with local regulations.
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
