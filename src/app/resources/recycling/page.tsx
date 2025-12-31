import { Metadata } from 'next'
import { Phone, Recycle, CheckCircle, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recycling & Eco-Friendly Disposal | Boise Construction Debris Removal',
  description: 'Learn about our eco-friendly debris disposal practices. We recycle metal, donate usable materials, and minimize landfill waste in Boise.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/resources/recycling' },
}

export default function RecyclingPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Recycling & Eco-Friendly Disposal</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">We keep as much debris out of landfills as possible.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Look, we\'re not going to pretend that hauling away construction debris is some kind of green crusade. But we do think it\'s worth making an effort to recycle what we can and dispose of things properly instead of just dumping everything in a landfill.</p>
              <p>Here's what we actually do to minimize waste.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">How We Handle Different Materials</h2>
            <div className="space-y-4 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <Recycle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <h3 className="text-xl font-bold text-dark-blue">Metal</h3>
                </div>
                <p className="text-gray-600">All metal goes to scrap recycling. Copper piping, steel beams, aluminum siding, old fixtures - we separate it out and take it to a metal recycler.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <Recycle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <h3 className="text-xl font-bold text-dark-blue">Usable Materials</h3>
                </div>
                <p className="text-gray-600">Good condition cabinets, doors, windows, or fixtures? We donate them to ReStore or similar organizations. Someone else can use them instead of them taking up space in a landfill.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <Recycle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <h3 className="text-xl font-bold text-dark-blue">Wood</h3>
                </div>
                <p className="text-gray-600">Clean lumber that\'s not painted or treated can be recycled. A lot of it gets ground up for mulch or biomass fuel.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <Recycle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <h3 className="text-xl font-bold text-dark-blue">Concrete & Masonry</h3>
                </div>
                <p className="text-gray-600">Concrete gets crushed and recycled into aggregate for road base or new concrete. It\'s heavy and a pain to deal with, but at least it doesn\'t have to go to waste.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <Recycle className="w-6 h-6 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <h3 className="text-xl font-bold text-dark-blue">Drywall</h3>
                </div>
                <p className="text-gray-600">When possible, we take drywall to facilities that recycle it into new drywall or use it as a soil amendment. Not every facility accepts it, but we use ones that do when we can.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What About the Rest?</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Some stuff can\'t be recycled - mixed debris, contaminated materials, certain types of composite materials. That goes to licensed disposal facilities. We\'re not dumping it illegally somewhere, which is more than you can say for some cheaper haulers.</p>
              <p>We use legitimate transfer stations and landfills that follow proper regulations. It costs us more, but that\'s the right way to do it.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Bother?</h2>
            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Less Landfill Space:</strong>
                  <span className="text-gray-600"> Landfills are finite. The more we can divert, the better.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Reuse Resources:</strong>
                  <span className="text-gray-600"> Recycling metal and concrete means less new material needs to be extracted.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">Help Others:</strong>
                  <span className="text-gray-600"> Donations to ReStore help people afford materials for their own projects.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-dark-blue">It\'s the Right Thing:</strong>
                  <span className="text-gray-600"> We live here too. Might as well take care of the place.</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-12">
              <div className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-dark-blue mb-2">You Don\'t Pay Extra for This</h3>
                  <p className="text-gray-600">Recycling and proper disposal are part of our normal service. We\'re not charging you a premium to feel good about it - it\'s just how we operate.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Responsible Debris Removal</h3>
              <p className="text-gray-300 mb-6">We\'ll handle your construction debris the right way.</p>
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
