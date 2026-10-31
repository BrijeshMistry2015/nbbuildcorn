"use client";

import React from "react";
import Image from "next/image";
import "./DetailHighlight.css";

function DetailHighlight({ project }) {
    if (!project) return null;

    const highlights = project?.highlights || [];

    const highlightImages = {
        "880": "/images/detail/palm.webp",
        "881": "/images/detail/palm.webp",
        "887": "/images/detail/palm.webp",
        "888": "/images/detail/palm.webp",
    };

    const highlightImage = highlightImages[String(project.project_id)];

    return (
        <section className="project-highlights section-padding-half white-background">
            <div className="main-container-fluid">
                <div className="flex-row inner-flex-big-96 project-high">
                    <div className="project-highlights-image">
                        {highlightImage && (
                            <Image
                                src={highlightImage}
                                alt={project.project_title || "Project"}
                                width={1200}
                                height={1400}
                                className="project-highlights-img"
                            />
                        )}
                    </div>

                    <div className="project-highlights-content inner-flex inner-flex-big-64">
                        {highlights.map((item, index) => (
                            <div
                                className="project-highlight-item"
                                key={index}
                            >
                                <div className="section-title-big">
                                    <h2>{item.tag_line}</h2>
                                </div>
                                <div className="link-font-size">
                                    <p className="neue-light-font gray-color">{item.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailHighlight;