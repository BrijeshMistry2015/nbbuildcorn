import React, { cache } from "react";
import { notFound } from "next/navigation";
import api from "@/helper/api.interceptor";
import DetailBanner from "@/components/DetailBanner/DetailBanner";
import DetailAbout from "@/components/DetailAbout/DetailAbout";
import DetailHighlight from "@/components/DetailHighlight/DetailHighlight";
import DetailGallery from "@/components/DetailGallery/DetailGallery";
import DetailNatural from "@/components/DetailNatural/DetailNatural";
import DetailCertificates from "@/components/DetailCertificates/DetailCertificates";
import ConstructionUpdate from "@/components/ConstructionUpdate/ConstructionUpdate";
import getProjectThemeClass from "@/helper/projectTheme";
import DetailAmenities from "@/components/DetailAmenities/DetailAmenities";

const getProjectDetail = cache(async (slug) => {
    return api.PropertyDetail(slug);
});

async function Page({ params }) {
    const { slug } = await params;

    let projectData = null;

    try {
        const response = await getProjectDetail(slug);

        console.log("PROJECT SLUG:", slug);
        console.log("PROJECT API RESPONSE:", response);

        projectData = Array.isArray(response)
            ? response.find(
                (item) =>
                    item?.slug?.toLowerCase() ===
                    decodeURIComponent(slug).toLowerCase()
            )
            : response;

        console.log("FINAL PROJECT DATA:", projectData);

    } catch (error) {
        console.error("Project Detail Error:", error);
        throw error;
    }

    if (!projectData?.project_title) {
        notFound();
    }

    return (
        <div className={getProjectThemeClass(projectData)}>
            <DetailBanner project={projectData} />
            <DetailAbout project={projectData} />
            <DetailHighlight project={projectData} />
            <DetailGallery project={projectData} />
            <DetailAmenities project={projectData} />
            <DetailNatural />
            <DetailCertificates />
            <ConstructionUpdate project={projectData} />
        </div>
    );
}

export default Page;