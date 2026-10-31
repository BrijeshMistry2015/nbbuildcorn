import React from 'react'
import "./DetailCertificates.css"

function DetailCertificates() {
    return (
        <section className='section-padding-half white-background'>
            <div className='main-container'>
                <div className='inner-flex inner-flex-medium'>
                    <div className='section-title'>
                        <h2>Certificates</h2>
                    </div>
                    <div className='certificate_section inner-flex-big-64'>
                        <div>
                            <img src="/images/detail/plan-pass.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/detail/rera-approved.png" alt="" />
                        </div>
                        <div>
                            <img src="/images/detail/igbc.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailCertificates