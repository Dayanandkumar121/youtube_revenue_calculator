export type LandingPageData = {
  slug: string;
  title: string;
  heading: string;
  description: string;
  aboutTitle: string;
  aboutDescription: string;
};

export const landingPages: Record<string, LandingPageData> = {
  "youtube-money-calculator": {
    slug: "youtube-money-calculator",

    title: "YouTube Money Calculator",

    heading: "YouTube Money Calculator",

    description:
      "Estimate YouTube earnings using channel statistics, RPM, CPM and audience country with our free calculator.",

    aboutTitle: "What is a YouTube Money Calculator?",

    aboutDescription:
      "A YouTube Money Calculator estimates how much a YouTube creator can earn based on views, RPM, CPM and public channel statistics.",
  },

  "youtube-rpm-calculator": {
    slug: "youtube-rpm-calculator",

    title: "YouTube RPM Calculator",

    heading: "YouTube RPM Calculator",

    description:
      "Estimate Revenue Per 1000 Views (RPM), monthly income and yearly YouTube earnings instantly.",

    aboutTitle: "What is YouTube RPM?",

    aboutDescription:
      "RPM means Revenue Per Mille. It estimates how much a creator earns for every 1000 views after YouTube's revenue share.",
  },

  "youtube-cpm-calculator": {
    slug: "youtube-cpm-calculator",

    title: "YouTube CPM Calculator",

    heading: "YouTube CPM Calculator",

    description:
      "Estimate YouTube CPM and advertising revenue using our free calculator.",

    aboutTitle: "What is YouTube CPM?",

    aboutDescription:
      "CPM (Cost Per Mille) is the amount advertisers pay for every 1,000 ad impressions. CPM depends on country, niche, advertiser demand and seasonality.",
  },
};