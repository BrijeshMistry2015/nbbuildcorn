import React from 'react'
import "./Header.css"

function Header() {
    return (
        <section className=''>
            <div className='main-container-fluid'>
                <div className='header-top flex-row'>
                    <div className='header_logo'>
                        <a href='/'>
                            <img src="/images/logo-blue.svg" alt="" />
                        </a>
                    </div>
                    <div className='header-link'>
                        <ul>
                            <li>
                                <div className='menubar inner-flex'>
                                    <div className='menu-bar_top'></div>
                                    <div className='menu-bar_middle'></div>
                                    <div className='menu-bar_bottom'></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header