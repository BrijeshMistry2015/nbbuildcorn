"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";

function Header() {
    const pathname = usePathname();

    const isHomePage = pathname === "/";
    const isProjectDetailPage = pathname.startsWith("/projects/");

    const isWhiteHeader = isHomePage || isProjectDetailPage;

    return (
        <section
            className={`site-header ${isWhiteHeader ? "home-header" : "inner-header"
                }`}
        >
            <div className="main-container-fluid">
                <div className="header-top flex-row">
                    <div className="header_logo">
                        <Link href="/">
                            <img src="/images/logo-blue.svg" alt="Logo" />
                        </Link>
                    </div>

                    <div className="header-link">
                        <ul>
                            <li>
                                <div className="menubar inner-flex">
                                    <div className="menu-bar_top"></div>
                                    <div className="menu-bar_middle"></div>
                                    <div className="menu-bar_bottom"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;