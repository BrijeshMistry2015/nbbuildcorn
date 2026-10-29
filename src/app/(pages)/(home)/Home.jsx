import HomeBanner from "@/components/HomeBanner/HomeBanner";
import React from "react";

function Home({ homeDetailsData, projects }) {
   const homeDetails = homeDetailsData?.data;


  return (
    <main>
      <HomeBanner
        image_web_full={homeDetails?.image_web_full}
      />
    </main>
  );
}

export default Home;
