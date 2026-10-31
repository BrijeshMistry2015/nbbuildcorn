"use client";

import Image from "next/image";
import "./ConstructionUpdate.css";

function ConstructionUpdate({ project }) {
    const construction = project?.construction_data_2 || {};

    const getOriginalImage = (url) => {
        if (!url) return "";

        try {
            const parsedUrl = new URL(url);

            if (parsedUrl.pathname.includes("image-tool")) {
                return parsedUrl.searchParams.get("src") || url;
            }

            return url;
        } catch {
            return url;
        }
    };

    const images = (construction?.construction_array || []).flatMap((item) => {
        const imageArray = Array.isArray(item?.image)
            ? item.image
            : [item];

        return imageArray
            .map((image) => ({
                ...image,
                src: getOriginalImage(
                    image.image_main || image.image_full || image.image
                ),
            }))
            .filter((image) => image.src);
    });

    const title = construction?.title || "Construction Update";
    const progress = Number(construction?.progress_percent || 0);

    if (!images.length) return null;

    return (
        <section className="construction-update smoke-color section-padding-half">
            <div className="main-container-fluid">
                <div className="inner-flex inner-flex-big-64">
                    <div className="section-title">
                        <h2 className="construction-update__heading">
                            {title}
                        </h2>
                    </div>

                    <div className="construction-update__grid">
                        {images.map((image, index) => (
                            <a
                                href={image.src}
                                data-fancybox="construction-gallery"
                                data-type="image"
                                data-caption={image.title || title}
                                className={`construction-update__item ${index >= 2 ? "construction-update__hidden" : ""}`}
                                key={`${image.construction_id || "construction"}-${index}`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.title || title}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 767px) 100vw, 50vw"
                                    style={{ objectFit: "cover" }}
                                />

                                {index === 1 && (
                                    <div
                                        className="construction-update__progress"
                                        style={{ "--progress": `${progress}%` }}
                                    >
                                        <div className="construction-update__progress-inner">
                                            <div className="section-subtitle">
                                                <h4 className="white-color">{progress}%</h4>
                                            </div>
                                            <div>
                                                <p className="white-color">
                                                    {image.construction_date || ""}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConstructionUpdate;