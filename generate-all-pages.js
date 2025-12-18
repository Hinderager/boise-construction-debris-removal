const fs = require('fs');
const path = require('path');

const BASE_DIR = __dirname;
const APP_DIR = path.join(BASE_DIR, 'src', 'app');

// City configurations with coordinates for geo-tagging
const cities = [
  { name: 'Boise', slug: 'boise', description: 'Idaho\'s capital and largest city', lat: 43.6150, lon: -116.2023 },
  { name: 'Meridian', slug: 'meridian', description: 'Fastest growing city in Idaho', lat: 43.6121, lon: -116.3915 },
  { name: 'Nampa', slug: 'nampa', description: 'Canyon County\'s largest city', lat: 43.5407, lon: -116.5635 },
  { name: 'Caldwell', slug: 'caldwell', description: 'Historic city in Canyon County', lat: 43.6629, lon: -116.6874 },
  { name: 'Eagle', slug: 'eagle', description: 'Upscale community north of Boise', lat: 43.6954, lon: -116.3540 },
  { name: 'Garden City', slug: 'garden-city', description: 'Small city along the Boise River', lat: 43.6471, lon: -116.2357 },
  { name: 'Kuna', slug: 'kuna', description: 'Growing community south of Boise', lat: 43.4913, lon: -116.4201 },
  { name: 'Star', slug: 'star', description: 'Small town northwest of Boise', lat: 43.6921, lon: -116.4932 },
  { name: 'Middleton', slug: 'middleton', description: 'Rural community in Canyon County', lat: 43.7074, lon: -116.6177 },
  { name: 'Mountain Home', slug: 'mountain-home', description: 'City southeast of Boise', lat: 43.1332, lon: -115.6914 }
];

// Service types for each city
const cityServices = [
  { name: 'Remodel Debris Removal', slug: 'remodel-debris', description: 'residential remodel and renovation debris removal' },
  { name: 'Renovation Cleanup', slug: 'renovation-cleanup', description: 'cleanup services for home renovation projects' },
  { name: 'Demolition Debris', slug: 'demolition-debris', description: 'demolition debris and cleanup services' },
  { name: 'New Construction Cleanup', slug: 'new-construction', description: 'job site cleanup for new construction projects' },
  { name: 'Concrete Removal', slug: 'concrete-removal', description: 'concrete and masonry debris removal' },
  { name: 'Drywall Disposal', slug: 'drywall-disposal', description: 'drywall and sheetrock debris disposal' },
  { name: 'Roofing Debris', slug: 'roofing-debris', description: 'roofing material and shingle removal' },
  { name: 'Commercial Debris', slug: 'commercial-debris', description: 'commercial construction debris removal' }
];

// Additional service pages
const servicePages = [
  {
    category: 'residential-debris',
    pages: [
      { slug: 'remodel-debris', title: 'Remodel Debris Removal', description: 'debris removal for kitchen, bathroom, and whole-home remodels' },
      { slug: 'renovation-waste', title: 'Renovation Waste Removal', description: 'waste removal for renovation and update projects' },
      { slug: 'diy-project-cleanup', title: 'DIY Project Cleanup', description: 'cleanup for your DIY home improvement projects' }
    ]
  },
  {
    category: 'commercial-debris',
    pages: [
      { slug: 'new-construction', title: 'New Construction Cleanup', description: 'ongoing debris removal for new construction sites' },
      { slug: 'commercial-remodel', title: 'Commercial Remodel Debris', description: 'debris removal for commercial remodeling projects' },
      { slug: 'tenant-improvement', title: 'Tenant Improvement Cleanup', description: 'cleanup for tenant improvement and fit-out projects' }
    ]
  },
  {
    category: 'demolition-cleanup',
    pages: [
      { slug: 'interior-demo', title: 'Interior Demolition Cleanup', description: 'cleanup after interior demolition work' },
      { slug: 'exterior-demo', title: 'Exterior Demolition Cleanup', description: 'debris removal from exterior demolition' },
      { slug: 'structural-demo', title: 'Structural Demolition Cleanup', description: 'complete cleanup after structural demolition' }
    ]
  },
  {
    category: 'specialty-debris',
    pages: [
      { slug: 'concrete-removal', title: 'Concrete & Masonry Removal', description: 'heavy concrete and masonry debris removal' },
      { slug: 'drywall-disposal', title: 'Drywall Disposal', description: 'proper disposal of drywall and sheetrock waste' },
      { slug: 'roofing-materials', title: 'Roofing Material Removal', description: 'shingle and roofing debris removal' }
    ]
  }
];

