"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./DetailAmenities.css";

function getOriginalImageUrl(imageUrl) {
    if (!imageUrl) {
        return "";
    }

    try {
        const url = new URL(imageUrl, "https://amenities.local");
        if (url.pathname.includes("/image-tool/")) {
            return url.searchParams.get("src") || imageUrl;
        }
    } catch {
        return imageUrl;
    }

    return imageUrl;
}

function DetailAmenities({ project }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const amenities = Array.isArray(project?.amenities_data)
        ? project.amenities_data.filter((item) => item?.amenity?.trim())
        : [];
    const previewAmenities = amenities.slice(0, 5);
    const projectImage = getOriginalImageUrl(
        project?.amenities_images?.[0]?.image
    );

    useEffect(() => {
        if (!isModalOpen) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const closeOnEscape = (event) => {
            if (event.key === "Escape") {
                setIsModalOpen(false);
            }
        };
        window.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [isModalOpen]);

    if (amenities.length === 0) {
        return null;
    }

    const title = project?.amenities_title || "Amenities";

    return (
        <section
            className="section-padding-half">
            <div className="main-container-fluid">
                <div className="flex-row">
                    <div className="detail-amenities__content">
                        <div className="section-title">
                            <h2
                                className="detail-amenities__title white-color"
                                id="detail-amenities-title"
                            >
                                {title}
                            </h2>
                        </div>

                        <div className="detail-amenities__preview">
                            {previewAmenities.map((item, index) => (
                                <div
                                    className="detail-amenities__preview-item"
                                    key={item.amenity_id || `${item.amenity}- ${index} `}
                                >
                                    <p className="detail-amenities__number white-color">
                                        {String(index + 1).padStart(2, "0")} /
                                    </p>
                                    <div className="section-paragraph">
                                        <p className="white-color">{item.amenity}</p>
                                    </div>
                                </div>
                            ))}
                            {amenities.length > previewAmenities.length && (
                                <button
                                    className="detail-amenities__view-all"
                                    type="button"
                                    onClick={() => setIsModalOpen(true)}
                                    aria-haspopup="dialog"
                                >
                                    View All
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="amenities-image">

                        {projectImage && (
                            <div className="detail-amenities__image relative">
                                <Image
                                    src={projectImage}
                                    alt={`${project?.project_title || title} amenities`}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 767px) 100vw, 55vw"
                                />
                            </div>
                        )}

                    </div>
                </div>
                {isModalOpen && (
                    <div
                        className="detail-amenities__modal-backdrop"
                        onMouseDown={(event) => {
                            if (event.target === event.currentTarget) {
                                setIsModalOpen(false);
                            }
                        }}
                    >
                        <section
                            className="detail-amenities__modal"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="detail-amenities-modal-title"
                        >
                            <header className="detail-amenities__modal-header">
                                <h2 id="detail-amenities-modal-title">{title}</h2>
                                <button
                                    className="detail-amenities__close"
                                    type="button"
                                    aria-label="Close amenities"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    ×
                                </button>
                            </header>
                            <div className="detail-amenities__modal-list">
                                {amenities.map((item, index) => (
                                    <div
                                        className="detail-amenities__modal-item"
                                        key={
                                            item.amenity_id ||
                                            `${item.amenity} -${index} `
                                        }
                                    >
                                        {item.icon ? (
                                            <Image
                                                src={item.icon}
                                                alt=""
                                                width={28}
                                                height={28}
                                                unoptimized
                                            />
                                        ) : (
                                            <span
                                                className="detail-amenities__icon-placeholder"
                                                aria-hidden="true"
                                            >
                                                ◇
                                            </span>
                                        )}
                                        <span>{item.amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                )}
            </div>
        </section>
    );
}

export default DetailAmenities;
