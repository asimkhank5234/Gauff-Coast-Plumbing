import React from 'react';
import { COMPANY_NAME, PHONE_NUMBER, ADDRESS, ADDRESS_SHORT, EMAIL } from '../constants';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": COMPANY_NAME,
    "image": "https://picsum.photos/seed/plumbing-logo/400/400",
    "@id": "",
    "url": window.location.origin,
    "telephone": PHONE_NUMBER,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "438 Pompano",
      "addressLocality": "Hitchcock",
      "addressRegion": "TX",
      "postalCode": "77563",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.3491,
      "longitude": -95.0088
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
        "https://www.facebook.com/gauffcoastplumbing",
        "https://www.google.com/maps?q=Gauff+Coast+Plumbing"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default SchemaMarkup;