// Template for city main page
function createCityMainPage(city) {
  return `import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Construction Debris Removal ${city.name} ID | Top Shelf',
  description: 'Professional construction debris removal in ${city.name}, Idaho. Residential and commercial cleanup. Same-day service available. Call (208) 505-9352.',
  keywords: ['debris removal ${city.name}', 'construction cleanup ${city.name}', 'demolition debris ${city.name}'],
  alternates: {
    canonical: 'https://boise-construction-debris-removal.com/cities-served/${city.slug}',
  },
}

const services = [
  { name: 'Remodel Debris Removal', slug: 'remodel-debris' },
  { name: 'Renovation Cleanup', slug: 'renovation-cleanup' },
  { name: 'Demolition Debris', slug: 'demolition-debris' },
  { name: 'New Construction Cleanup', slug: 'new-construction' },
  { name: 'Concrete Removal', slug: 'concrete-removal' },
  { name: 'Drywall Disposal', slug: 'drywall-disposal' },
  { name: 'Roofing Debris', slug: 'roofing-debris' },
  { name: 'Commercial Debris', slug: 'commercial-debris' }
]

export default function ${city.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-[#FFC845]" />
            <span className="text-white text-sm">${city.name}, Idaho</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Construction Debris Removal in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Fast, reliable construction debris removal for ${city.name} contractors and homeowners. Same-day service available.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">Debris Removal Services in ${city.name}</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Top Shelf Debris Removal provides professional construction cleanup throughout ${city.name}. Whether you're a contractor working on a commercial build or a homeowner tackling a remodel, we handle the debris so you can focus on the project.</p>
              <p>We serve all of ${city.name} with same-day service when available. Call us and we'll give you a straight quote over the phone.</p>
            </div>

            <h3 className="text-2xl font-bold text-dark-blue mb-6">Our ${city.name} Services</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={\`/cities-served/${city.slug}/\${service.slug}\`}
                  className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFC845] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{service.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Debris Removal in ${city.name}?</h3>
              <p className="text-gray-300 mb-6">Call now for fast, professional service.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Template for city service page
function createCityServicePage(city, service) {
  return `import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, CheckCircle, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: '${service.name} ${city.name} ID | Top Shelf Debris Removal',
  description: 'Professional ${service.description} in ${city.name}, Idaho. Licensed and insured. Call (208) 505-9352 for fast service.',
  keywords: ['${service.slug.replace(/-/g, ' ')} ${city.name}', 'debris removal ${city.name}', 'construction cleanup ${city.name}'],
  alternates: {
    canonical: 'https://boise-construction-debris-removal.com/cities-served/${city.slug}/${service.slug}',
  },
}

