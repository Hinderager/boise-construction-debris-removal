import { Metadata } from 'next'
import { Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Testimonials | Boise Construction Debris Removal',
  description: 'Read what customers say about Top Shelf Debris Removal. Real reviews from contractors and homeowners in the Treasure Valley.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/about-us/testimonials' },
}

const testimonials = [
  {
    name: 'Mike R.',
    role: 'General Contractor',
    text: 'We use Top Shelf for all our job site cleanup. They show up when they say they will and haul everything away. Makes my life easier.',
    rating: 5
  },
  {
    name: 'Jennifer L.',
    role: 'Homeowner',
    text: 'Had a basement remodel and ended up with a massive pile of debris. These guys came out same day and cleared it all out. Fair price, no hassle.',
    rating: 5
  },
  {
    name: 'Dave T.',
    role: 'Property Manager',
    text: 'Reliable and professional. I manage multiple properties and they handle all our renovation cleanouts. Never had an issue.',
    rating: 5
  },
  {
    name: 'Sarah M.',
    role: 'Homeowner',
    text: 'DIY demo gone wrong left our driveway full of old drywall and trim. They loaded everything up and even swept the area when done. Highly recommend.',
    rating: 5
  },
  {
    name: 'Tom B.',
    role: 'Remodeling Contractor',
    text: 'Fast, affordable, and they recycle what they can. Good people to work with.',
    rating: 5
  },
  {
    name: 'Lisa K.',
    role: 'Homeowner',
    text: 'Kitchen reno created more debris than we expected. Top Shelf handled it all without any issues. Very satisfied with their service.',
    rating: 5
  }
]

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Customer Testimonials</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">See what contractors and homeowners say about our debris removal service.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>We let our work speak for itself. Here's what customers say about working with Top Shelf Debris Removal.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFC845] text-[#FFC845]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-dark-blue">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-dark-blue p-6 mb-12">
              <h3 className="text-lg font-bold text-dark-blue mb-2">Want to Leave a Review?</h3>
              <p className="text-gray-600">We appreciate your feedback. After your job is complete, we'd love to hear about your experience.</p>
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Experience Our Service</h3>
              <p className="text-gray-300 mb-6">Join our satisfied customers. Call for debris removal today.</p>
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
