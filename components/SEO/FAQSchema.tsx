export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the YouTube Money Calculator work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The calculator estimates YouTube earnings using public channel statistics, estimated RPM values, audience country and total views."
        }
      },
      {
        "@type": "Question",
        "name": "Is the revenue estimate accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The estimate is based on average RPM values. Actual earnings depend on CPM, audience location, watch time, advertiser demand and other monetization methods."
        }
      },
      {
        "@type": "Question",
        "name": "Can I calculate any YouTube channel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can estimate earnings for any public YouTube channel by entering its URL."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}