export default function ${city.name.replace(/[^a-zA-Z]/g, '')}${service.name.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-[#FFC845]" />
            <span className="text-white text-sm">${city.name}, Idaho</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">${service.name} in ${city.name}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">Professional ${service.description} serving ${city.name} and surrounding areas.</p>
          <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
            <Phone className="w-5 h-5" />(208) 505-9352
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p>Top Shelf Debris Removal provides ${service.description} throughout ${city.name}. We handle the heavy lifting and proper disposal so you can focus on your project.</p>
              <p>Whether it's a small residential job or a large commercial project, we've got the equipment and experience to handle it efficiently.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">Why Choose Us in ${city.name}</h2>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Local ${city.name} Service:</strong> We know the area and respond quickly to service calls.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Transparent Pricing:</strong> Know the cost before we start any work.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Same-Day Service:</strong> Available when your schedule demands it.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Licensed & Insured:</strong> Professional, trustworthy service you can count on.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Eco-Friendly:</strong> We recycle and donate materials whenever possible.</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Schedule Service in ${city.name}?</h3>
              <p className="text-gray-300 mb-6">Call now for a free quote and fast service.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-dark-blue mb-6">Other Services in ${city.name}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities-served/${city.slug}" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">All ${city.name} Services</Link>
            <Link href="/cities-served/${city.slug}/remodel-debris" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Remodel Debris</Link>
            <Link href="/cities-served/${city.slug}/demolition-debris" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Demolition Cleanup</Link>
            <Link href="/cities-served/${city.slug}/concrete-removal" className="text-dark-blue underline hover:text-[#0b7fb6] font-medium">Concrete Removal</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Template for service detail pages
function createServiceDetailPage(category, page) {
  const categoryTitles = {
    'residential-debris': 'Residential',
    'commercial-debris': 'Commercial',
    'demolition-cleanup': 'Demolition',
    'specialty-debris': 'Specialty'
  };

  return `import { Metadata } from 'next'
import { Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '${page.title} | Boise Construction Debris Removal',
  description: 'Professional ${page.description} in Boise and the Treasure Valley. Licensed, insured, and reliable. Call (208) 505-9352.',
  alternates: { canonical: 'https://boise-construction-debris-removal.com/services/${category}/${page.slug}' },
}

export default function ${page.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-b from-dark-blue to-[#1a5a9e]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">${page.title}</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Professional ${page.description} throughout the Treasure Valley.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>Top Shelf Debris Removal specializes in ${page.description}. We handle the cleanup so you can focus on what matters - finishing your project on time and on budget.</p>
              <p>Our team has the equipment and experience to handle jobs of any size efficiently and professionally.</p>
            </div>

            <h2 className="text-3xl font-bold text-dark-blue mb-6">What We Do</h2>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Load and haul all debris from your property</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sort materials for recycling when possible</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Dispose of everything properly at licensed facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Clean up the area when we're done</span>
              </li>
            </ul>

            <div className="mt-12 p-8 bg-dark-blue rounded-xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Schedule ${categoryTitles[category]} Debris Removal</h3>
              <p className="text-gray-300 mb-6">Call for a free quote and fast service.</p>
              <a href="tel:2085059352" className="inline-flex items-center gap-2 bg-[#FFC845] text-dark-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
                <Phone className="w-5 h-5" />(208) 505-9352
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
`;
}

// Create all city pages
function generateAllPages() {
  console.log('Starting page generation...\n');
  let pagesCreated = 0;

  // Create city main pages and service pages
  cities.forEach(city => {
    const cityDir = path.join(APP_DIR, 'cities-served', city.slug);

    // Create city main page
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }

    const cityPagePath = path.join(cityDir, 'page.tsx');
    fs.writeFileSync(cityPagePath, createCityMainPage(city));
    console.log(`✓ Created ${city.name} main page`);
    pagesCreated++;

    // Create service pages for each city
    cityServices.forEach(service => {
      const serviceDir = path.join(cityDir, service.slug);
      if (!fs.existsSync(serviceDir)) {
        fs.mkdirSync(serviceDir, { recursive: true });
      }

      const servicePagePath = path.join(serviceDir, 'page.tsx');
      fs.writeFileSync(servicePagePath, createCityServicePage(city, service));
      pagesCreated++;
    });

    console.log(`  ✓ Created ${cityServices.length} service pages for ${city.name}`);
  });

  // Create service detail pages
  servicePages.forEach(({ category, pages }) => {
    pages.forEach(page => {
      const serviceDir = path.join(APP_DIR, 'services', category, page.slug);
      if (!fs.existsSync(serviceDir)) {
        fs.mkdirSync(serviceDir, { recursive: true });
      }

      const pageContent = createServiceDetailPage(category, page);
      const pagePath = path.join(serviceDir, 'page.tsx');
      fs.writeFileSync(pagePath, pageContent);
      pagesCreated++;
    });
    console.log(`✓ Created ${pages.length} pages for ${category}`);
  });

  console.log(`\n✅ Successfully created ${pagesCreated} pages!`);
  console.log(`\nBreakdown:`);
  console.log(`- ${cities.length} city main pages`);
  console.log(`- ${cities.length * cityServices.length} city service pages`);
  console.log(`- ${servicePages.reduce((sum, cat) => sum + cat.pages.length, 0)} service detail pages`);
}

// Run the generator
generateAllPages();
