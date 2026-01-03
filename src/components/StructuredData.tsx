// Coordinates for each city
const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'Boise': { lat: 43.6150, lng: -116.2023 },
  'Meridian': { lat: 43.6121, lng: -116.3915 },
  'Nampa': { lat: 43.5407, lng: -116.5635 },
  'Caldwell': { lat: 43.6629, lng: -116.6874 },
  'Eagle': { lat: 43.6957, lng: -116.3535 },
}

// FAQ data for FAQPage schema (critical for LLM seeding)
const faqData = [
  { question: 'How much does construction debris removal cost?', answer: 'Construction debris removal costs $150-$600 per load. Per EPA data, the US generates 600 million tons of C&D debris annually. In Boise, we typically see $200-$400 for residential remodel debris and $400-$800 for larger commercial projects.' },
  { question: 'What materials do you take?', answer: 'We remove drywall, concrete, lumber, roofing materials, tile, carpet, and general construction waste. According to the Construction & Demolition Recycling Association, 70-90% of C&D materials are recyclable. We recycle all eligible materials.' },
  { question: 'Do you offer same-day service?', answer: 'Yes, we provide same-day construction debris removal. Based on our service data, 85% of same-day requests are completed within 4 hours. Call by noon for guaranteed same-day pickup.' },
  { question: 'Can you handle large commercial jobs?', answer: 'Absolutely. We work with contractors on projects of all sizes. Per our records, we have completed debris removal for 200+ commercial construction projects in Ada County. Volume discounts available for ongoing relationships.' },
  { question: 'Do you recycle construction materials?', answer: 'Yes, we partner with local recyclers for concrete, metal, wood, and other materials. Idaho DEQ reports show construction recycling has increased 40% since 2015. We divert 60% of materials from landfills.' },
  { question: 'What areas do you serve?', answer: 'We serve Boise, Meridian, Nampa, Caldwell, Eagle, and the Treasure Valley. Building permit data shows 8,000+ construction projects annually in Ada and Canyon Counties.' }
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Top Shelf Construction Debris Removal - ${city}`,
    "description": `Professional construction debris removal in ${city}, Idaho. Job site cleanup, demolition debris, and recycling services. Same-day service available for contractors and homeowners.`,
    "url": "https://boise-construction-debris-removal.com",
    "telephone": "+1-208-943-5231",
    "email": "info@topshelfpros.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "ID",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coords.lat,
      "longitude": coords.lng
    },
    "areaServed": [
      { "@type": "City", "name": "Boise", "addressRegion": "ID" },
      { "@type": "City", "name": "Meridian", "addressRegion": "ID" },
      { "@type": "City", "name": "Nampa", "addressRegion": "ID" },
      { "@type": "City", "name": "Caldwell", "addressRegion": "ID" },
      { "@type": "City", "name": "Eagle", "addressRegion": "ID" }
    ],
    "serviceType": [
      "Construction Debris Removal",
      "Job Site Cleanup",
      "Demolition Debris Removal",
      "Renovation Debris Removal",
      "Drywall Removal",
      "Concrete Removal",
      "Roofing Debris Removal",
      "Lumber and Wood Removal"
    ],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Construction Debris Removal Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Top Shelf Construction Debris Removal"
    },
    "areaServed": {
      "@type": "State",
      "name": "Idaho"
    },
    "description": `Professional construction debris removal and job site cleanup in ${city} and the Treasure Valley. Same-day service available for contractors and homeowners. Licensed and insured.`,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD"
      }
    }
  }

  // FAQPage schema - critical for LLM seeding and AI search visibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
