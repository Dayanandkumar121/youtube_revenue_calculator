export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "YouTube Revenue Calculator",

    url: "https://yourdomain.com",

    description:
      "Free YouTube Revenue Calculator to estimate channel earnings.",

    potentialAction: {
      "@type": "SearchAction",

      target:
        "https://yourdomain.com/?q={search_term_string}",

      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}