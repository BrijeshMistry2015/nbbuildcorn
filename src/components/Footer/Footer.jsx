"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Footer.css"
import api from "@/helper/api.interceptor";
import { useEffect, useRef, useState } from "react";



function Footer({ ContactData, socialList = [] }) {
    const pathname = usePathname();
    const [navbarProjects, setNavbarProjects] = useState([]);
    const [openAccordion, setOpenAccordion] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.NavigationList();

                console.log("Footer Navigation Response:", response);

                const projects = Array.isArray(response)
                    ? response
                    : Array.isArray(response?.data)
                        ? response.data
                        : Array.isArray(response?.data?.data)
                            ? response.data.data
                            : [];

                console.log("Footer Projects:", projects);

                setNavbarProjects(projects);
            } catch (error) {
                console.error("Footer Navigation API Error:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="bg_blue section-padding-small">
            <div className="main-container">
                <div className="inner-flex inner-flex-big">
                    <div className="flex-row j-c-sb section-padding-v-small">
                        <div className="footer-logo">
                            <Link href="/">
                                <img src="/images/logo-white.png" alt="Logo" />
                            </Link>
                        </div>

                        <div className="flex-row inner-flex-big">

                            <div className="fcontact inner-flex inner-flex-common">
                                <div className="section-content">
                                    <h4 className="footer-column-title white-color">CONTACT</h4>
                                </div>
                                <div className="footer-contact white-color inner-flex ls4 lh5">
                                    <div className="section-content footer-hover">
                                        <p className="white-color">
                                            A-1301, Sankalp Iconic Tower, B/h. Shivalik Shilp, Nr. Iscon Cross Road, Iscon-Ambli Road, Ahmedabad 380 015, Gujarat, India.
                                        </p>
                                    </div>

                                    <div className="section-content-18">
                                        <a href="tel:+919909030381" className=" footer-hover">
                                            <p className="white-color">+91 7575 908 908</p>
                                        </a>
                                    </div>
                                    <div className="section-content-18 footer-hover">
                                        <a href="mailto:info@reneevdevelopers.com" className="footer-hover">
                                            <p className="white-color">
                                                info@nbbuildcon.com
                                            </p>
                                        </a>
                                    </div>

                                    <div className="social-links flex-row">
                                        <a
                                            href=""
                                            target="_blank"
                                        >
                                            <img src="/images/facebook.svg" alt="" />
                                        </a>
                                        <a
                                            href=""
                                            target="_blank"
                                        >
                                            <img src="/images/instagram.svg" alt="" />
                                        </a>
                                        <a
                                            href=""
                                            target="_blank"
                                        >
                                            <img src="/images/linkdin.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="inner-flex inner-flex-common">
                                <div className="section-content hide-tab-mobile">
                                    <h4 className="footer-column-title white-color">QUICK LINKS</h4>
                                </div>
                                <nav className="footer-links white-color inner-flex section-content-18 ls4 lh5 footer-hover hide-tab-mobile">
                                    <Link href="/" className={pathname === "/" ? "active" : ""}>
                                        HOME
                                    </Link>

                                    <Link
                                        href="/projects"
                                        className={
                                            pathname === "/projects" || pathname?.startsWith("/projects/")
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Projects
                                    </Link>

                                    <Link
                                        href="/about-us"
                                        className={
                                            pathname === "/about-us" || pathname?.startsWith("/about-us/")
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        About-us
                                    </Link>


                                    <Link
                                        href="/channelpartner"
                                        className={
                                            pathname === "/channelpartner" ||
                                                pathname?.startsWith("/channelpartner/")
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Channel Partner
                                    </Link>

                                    <Link
                                        href="/vendor"
                                        className={
                                            pathname === "/vendor" ||
                                                pathname?.startsWith("/vendor/")
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Vendor
                                    </Link>

                                    <Link
                                        href="/completed-projects"
                                        className={
                                            pathname === "/completed-projects" ||
                                                pathname?.startsWith("/completed-projects/")
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Completed Projects
                                    </Link>

                                    <Link
                                        href="/media"
                                        className={
                                            pathname === "/media" ||
                                                pathname?.startsWith("/media/")
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Media
                                    </Link>

                                    <Link
                                        href="/articles"
                                        className={
                                            pathname === "/articles" ||
                                                pathname?.startsWith("/articles/")
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Articles
                                    </Link>

                                    <Link
                                        href="/career"
                                        className={
                                            pathname === "/career" || pathname?.startsWith("/career/")
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Careers
                                    </Link>

                                    <Link
                                        href="/contact"
                                        className={
                                            pathname === "/contact" || pathname?.startsWith("/contact/")
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        Contact
                                    </Link>
                                </nav>
                                <div className="mobile-footer-accordion border-only visible-tab-mobile">
                                    <button
                                        type="button"
                                        className="mobile-footer-toggle"
                                        onClick={() =>
                                            setOpenAccordion((prev) =>
                                                prev === "quicklinks" ? null : "quicklinks"
                                            )
                                        }
                                        aria-expanded={openAccordion === "quicklinks"}
                                    >
                                        <h4 className="footer-column-title">Quick Links</h4>
                                        <div className="footer-down"><img src="/images/down-arrow.svg" alt="" /></div>
                                    </button>

                                    <div
                                        className={`mobile-footer-content ${openAccordion === "quicklinks" ? "open" : ""
                                            }`}
                                    >
                                        <nav className="footer-links">
                                            <Link href="/">Home</Link>
                                            <Link href="/projects">Projects</Link>
                                            <Link href="/about-us">About-us</Link>
                                            <Link href="/channelpartner">Channel Partner</Link>
                                            <Link href="/vendor">Vendor</Link>
                                            <Link href="/completed-projects">Completed Projects</Link>
                                            <Link href="/media">Media</Link>
                                            <Link href="/articles">Articles</Link>
                                            <Link href="/career">Careers</Link>
                                            <Link href="/contact">Contact</Link>
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div className="inner-flex inner-flex-common">
                                    <div className="section-content hide-tab-mobile">
                                        <h4 className="footer-column-title white-color">PROJECTS</h4>
                                    </div>
                                    <nav className="footer-links section-content-18 inner-flex white-color ls4 lh5 footer-hover hide-tab-mobile">
                                        {navbarProjects.map((project, index) => {
                                            const title =
                                                project?.project_title ||
                                                project?.project_name ||
                                                project?.title ||
                                                "";

                                            const slug = project?.project_slug || project?.slug || "";

                                            const href =
                                                project?.url ||
                                                project?.link ||
                                                (slug ? `/project/${slug}` : "");

                                            if (!title || !href) {
                                                return null;
                                            }

                                            const isActive =
                                                pathname === href || pathname?.startsWith(`${href}/`);

                                            return (
                                                <Link
                                                    key={project?.id || project?._id || slug || index}
                                                    href={href}
                                                    className={isActive ? "active" : ""}
                                                >
                                                    {title}
                                                </Link>
                                            );
                                        })}
                                    </nav>

                                    <div className="mobile-footer-accordion visible-tab-mobile">
                                        <button
                                            type="button"
                                            className="mobile-footer-toggle"
                                            onClick={() =>
                                                setOpenAccordion((prev) =>
                                                    prev === "projects" ? null : "projects"
                                                )
                                            }
                                            aria-expanded={openAccordion === "projects"}
                                        >
                                            <h4 className="footer-column-title">Projects</h4>
                                            <div className="footer-down"><img src="/images/down-arrow.svg" alt="" /></div>
                                        </button>

                                        <div
                                            className={`mobile-footer-content ${openAccordion === "projects" ? "open" : ""
                                                }`}
                                        >
                                            <nav className="footer-links">
                                                {navbarProjects.map((project, index) => {
                                                    const title =
                                                        project?.project_title ||
                                                        project?.project_name ||
                                                        project?.title ||
                                                        "";

                                                    const slug =
                                                        project?.project_slug ||
                                                        project?.slug ||
                                                        "";

                                                    const href =
                                                        project?.url ||
                                                        project?.link ||
                                                        (slug ? `/project/${slug}` : "");

                                                    if (!title || !href) return null;

                                                    return (
                                                        <Link
                                                            key={project?.id || project?._id || slug || index}
                                                            href={href}
                                                        >
                                                            {title}
                                                        </Link>
                                                    );
                                                })}
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-row j-c-sb">
                        <p className="white-color footer-bottom">
                            © {new Date().getFullYear()}  NB Buildcon 2026
                        </p>

                        <p className="white-color footer-bottom">
                            Powered by :{" "}
                            <a
                                href="https://www.reecosys.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-powered-by"
                            >
                                REECOSYS
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;