import React, { cache } from "react";
import { notFound } from "next/navigation";
import api from "@/helper/api.interceptor";
import DetailBanner from "@/components/DetailBanner/DetailBanner";
import DetailAbout from "@/components/DetailAbout/DetailAbout";
import DetailHighlight from "@/components/DetailHighlight/DetailHighlight";

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
        <>
            <DetailBanner project={projectData} />
            <DetailAbout project={projectData} />
            <DetailHighlight project={projectData}/>
        </>
    );
}

export default Page;