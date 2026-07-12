"use client";

import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import ChannelCard from "./ChannelCard";
import RevenueCard from "./RevenueCard";
import StatsCard from "./StatsCard";
import InsightsCard from "./InsightsCard";
import RevenueChart from "./RevenueChart";
import FAQ from "./FAQ";
import RelatedTools from "./RelatedTools";
import DownloadReport from "./DownloadReport";
import ShareResults from "./ShareResults";
import ErrorCard from "./ErrorCard";
import { calculateRevenue } from "@/utils/revenue";




export default function RevenueCalculator() {
  // Search State
  const [channelUrl, setChannelUrl] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showChannel, setShowChannel] = useState(false);
  const [showRevenue, setShowRevenue] = useState(false);

  // Revenue State
  const [minRevenue, setMinRevenue] = useState(0);
  const [avgRevenue, setAvgRevenue] = useState(0);
  const [maxRevenue, setMaxRevenue] = useState(0);

  const [dailyRevenue, setDailyRevenue] = useState(0);
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [yearlyRevenue, setYearlyRevenue] = useState(0);

  // Country
  const [country, setCountry] = useState("United States");

  // Views & Videos
  const [totalViews, setTotalViews] = useState(0);
  const [totalVideos, setTotalVideos] = useState(0);

  // Channel Data
  const [channelName, setChannelName] = useState("");
  const [subscribers, setSubscribers] = useState("");
  const [views, setViews] = useState("");
  const [videos, setVideos] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("Entertainment");
  const [contentType, setContentType] = useState("Long Videos");



  // Search Button
  async function handleSearch() {
    if (channelUrl.trim() === "") {
      setMessage("❌ Please enter a YouTube Channel URL.");
      setShowChannel(false);
      setShowRevenue(false);
      return;
    }

    setLoading(true);
    setMessage("Searching channel...");

    try {
      const response = await fetch(
  `    ${process.env.NEXT_PUBLIC_API_URL}/api/channel?url=${encodeURIComponent(
        channelUrl
      )}`
    );
      const data = await response.json();
      
      console.log(data);
      console.log("Thumbnail URL:", data.channel?.thumbnail);

      if (data.success) {
        setChannelName(data.channel.channelName);
        setSubscribers(data.channel.subscribers);
        setViews(data.channel.views);
        setVideos(data.channel.videos);
        setThumbnail(data.channel.thumbnail);

        const channelViews = Number(data.channel.views);
        const channelVideos = Number(data.channel.videos);

        setTotalViews(channelViews);
        setTotalVideos(channelVideos);

        const result = calculateRevenue(
          channelViews,
          channelVideos,
          country,
           category,
           
           
         );

         if (result) {
          setMinRevenue(result.minRevenue);
          setAvgRevenue(result.avgRevenue);
          setMaxRevenue(result.maxRevenue);

         setDailyRevenue(result.dailyRevenue);
         setMonthlyRevenue(result.monthlyRevenue);
         setYearlyRevenue(result.yearlyRevenue);
         
        }

        setMessage("✅ Channel Found!");
        setShowChannel(true);
        setShowRevenue(true);
      } else {
        setMessage("❌ Channel not found.");
        setShowChannel(false);
        setShowRevenue(false);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);

      setLoading(false);
      setMessage("❌ Something went wrong.");
      setShowChannel(false);
      setShowRevenue(false);
    }
  }

useEffect(() => {
  if (totalViews > 0 && totalVideos > 0) {
    const result = calculateRevenue(
      totalViews,
      totalVideos,
      country,
      category,
    
    );

    if (result) {
      setMinRevenue(result.minRevenue);
      setAvgRevenue(result.avgRevenue);
      setMaxRevenue(result.maxRevenue);

      setDailyRevenue(result.dailyRevenue);
      setMonthlyRevenue(result.monthlyRevenue);
      setYearlyRevenue(result.yearlyRevenue);
    }
  }
}, [country, category, totalViews, totalVideos]);

    return (
    <section
      id="calculator"
      className="py-20 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900">
          YouTube Revenue Calculator
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Paste a YouTube Channel URL to estimate its earnings.
        </p>

        {/* Search Form */}
        <SearchForm
          channelUrl={channelUrl}
          setChannelUrl={setChannelUrl}
          handleSearch={handleSearch}
        />

        {/* Loading */}
        {loading ? (
          <div className="mt-8 flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>

            <p className="mt-4 text-gray-700 font-semibold">
              Searching Channel...
            </p>
          </div>
        ) : (
          <p className="mt-6 text-center text-lg font-medium text-gray-800">
            {message}
          </p>
        )}

        {/* Channel */}
        <ChannelCard
          showChannel={showChannel}
          channelName={channelName}  
          subscribers={subscribers}
          views={views}
          videos={videos}
          thumbnail={thumbnail}
        />

        {/* Revenue */}
        <RevenueCard
  showRevenue={showRevenue}
  minRevenue={minRevenue}
  avgRevenue={avgRevenue}
  maxRevenue={maxRevenue}
  dailyRevenue={dailyRevenue}
  monthlyRevenue={monthlyRevenue}
  yearlyRevenue={yearlyRevenue}
  country={country}
  setCountry={setCountry}
  category={category}
  setCategory={setCategory}
   />

        {/* Statistics */}
        <StatsCard
          show={showChannel}
          subscribers={subscribers}
          views={views}
          videos={videos}
        />

        {/* Insights */}
        <InsightsCard
          show={showChannel}
          totalViews={totalViews}
          totalVideos={totalVideos}
          country={country}
        />

        {/* Chart */}
        <RevenueChart
          show={showRevenue}
          dailyRevenue={dailyRevenue}
          monthlyRevenue={monthlyRevenue}
          yearlyRevenue={yearlyRevenue}
        />

        {/* PDF */}
       <DownloadReport
  show={showRevenue}
  monthlyRevenue={`$${Math.round(monthlyRevenue).toLocaleString()}`}
  yearlyRevenue={`$${Math.round(yearlyRevenue).toLocaleString()}`}
  logo={thumbnail}
  banner=""
/>

        {/* Share */}
        <ShareResults
          show={showRevenue}
          channelName={channelName}
          yearlyRevenue={yearlyRevenue}
        />

      </div>
    </section>
  );
}