import React from 'react'
import "./DetailNatural.css"

function DetailNatural() {
    return (
        <section className='section-padding-half white-background'>
            <div className='main-container-fluid'>
                <div className='nature_detail flex-row inner-flex-big-64'>
                    <div className='natural-image'>
                        <img src="/images/detail/terrace-living.webp" alt="" />
                    </div>
                    <div className='natural-text section-paragraph'>
                        <p>Here, at the uppermost levels of NB Palm, the boundary between inside and outside gently disappears. Open-air terraces frame the sky, welcome natural light, and offer panoramic views, defined by expansive layouts. Every element enhances privacy, openness, and a heightened sense of living above the everyday.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailNatural