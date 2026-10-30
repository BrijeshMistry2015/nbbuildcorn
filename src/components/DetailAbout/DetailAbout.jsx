
import React from "react";
import "./DetailAbout.css";

function DetailAbout({ project }) {
    if (!project) return null;

    const description =
        project?.big_text_pain || project?.big_text || "";

    if (!description) return null;

    return (
        <section className="section-padding-half bg_palm">
            <div className="main-container">
                <div className="inner-flex">
                    <div className="section-paragraph">
                        <p className="white-color">About NB Palm</p>
                    </div>

                    <div className="detail-project-description section-subtitle-medium">
                        <h2 className="white-color"
                            dangerouslySetInnerHTML={{
                                __html: description,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DetailAbout;
