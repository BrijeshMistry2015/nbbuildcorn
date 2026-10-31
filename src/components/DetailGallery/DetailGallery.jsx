"use client";

import Image from "next/image";
import { useState } from "react";
import "./DetailGallery.css";

function getOriginalImageUrl(imageUrl) {
    if (!imageUrl) {
        return "";
    }

    try {
        const url = new URL(imageUrl, "https://gallery.local");
        if (url.pathname.includes("/image-tool/")) {
            return url.searchParams.get("src") || imageUrl;
        }
    } catch {
        return imageUrl;
    }

    return imageUrl;
}

function DetailGallery({ project }) {
    const [expandedGalleries, setExpandedGalleries] = useState({});
    const galleries = Array.isArray(project?.gallery_data)
        ? project.gallery_data
        : [];
    const galleryItems = galleries
        .map((gallery, galleryIndex) => ({
            gallery,
            galleryIndex,
            images: (Array.isArray(gallery?.image) ? gallery.image : [])
                .map((image) => ({
                    ...image,
                    src: getOriginalImageUrl(image?.image_full || image?.image),
                }))
                .filter((image) => image.src)
        }))
        .filter(({ images }) => images.length > 0);

    if (galleryItems.length === 0) {
        return null;
    }

    return (
        <section className="detail-gallery">
            {galleryItems.map(({ gallery, galleryIndex, images }) => {
                const title = gallery?.title || "Gallery";
                const galleryId =
                    gallery?.project_gallery_id ||
                    `${project?.slug || project?.project_id || "project"}-${galleryIndex}`;
                const isExpanded = Boolean(expandedGalleries[galleryId]);

                return (
                    <div className="detail-gallery__group main-container-fluid overflow" key={galleryId}>
                        {gallery?.tag_line ? (
                            <div className="detail-gallery__intro inner-flex-center lh1 section-padding-big">
                                <div>
                                    <h2 className="detail-gallery__tagline uppercase">
                                        {gallery.tag_line?.split(" ").map((word, index) => (
                                            <span key={index} className="white-color">
                                                {word}
                                                <br />
                                            </span>
                                        ))}
                                    </h2>
                                </div>
                            </div>
                        ) : (
                            <h2 className="detail-gallery__heading">
                                {title}
                            </h2>
                        )}
                        <div className="section-padding-half inner-flex inner-flex-medium">
                            <div className="section-title text-center">
                                <h2 className="detail-gallery__heading white-color">
                                    {title}
                                </h2>
                            </div>
                            <div className="detail-gallery__grid">
                                {images.map((image, imageIndex) => {
                                    const isHidden = !isExpanded && imageIndex >= 9;
                                    const isLastVisible =
                                        imageIndex === images.length - 1 ||
                                        (!isExpanded && imageIndex === 8);

                                    return (
                                        <a
                                            className={`relative overflow detail-gallery__item${isLastVisible ? " detail-gallery__item--wide" : ""}`}
                                            href={image.src}
                                            data-fancybox={`project-gallery-${galleryId}`}
                                            data-caption={image.title || title}
                                            hidden={isHidden}
                                            aria-hidden={isHidden}
                                            tabIndex={isHidden ? -1 : undefined}
                                            key={
                                                image.image_id ||
                                                `${galleryId}-${imageIndex}`
                                            }
                                        >
                                            <Image
                                                src={image.src}
                                                alt={image.title || title}
                                                fill
                                                unoptimized
                                                sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                                            />
                                            <span className="detail-gallery__view">
                                                View
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default DetailGallery;
