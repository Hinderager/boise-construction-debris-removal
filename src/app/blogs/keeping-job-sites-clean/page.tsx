import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HardHat, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Why Keeping Job Sites Clean Matters in Boise | Construction Debris Removal Pros',
  description: 'A clean construction site isn\'t just about appearances. It affects safety, efficiency, and your bottom line. Here\'s what Treasure Valley contractors should know.',
  alternates: {
    canonical: 'https://boise-construction-debris-removal.com/blogs/keeping-job-sites-clean',
  },
}

export default function KeepingJobSitesClean() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-end">
        <Image
          src="/generated/clean-job-site-boise.webp"
          alt="Clean Construction Job Site in Boise"
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
            Why Keeping Job Sites Clean Matters More Than You Think
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Walk onto some construction sites and you can barely find a clear path through the debris. Walk onto others and you wonder how anything's getting built—it's too clean.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The messy site isn't a sign of hard work. It's usually a sign of poor management, safety risks, and hidden costs that eat into project margins.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Here's why job site cleanliness matters more than most Boise contractors realize—and how to get it right without slowing down production.
            </p>
          </div>
        </div>
      </section>

      {/* Safety First */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-dark-blue rounded-full flex items-center justify-center">
                <HardHat className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gunmetal">
                The Safety Issue
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              This is the biggest one. OSHA data shows that slips, trips, and falls are among the most common construction injuries. And what causes most of them? Debris on the ground that shouldn't be there.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Loose lumber, scattered nails, piles of drywall scraps—these aren't just eyesores. They're hazards. A worker steps on a board with a nail sticking up, and suddenly you're dealing with a workers' comp claim, lost productivity, and potentially an OSHA inspection.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Fire risk is another factor. Accumulated wood scraps, paper, and packaging create fuel for fires. In dry Treasure Valley summers, this isn't theoretical—it's a real concern.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The cost of keeping a site clean is always less than the cost of a serious injury.
            </p>
          </div>
        </div>
      </section>

      {/* Efficiency */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              The Efficiency Factor
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Here's something that doesn't show up in safety statistics: messy sites are slow sites.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Workers spend time navigating debris</strong> instead of doing productive work. Every minute stepping over piles or moving stuff out of the way is a minute not spent on the actual job.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Tools and materials get lost.</strong> When everything's buried under debris, workers waste time searching for what they need. Or they grab new materials because finding the existing ones takes too long.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Quality suffers.</strong> Working in cluttered conditions leads to mistakes. It's harder to do precise work when you're tripping over stuff and can't find what you need.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Inspections take longer.</strong> When an inspector has to pick their way through debris to check your work, they're not in a good mood. And they might miss something that passes on a clean site—or find problems they wouldn't otherwise notice.
            </p>
          </div>
        </div>
      </section>

      {/* Client Impressions */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              What Clients See
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Your clients aren't construction professionals. They don't know what's normal on a job site. What they see is mess—or cleanliness.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              A homeowner visiting their renovation project forms impressions quickly. A messy site makes them wonder: if they can't keep the site organized, what about the work I can't see? Are they cutting corners inside the walls too?
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Fair or not, clients judge quality by what they can observe. A clean, organized site communicates professionalism and attention to detail.
            </p>

            <p className="text-gray-600 leading-relaxed">
              For commercial projects in the Boise area, this matters even more. Property managers and business owners who see a messy site start worrying about timelines, quality, and whether they hired the right contractor. Clean sites build confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-12 md:py-16 bg-dark-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Practical Approaches to Site Cleanliness
            </h2>

            <p className="text-blue-100 leading-relaxed mb-6">
              Keeping a site clean doesn't mean stopping work to sweep every hour. Here's what actually works:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>End-of-day cleanup.</strong> Build 15-30 minutes of cleanup into every day's schedule. It's not extra time—it's productive time that makes the next day start faster</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Designated debris areas.</strong> Have a specific spot where debris goes during the day. Everyone knows where to toss scraps, and it's easy to load out</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Regular removal schedule.</strong> Don't let debris accumulate for weeks. Schedule removal when the pile reaches a certain size or at regular intervals</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Make it someone's job.</strong> If cleanup is everyone's responsibility, it becomes no one's responsibility. Assign it specifically</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100"><strong>Separate recyclables.</strong> Metal, clean concrete, and cardboard have value. Separating them as you go saves money on disposal and might even generate some revenue</span>
              </div>
            </div>

            <p className="text-blue-100 leading-relaxed">
              The key is making cleanup part of the work process, not an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* When to Call for Removal */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-6">
              When to Schedule Debris Removal
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              There's a balance between removing debris too often (wasting time and money on small loads) and too rarely (letting it pile up and create problems).
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Before major phase transitions.</strong> Finishing demo? Get the debris out before framing starts. Done with framing? Clean up before drywall arrives. Fresh starts make each phase go smoother.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Before inspections.</strong> Inspectors work in better moods on clean sites, and they can actually see what they're inspecting.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>When debris impedes work.</strong> If the pile is in the way or creating safety issues, it's time. Don't wait for a scheduled removal date if the situation calls for action now.
            </p>

            <p className="text-gray-600 leading-relaxed">
              <strong>Before client walkthroughs.</strong> This one's about impressions, but impressions matter. Clean up before showing your client the progress.
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
              Clean job sites aren't about being neat for neatness's sake. They're about safety, efficiency, and professionalism—all things that affect your bottom line.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The time and money spent on regular cleanup and debris removal comes back in fewer injuries, faster work, happier clients, and a better reputation in the Treasure Valley construction community.
            </p>

            <p className="text-gray-600 leading-relaxed">
              If keeping sites clean is a struggle, it might be time to look at your debris removal process. Sometimes the issue isn't discipline—it's logistics. Having a reliable removal partner on call makes the whole thing easier.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gunmetal mb-4">
              Need Reliable Construction Debris Removal?
            </h2>
            <p className="text-gray-600 mb-8">
              We work with contractors throughout Boise, Meridian, Nampa, and the Treasure Valley. Fast response, fair pricing, and we show up when we say we will.
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
