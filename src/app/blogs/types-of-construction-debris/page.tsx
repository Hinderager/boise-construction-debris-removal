import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Layers, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Types of Construction Debris and How Each Is Handled in Boise | Construction Debris Removal Pros',
  description: 'From concrete to drywall, different construction materials require different disposal methods. Here\'s the breakdown for Treasure Valley projects.',
  alternates: {
    canonical: 'https://boise-construction-debris-removal.com/blogs/types-of-construction-debris',
  },
}

export default function TypesOfConstructionDebris() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/types-construction-debris.webp"
          alt="Types of Construction Debris in Boise"
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
            Types of Construction Debris and How Each Is Handled
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Not all construction debris is created equal. Different materials have different weights, different disposal requirements, and different costs to remove.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Understanding what you\'re dealing with helps you estimate removal costs, avoid disposal problems, and potentially save money by recycling materials that have value.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's a rundown of the most common types of construction debris we see on Boise-area projects and how each is typically handled.
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
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                Concrete, Brick, and Masonry
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              These are the heavy hitters-literally. Concrete is one of the heaviest construction materials, which affects both how it\'s handled and what it costs to remove.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Common sources:</strong> Driveway and patio demolition, foundation removal, retaining walls, brick facades, block walls.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Weight factor:</strong> Concrete weighs about 150 pounds per cubic foot. A 4-inch thick, 10x10 patio slab weighs over a ton.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Disposal:</strong> Clean concrete (no rebar or minimal rebar) is often recyclable. It gets crushed into aggregate for road base and fill. Recycling is typically cheaper than landfill disposal.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Cost impact:</strong> Because of the weight, concrete removal is priced by weight or with specific pricing. Don\'t be surprised when a small pile of concrete costs more than a larger pile of lighter materials.
            </p>
          </div>
        </div>
      </section>

      {/* Wood and Lumber */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Wood and Lumber
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Wood is bulky but relatively light, which means it takes up truck space without adding as much weight as masonry.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Common sources:</strong> Framing demolition, deck removal, fence teardown, cabinet removal, trim and molding.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Types matter:</strong> Clean, untreated wood has some recycling potential. Painted wood and pressure-treated lumber have more limited options. Most ends up in landfill.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hazard consideration:</strong> Old painted wood may contain lead paint if from pre-1978 structures. This doesn\'t change disposal much in most cases, but be aware of it.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Cost factor:</strong> Wood is priced more by volume than weight since it fills space quickly. A truckload of wood debris weighs much less than a truckload of concrete.
            </p>
          </div>
        </div>
      </section>

      {/* Drywall */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Drywall and Plaster
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Drywall (also called sheetrock or gypsum board) is common in almost every interior demolition or renovation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Common sources:</strong> Wall removal, ceiling demolition, water-damaged areas, renovation remodeling.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Disposal considerations:</strong> Clean, unpainted new drywall scraps can sometimes be recycled. Painted, textured, or damaged drywall typically goes to landfill. Old plaster (from pre-1950s homes) may contain asbestos and requires testing.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Weight vs. volume:</strong> Drywall is moderately heavy-heavier than wood but lighter than masonry. It\'s also fragile and breaks into pieces that don\'t stack efficiently.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Dust factor:</strong> Drywall creates significant dust during demolition and handling. This affects cleanup and can be a concern for occupied buildings.
            </p>
          </div>
        </div>
      </section>

      {/* Roofing */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Roofing Materials
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Roofing debris from tear-offs is heavy, bulky, and has specific disposal requirements.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Asphalt shingles:</strong> Heavy (about 200-400 lbs per square of roofing). Some markets have shingle recycling programs, but options in Idaho are limited</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Wood shakes:</strong> Can go with regular wood waste. Watch for old shakes that may have been treated with preservatives</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Metal roofing:</strong> Recyclable as scrap metal-this actually has value</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Underlayment and tar paper:</strong> Goes to landfill with shingle debris</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Old roof debris:</strong> May contain asbestos if from certain eras-verify before disturbing</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              Roofing tear-offs generate a lot of debris quickly. Most roofers handle their own debris removal, but we also work with contractors who need additional support.
            </p>
          </div>
        </div>
      </section>

      {/* Metals */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Metals
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Metal is the one category where recycling isn't just cheaper-it can actually put money in your pocket.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Common sources:</strong> Plumbing (copper pipes), electrical (copper wire), HVAC (aluminum and steel), structural steel, rebar, metal framing, appliances.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Value varies:</strong> Copper is most valuable ($2-4/lb). Aluminum brings decent money. Steel and iron are lower value but still worth recycling.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Separation matters:</strong> Sorted metals bring better prices than mixed loads. It\'s worth separating copper from steel from aluminum if you have significant quantities.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Our approach:</strong> We pull recyclable metals from debris loads when feasible. This offsets disposal costs and keeps valuable materials out of the landfill.
            </p>
          </div>
        </div>
      </section>

      {/* Flooring */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Flooring Materials
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Flooring removal generates significant debris, and the type of flooring determines disposal options.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Carpet:</strong> Bulky and heavy when rolled up. Recycling programs exist nationally but are limited locally. Most goes to landfill.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Vinyl and linoleum:</strong> Goes to landfill. Old vinyl (pre-1980s) may contain asbestos-get it tested if unsure.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tile:</strong> Ceramic and porcelain tile goes to landfill unless clean and sorted. The mortar or thinset attached makes recycling difficult.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Hardwood:</strong> Good-condition hardwood flooring has salvage value. Damaged or worn hardwood goes with regular wood debris.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Subfloor:</strong> Plywood and OSB subfloor goes with wood waste. Concrete subfloors follow masonry disposal paths.
            </p>
          </div>
        </div>
      </section>

      {/* Hazardous Materials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              Hazardous Materials to Watch For
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Some materials can\'t go in regular construction debris loads and require special handling:
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Asbestos:</strong> Found in old insulation, floor tiles, roofing, and siding from certain eras. Must be tested, contained, and disposed of by licensed specialists.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Lead paint:</strong> Common in pre-1978 buildings. Painted surfaces may require special handling depending on conditions and regulations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Chemicals:</strong> Old paint cans, solvents, adhesives, and other chemicals found during renovation are hazardous waste, not construction debris.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If you encounter or suspect hazardous materials in your Treasure Valley project, address them properly before proceeding with general debris removal.
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
              Construction debris comes in many forms, and understanding what you have affects how it\'s handled and what it costs to remove.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Heavy materials like concrete cost more to remove. Metals may actually generate value. Some materials require special handling. Mixed loads typically go to landfill.
            </p>

            <p className="text-gray-600 leading-relaxed">
              When you call for a removal estimate, tell us what materials you\'re dealing with. The more specific you can be, the more accurate our quote will be. And if you\'re not sure what you have-especially in older Boise homes-we can help you figure it out.
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
              We handle all types of construction debris throughout Boise, Meridian, Nampa, and the Treasure Valley. Call for a free estimate.
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
