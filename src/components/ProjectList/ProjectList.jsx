"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./ProjectList.css";

function ProjectList({ projects }) {
    const projectList = Array.isArray(projects)
        ? projects
        : Array.isArray(projects?.data)
            ? projects.data
            : Array.isArray(projects?.data?.data)
                ? projects.data.data
                : [];

    const getHighlight = (project, keyword) =>
        project?.highlights?.find((item) =>
            item?.name?.toLowerCase().includes(keyword.toLowerCase())
        );

    const getDescription = (value = "") =>
        value
            .replace(/<[^>]*>/g, " ")
            .replace(/&nbsp;/g, " ")
            .replace(/&rsquo;/g, "’")
            .replace(/&amp;/g, "&")
            .replace(/\s+/g, " ")
            .trim();

    return (
        <section className="project-list-section section-padding-big">
            <div className="main-container-fluid">
                <div className="project-list-container inner-flex inner-flex-big-48">
                    <div className="section-title">
                        <h2>
                            Ongoing Projects
                        </h2>
                    </div>
                    <div className="inner-flex inner-flex-bigger">
                        {projectList.map((project, index) => {
                            const title = project?.project_title || project?.project_name || "";
                            const slug = project?.slug || project?.project_slug || "";

                            const image =
                                project?.banner_data?.image_web_full ||
                                project?.banners_data?.images?.[0]?.image_web_full ||
                                project?.image_full ||
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
                            const originalImage = getOriginalImage(image);

                            const description = getDescription(
                                project?.big_text_pain ||
                                project?.big_text ||
                                ""
                            );

                            const possession = getHighlight(project, "status");
                            const terrace = getHighlight(project, "terrace");
                            const openSpace = getHighlight(project, "open space");
                            return (
                                <div
                                    className="project-list-item flex-row inner-flex-big"
                                    key={project?.project_id || project?.id || slug || index}
                                >
                                    <div className="project-list-image">
                                        {originalImage && (
                                            <Image
                                                src={originalImage}
                                                alt={title}
                                                className="project-list-img"
                                                width={884}
                                                height={1013}
                                            />
                                        )}
                                    </div>

                                    <div className="project-list-details">
                                        <div className="project-list-intro">
                                            <div className="section-title">
                                                <h2 className="secondary-color">{title}</h2>
                                            </div>
                                            <div className="section-paragraph">
                                                <p className="project-list-description neue-light-font">
                                                    {description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="project-list-info">
                                            <div className="project-list-info-item">
                                                <div className="section-title">
                                                    <h2>{project?.size_price || project?.project_type || "Residential"}</h2>
                                                </div>
                                                <div className="section-paragraph">
                                                    <p>Type</p>
                                                </div>
                                            </div>

                                            <div className="project-list-info-item">
                                                <div className="section-title">
                                                    <h2>{project?.location || "—"}</h2>
                                                </div>
                                                <div className="section-paragraph">
                                                    <p>Location</p>
                                                </div>
                                            </div>

                                            {possession && (
                                                <div className="project-list-info-item">
                                                    <div className="section-title">
                                                        <h2>{possession.tag_line || possession.name}</h2>
                                                    </div>
                                                    <div className="section-paragraph">
                                                        <p>Status</p>
                                                    </div>
                                                </div>
                                            )}

                                            {terrace && (
                                                <div className="project-list-info-item">
                                                    <div className="section-title">
                                                        <h2>{terrace.tag_line}</h2>
                                                    </div>
                                                    <div className="section-paragraph">
                                                        <p>{terrace.name}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {openSpace && (
                                                <div className="project-list-info-item">
                                                    <div className="section-title">
                                                        <h2>{openSpace.tag_line}</h2>
                                                    </div>
                                                    <div className="section-paragraph">
                                                        <p>{openSpace.name}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <Link href={slug ? `/${slug}` : "/projects"}>
                                                <button className="comman-button button-style-primary-outline flex-row alc">
                                                    <div className="section-content">
                                                        <p className="lh1">Explore</p>
                                                    </div>
                                                    <span className="material-symbols-outlined">
                                                        arrow_forward
                                                    </span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectList;