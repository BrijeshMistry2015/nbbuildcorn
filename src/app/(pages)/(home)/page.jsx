
import React from "react";
import api from "@/helper/api.interceptor";
import Home from "./Home";

export const metadata = {
  title: "NB Buildcon | Luxury Residential Projects in Ahmedabad",
  description:
    "Discover premium residential projects by NB Buildcon in Ahmedabad and Sanand. Explore luxury 4 & 5 BHK residences, modern apartments, and quality homes designed for better living.",
  keywords: [
    "NB Buildcon",
    "NB Group Ahmedabad",
    "Real Estate Developers Ahmedabad",
    "Luxury Apartments Ahmedabad",
    "Residential Projects Ahmedabad",
    "NB Palm",
    "NB Parva",
    "NB Sarvam",
    "Stark Torre",
    "Property in Sanand",
  ],
  alternates: {
    canonical: "https://www.nbbuildcon.com/",
  },
  openGraph: {
    title: "NB Buildcon | Luxury Residential Projects in Ahmedabad",
    description:
      "Explore premium homes and residential projects by NB Buildcon across Ahmedabad and Sanand.",
    url: "https://www.nbbuildcon.com/",
    siteName: "NB Buildcon",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NB Buildcon | Luxury Residential Projects in Ahmedabad",
    description:
      "Explore premium residential projects by NB Buildcon in Ahmedabad and Sanand.",
  },
};

async function Page() {
  let homeDetailsData = null;

  try {
    homeDetailsData = await api.HomeDetail();
  } catch (error) {
    console.error("HomeDetail API Error:", error);
  }

  return (
    <Home homeDetailsData={homeDetailsData} />
  );
}

export default Page;
