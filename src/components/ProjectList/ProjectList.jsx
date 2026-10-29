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
                <div className="project-list-container">
                    {projectList.map((project, index) => {
                        const title = project?.project_title || project?.project_name || "";
                        const slug = project?.slug || project?.project_slug || "";

                        const image =
                            project?.banner_data?.image_web_full ||
                            project?.banners_data?.images?.[0]?.image_web_full ||
                            project?.image_full ||
                            "";

                        const description = getDescription(
                            project?.big_text_pain ||
                            project?.big_text ||
                            project?.page_description ||
                            ""
                        );

                        const possession = getHighlight(project, "status");
                        const terrace = getHighlight(project, "terrace");
                        const openSpace = getHighlight(project, "open space");

                        return (
                            <div
                                className="project-list-item"
                                key={project?.project_id || project?.id || slug || index}
                            >
                                <div className="project-list-image">
                                    {image && (
                                        <img
                                            src={image}
                                            alt={title}
                                            className="project-list-img"
                                            width={1980}
                                            height={900}
                                        />
                                    )}
                                </div>

                                <div className="project-list-details">
                                    <div className="project-list-intro">
                                        <h2>{title}</h2>

                                        <p className="project-list-description">
                                            {description}
                                        </p>
                                    </div>

                                    <div className="project-list-info">
                                        <div className="project-list-info-item">
                                            <h3>{project?.size_price || project?.project_type || "Residential"}</h3>
                                            <span>Type</span>
                                        </div>

                                        <div className="project-list-info-item">
                                            <h3>{project?.location || "—"}</h3>
                                            <span>Location</span>
                                        </div>

                                        {possession && (
                                            <div className="project-list-info-item">
                                                <h3>{possession.tag_line || possession.name}</h3>
                                                <span>Status</span>
                                            </div>
                                        )}

                                        {terrace && (
                                            <div className="project-list-info-item">
                                                <h3>{terrace.tag_line}</h3>
                                                <span>{terrace.name}</span>
                                            </div>
                                        )}

                                        {openSpace && (
                                            <div className="project-list-info-item">
                                                <h3>{openSpace.tag_line}</h3>
                                                <span>{openSpace.name}</span>
                                            </div>
                                        )}
                                    </div>

                                    <Link
                                        href={slug ? `/ project / ${slug}` : "/projects"}
                                        className="project-list-explore"
                                    >
                                        Explore <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProjectList;