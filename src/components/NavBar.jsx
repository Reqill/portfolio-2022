import React from "react";
import { Twirl as Hamburger } from 'hamburger-react'

export default function NavBar({
    mobile,
    visibleNav,
    isNavbarOpen,
    _generateMobileNavLinks,
    lang,
    setLang,
    setNavbarOpen,
    _generateDesktopNavLinks
}) {
    return <div className={`fixed top-0 inline-flex justify-center ease-in-out w-full mx-auto align-middle transition-transform duration-300 pb-1 ${!mobile ? "pt-1 pb-2" : null} ${visibleNav ? "translate-y-0 bg-bg/70  backdrop-blur-lg" : "-translate-y-full bg-bg backdrop-blur-none"}`}>
        <div className="inline-flex justify-between m-auto align-middle w-full md:w-[95%]">
            <a className="w-16 my-auto ml-[.35rem]" href="/">
                <svg version="1.1" id="Warstwa_1" x="0px" y="0px" viewBox="0 0 545.7 330" className="fill-header hover:fill-accent transition-all duration-150">
                    <polygon points="244.1,245.3 223.4,280.6 165.5,280.6 215.2,195.8" />
                    <polygon points="244.2,49.5 186.5,49.5 186.5,49.4 186.5,49.5 186.5,49.5 51,280.6 108.9,280.6 215.3,98.7 321.8,280.6 379.7,280.6" />
                    <polygon points="359.2,49.4 359.2,49.4 301.5,49.4 330.3,98.7 436.8,280.6 494.7,280.6" />
                </svg>
            </a>
            {mobile && <>
                <div className={`fixed h-screen right-0 bg-card flex flex-col justify-center align-middle transition-all duration-[250ms] ${isNavbarOpen ? "translate-x-0 shadow-lg" : "translate-x-full shadow-none"}`}>
                    <nav className="px-16 py-6">
                        <ul className="list-none flex-col flex justify-center my-auto">
                            {_generateMobileNavLinks(lang)}
                        </ul>
                    </nav>
                    <div className="absolute bottom-0 inline-flex justify-center left-0 right-0">
                        <p className="mx-auto select none transition-colors duration-150 text-text font-mono font-medium flex-row w-fit tracking-tighter text-lg p-3">
                            <span className={`select-none ${lang === "en" ? "text-accent" : "text-text hover:text-header "} p-1`} onClick={() => setLang("en")}>
                                EN
                            </span>
                            <span className={`select-none ${lang === "pl" ? "text-accent" : "text-text hover:text-header"} p-1`} onClick={() => setLang("pl")}>
                                PL
                            </span>
                        </p>
                    </div>
                </div>
                <div className="my-auto pb-px">
                    <Hamburger toggled={isNavbarOpen} toggle={setNavbarOpen} color="#44fee0" rounded distance='md' size="26" />
                </div>
            </>}
            {!mobile && <>
                <div className={`inline-flex aling-middle pt-[.3rem]`}>
                    <nav className="my-auto">
                        <ul className="list-none flex-row flex align-middle my-auto">
                            {_generateDesktopNavLinks(lang)}
                        </ul>
                    </nav>
                    <div className="my-auto pl-6">
                        <p className="mx-auto select none transition-colors duration-150 text-text font-mono font-medium flex-row w-fit tracking-tighter text-base p-3">
                            <span className={`select-none ${lang === "en" ? "text-accent cursor-auto" : "text-text cursor-pointer hover:text-header "} p-[.15rem]`} onClick={() => setLang("en")}>
                                EN
                            </span>
                            <span className={`select-none ${lang === "pl" ? "text-accent cursor-auto" : "text-text cursor-pointer hover:text-header"} p-[.15rem]`} onClick={() => setLang("pl")}>
                                PL
                            </span>
                        </p>
                    </div>
                </div>
            </>}

        </div>

    </div>;
}
