export type RevenueResult = {
  minRevenue: number;
  avgRevenue: number;
  maxRevenue: number;
  dailyRevenue: number;
  monthlyRevenue: number;
  yearlyRevenue: number;
};

export function calculateRevenue(
  totalViews: number,
  totalVideos: number,
  country: string,
  category: string
): 


RevenueResult {

  if (totalViews <= 0 || totalVideos <= 0) {
    return {
      minRevenue: 0,
      avgRevenue: 0,
      maxRevenue: 0,
      dailyRevenue: 0,
      monthlyRevenue: 0,
      yearlyRevenue: 0,
    };
  }

  const averageViews = totalViews / totalVideos;
  const dailyViews = averageViews / 365;

  let rpm = 4;

  switch (country) {
    case "India":
      rpm = 0.6;
      break;

    case "United States":
      rpm = 4;
      break;

    case "United Kingdom":
      rpm = 3.8;
      break;

    case "Canada":
      rpm = 3.5;
      break;

    case "Australia":
      rpm = 4.2;
      break;

    default:
      rpm = 4;
  }

  let multiplier = 1;

  switch (category) {
    case "Finance":
      multiplier = 2.0;
      break;

    case "Technology":
      multiplier = 1.6;
      break;

    case "Education":
      multiplier = 1.4;
      break;

    case "Gaming":
      multiplier = 0.9;
      break;

    case "Entertainment":
      multiplier = 1;
      break;

    default:
      multiplier = 1;
  }

  const avgRPM = rpm * multiplier;

  return {
    minRevenue: (dailyViews / 1000) * (avgRPM * 0.5),
    avgRevenue: (dailyViews / 1000) * avgRPM,
    maxRevenue: (dailyViews / 1000) * (avgRPM * 2),

    dailyRevenue: (dailyViews / 1000) * avgRPM,

    monthlyRevenue: ((dailyViews / 1000) * avgRPM) * 30,

    yearlyRevenue: ((dailyViews / 1000) * avgRPM) * 365,
  };
}