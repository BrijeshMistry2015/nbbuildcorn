
import React from "react";
import Image from "next/image";

function HomeBanner({ image_web_full }) {
    if (!image_web_full) return null;

    return (
        <section className="home-banner">
            <div className="home-banner-image">
                <Image
                    src={image_web_full}
                    alt="NB Buildcon Home Banner"
                    width={1600}
                    height={795}
                    priority
                    unoptimized
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
            </div>
        </section>
    );
}

export default HomeBanner;
