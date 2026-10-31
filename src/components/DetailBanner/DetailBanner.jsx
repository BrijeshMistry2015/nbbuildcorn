import React from "react";
import Image from "next/image";
import "./DetailBanner.css";

function DetailBanner({ project }) {
    if (!project) return null;

    const title = project?.project_title || project?.project_name || "";
    const logo = project?.project_logo_full || "";
    const type = project?.size_price || project?.project_type || "";
    const location = project?.location || "";
    const possession = project?.highlights?.find(
        (item) => item?.name?.toLowerCase() === "status"
    );
    const status = possession?.tag_line || "";
    const image =
        project?.banner_data?.image_web_full ||
        project?.banners_data?.images?.[0]?.image_web_full ||
        "";
    const getOriginalImage = (url) => {
        if (!url) return "";

        try {
            const parsedUrl = new URL(url);
            if (parsedUrl.pathname.includes("/image-tool/index.php")) {
                return parsedUrl.searchParams.get("src") || url;
            }
            return url;
        } catch {
            return url;
        }
    };
    const bannerImage = getOriginalImage(image);

    return (
        <section className="detail-banner">

            <div className="detail-banner-top  section-padding-half">
                <div className="main-container-fluid">
                    <div className="detail-banner-content inner-flex inner-flex-small-content">
                        <div className="detail-banner-logo">
                            {logo ? (
                                <Image
                                    src={logo}
                                    alt={title}
                                    width={180}
                                    height={140}
                                    className="detail-project-logo"
                                />
                            ) : (
                                <h1>{title}</h1>
                            )}
                        </div>
                        <div className="detail-banner-info flex-row inner-flex-small">

                            {type && (
                                <div className="detail-banner-info-item flex-row">
                                    <div className="detail_logo">
                                        <img src="/images/building.svg" alt="" />
                                    </div>
                                    <div className="section-paragraph">
                                        <p className="white-color">{type}</p>
                                    </div>
                                </div>
                            )}

                            {location && (
                                <div className="detail-banner-info-item flex-row">
                                    <div className="detail_logo">
                                        <img src="/images/location.svg" alt="" />
                                    </div>
                                    <div className="section-paragraph">
                                        <p className="white-color">{location}</p>
                                    </div>
                                </div>
                            )}

                            {status && (
                                <div className="detail-banner-info-item flex-row">
                                    <div className="detail_logo">
                                        <img src="/images/status.svg" alt="" />
                                    </div>
                                    <div className="section-paragraph">
                                        <p className="white-color">{status}</p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
            <div>
                {bannerImage && (
                    <div className="detail-banner-image">
                        <Image
                            src={bannerImage}
                            alt={title}
                            width={1920}
                            height={1080}
                            className="detail-banner-img"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}

export default DetailBanner;