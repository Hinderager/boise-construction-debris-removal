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
  {
    question: 'What construction debris do you haul in Boise?',
    answer: 'We take drywall, lumber, plywood, roofing shingles, concrete, brick, cabinets, countertops, flooring, tile, fixtures, insulation, siding—basically anything from a construction or demo project. We can\'t handle hazardous materials like asbestos or lead paint, but everything else is fair game.',
  },
  {
    question: 'How much does construction debris removal cost in Boise?',
    answer: 'Most jobs run $150 to $600 depending on volume and weight. We charge based on how much space you take up in the truck. Heavy materials like concrete cost a bit more due to disposal fees. We give you an exact price on-site before we load anything.',
  },
  {
    question: 'Can you provide same-day construction debris removal?',
    answer: 'Usually yes. If you call before noon, we can often get there same day. Construction schedules change fast and we understand that. Next-day service is almost always available if same day doesn\'t work out.',
  },
  {
    question: 'Do you work with contractors and builders in Boise?',
    answer: 'That\'s a big part of what we do. We work with general contractors, remodelers, roofers, and framers all over the valley. We can do one-time pickups or set up recurring service for bigger projects. We also offer contractor pricing if you use us regularly.',
  },
  {
    question: 'What areas do you serve for construction debris removal?',
    answer: 'We cover Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, and the rest of the Treasure Valley. If you\'re outside that area, call us anyway—we might be able to help at (208) 505-9352.',
  },
  {
    question: 'Do you recycle construction materials in Idaho?',
    answer: 'We recycle what we can. Clean wood, metal, cardboard, and concrete usually get recycled instead of landfilled. It\'s better for everyone and sometimes saves on disposal costs too.',
  },
  {
    question: 'How should I prepare for construction debris pickup?',
    answer: 'Just pile it somewhere accessible if you can. We do the loading. If it\'s inside, make sure we have a path to get to it. You don\'t need to sort or organize anything.',
  },
  {
    question: 'Can you remove heavy materials like concrete and brick?',
    answer: 'Yes, we handle concrete, brick, block, and other heavy materials. We have the equipment and crew to load them safely. Heavy materials may have additional disposal fees due to weight.',
  },
]

export function StructuredData({ city = 'Boise' }: { city?: string }) {
  const coords = cityCoordinates[city] || cityCoordinates['Boise']

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Boise Construction Debris Removal - ${city}`,
    "description": `Professional construction debris removal in ${city}, Idaho. Job site cleanup, demolition debris, and recycling services. Same-day service available for contractors and homeowners.`,
    "url": "https://boise-construction-debris-removal.com",
    "telephone": "+1-208-505-9352",
    "email": "info@boise-construction-debris-removal.com",
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
      "name": "Boise Construction Debris Removal"
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
